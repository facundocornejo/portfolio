// Convierte capturas y secuencias de frames a WebP para public/media/.
//
// Por qué WebP y no PNG/GIF: los tres discos de esta máquina están al 96% y el
// sitio se sirve estático. WebP pesa una fracción, y `sharp` —que ya viene con
// Astro— sabe escribir WebP *animado*, que es entre 5 y 10 veces más liviano
// que el GIF equivalente. No hay ffmpeg ni gifsicle en esta máquina.
//
// Uso:
//   node scripts/optimize-media.mjs
//
// Lee el manifiesto de abajo. Cada entrada es un proyecto con sus capturas
// fijas y, opcionalmente, una animación armada a partir de varios frames.

import sharp from 'sharp';
import { mkdir, readdir, stat } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'public', 'media');

/** Ancho máximo de una captura fija. Las cards y la portada nunca pasan de ~1200 CSS px. */
const STILL_WIDTH = 1400;
/** Las animaciones se sirven más chicas: el peso crece por cuadro. */
const ANIMATED_WIDTH = 880;

/**
 * @typedef {{ out: string, from: string, crop?: { top: number, height: number } }} Still
 * @typedef {{ out: string, frames: string[], delay?: number, fit?: 'cover' | 'contain' }} Animation
 * @typedef {{ project: string, source?: string, stills?: Still[], animations?: Animation[] }} Entry
 */

/** @type {Entry[]} */
const MANIFEST = [
  {
    project: 'beast-motors',
    stills: [
      { out: 'catalogo', from: 'screenshot-1788016185140-13.jpg' },
      { out: 'home', from: 'screenshot-1788015981346-0.jpg' },
      { out: 'ficha-vehiculo', from: 'screenshot-1788016004075-2.jpg' },
    ],
    animations: [
      {
        out: 'filtros',
        delay: 1100,
        frames: [
          'screenshot-1788016185139-10.jpg',
          'screenshot-1788016185139-11.jpg',
          'screenshot-1788016185140-12.jpg',
          'screenshot-1788016185140-13.jpg',
        ],
      },
    ],
  },
  {
    project: 'dobleg',
    stills: [
      { out: 'home', from: 'screenshot-1788016079048-4.jpg' },
      { out: 'productos', from: 'screenshot-1788016079049-6.jpg' },
    ],
  },
  {
    project: 'flight-bot',
    stills: [
      { out: 'dashboard', from: 'screenshot-1788016106227-7.jpg' },
      { out: 'alertas', from: 'screenshot-1788016106228-8.jpg' },
    ],
  },
  {
    // Recapturado el 29/08 despues de restaurar el proyecto de Supabase: el
    // catalogo vuelve a traer los animales reales, asi que ya no hace falta
    // recortar el cartel de error.
    project: 'adoptly',
    stills: [
      { out: 'catalogo', from: 'screenshot-1788023592846-30.jpg' },
      { out: 'home', from: 'screenshot-1788023592846-29.jpg' },
      { out: 'ficha', from: 'screenshot-1788023612674-31.jpg' },
    ],
  },
  {
    // Capturas propias del proyecto, hechas contra el seed sintetico: ningun
    // dato de persona real aparece en ellas.
    project: 'punto-natural',
    source: 'B:/punto natural/screen',
    stills: [
      { out: 'pos', from: 's19fix-pos-owner-compacta.jpg' },
      { out: 'productos', from: 's20-productos-listado.jpg' },
      { out: 'clientes', from: 's21-clientes.jpg' },
      { out: 'stock', from: 's21-stock-recepcion.jpg' },
      { out: 'auditoria', from: 's22-auditoria.jpg' },
      { out: 'facturas', from: 's22-facturas.jpg' },
    ],
    animations: [
      {
        // La misma pantalla a cuatro anchos: es la prueba del responsive.
        out: 'responsive',
        delay: 1300,
        fit: 'contain',
        frames: [
          's24-gastos-1920.png',
          's24-gastos-1366.png',
          's24-gastos-1024.png',
          's24-gastos-768.png',
        ],
      },
    ],
  },
];

/** Carpeta donde la extensión de Chrome deja las capturas de esta sesión. */
const SOURCE = process.env.MEDIA_SOURCE;

async function still(project, { out, from, crop }, source) {
  const dest = join(OUT, project, `${out}.webp`);
  let img = sharp(join(source, from));
  if (crop) {
    // Recorta una franja horizontal completa: sirve para dejar afuera algo que
    // no queremos mostrar (un cartel de error, un banner de cookies).
    const { width } = await img.metadata();
    img = img.extract({ left: 0, top: crop.top, width, height: crop.height });
  }
  await img
    .resize({ width: STILL_WIDTH, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(dest);
  return dest;
}

/**
 * Compone varios frames en un único WebP animado.
 *
 * sharp 0.34 acepta un array de buffers con `join: { animated: true }` y arma
 * la animación sola. Todos los cuadros tienen que medir exactamente lo mismo,
 * así que se redimensionan con `fit: 'cover'` antes de unirlos.
 */
async function animation(project, { out, frames, delay = 1000, fit = 'cover' }, source) {
  const dest = join(OUT, project, `${out}.webp`);

  const first = await sharp(join(source, frames[0]))
    .resize({ width: ANIMATED_WIDTH, withoutEnlargement: true })
    .toBuffer({ resolveWithObject: true });
  const { width, height } = first.info;

  const buffers = await Promise.all(
    frames.map((f) =>
      sharp(join(source, f))
        .resize({ width, height, fit, background: '#0d1117' })
        .toBuffer(),
    ),
  );

  await sharp(buffers, { join: { animated: true } })
    .webp({ quality: 62, effort: 6, loop: 0, delay: frames.map(() => delay) })
    .toFile(dest);

  return dest;
}

async function main() {
  const needsDefault = MANIFEST.some((e) => !e.source);
  if (needsDefault && !SOURCE) {
    console.error('Falta MEDIA_SOURCE: la carpeta con las capturas en bruto.');
    process.exit(1);
  }

  let total = 0;
  for (const entry of MANIFEST) {
    await mkdir(join(OUT, entry.project), { recursive: true });

    const source = entry.source ?? SOURCE;

    for (const s of entry.stills ?? []) {
      const dest = await still(entry.project, s, source);
      const { size } = await stat(dest);
      total += size;
      console.log(`  ${entry.project}/${s.out}.webp  ${(size / 1024).toFixed(0)} KB`);
    }

    for (const a of entry.animations ?? []) {
      const dest = await animation(entry.project, a, source);
      const { size } = await stat(dest);
      total += size;
      console.log(
        `  ${entry.project}/${a.out}.webp  ${(size / 1024).toFixed(0)} KB  (animado, ${a.frames.length} cuadros)`,
      );
    }
  }

  console.log(`\nTotal: ${(total / 1024 / 1024).toFixed(2)} MB`);
}

await main();
