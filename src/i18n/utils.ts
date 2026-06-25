import { ui, type UIKey } from './ui';
import type { Locale } from './store';

/** Get a translation string for a given locale and key. */
export function t(locale: Locale, key: UIKey): string {
  return ui[locale][key] ?? ui['es'][key] ?? key;
}
