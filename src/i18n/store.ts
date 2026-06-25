import { atom } from 'nanostores';

export type Locale = 'es' | 'en';

export const localeStore = atom<Locale>('es');

/** Initialize locale: localStorage > timezone > browser language > default 'en' */
export function initLocale(): void {
  if (typeof window === 'undefined') return;

  const saved = localStorage.getItem('locale') as Locale | null;
  if (saved === 'es' || saved === 'en') {
    localeStore.set(saved);
    return;
  }

  let detected: Locale = 'en';
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (tz.includes('Argentina')) {
      detected = 'es';
    } else if (navigator.language.slice(0, 2) === 'es') {
      detected = 'es';
    }
  } catch {
    if (navigator.language.slice(0, 2) === 'es') detected = 'es';
  }
  localeStore.set(detected);
}

export function setLocale(locale: Locale): void {
  localeStore.set(locale);
  localStorage.setItem('locale', locale);
  document.documentElement.lang = locale;
}
