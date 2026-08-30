import { useStore } from '@nanostores/react';
import { localeStore, setLocale, type Locale } from '@i18n/store';

// The inline script in Layout.astro already detected the locale and set it on
// <html lang>. The nanostores atom defaults to 'es', so without this sync the
// toggle can render the wrong label and its first click becomes a no-op.
if (typeof document !== 'undefined') {
  const lang = document.documentElement.lang;
  if (lang === 'es' || lang === 'en') {
    localeStore.set(lang);
  }
}

export default function LanguageToggle() {
  const locale = useStore(localeStore);

  const toggle = () => {
    const next: Locale = locale === 'es' ? 'en' : 'es';
    setLocale(next);
    // Dispatch custom event so Astro components can react
    window.dispatchEvent(new CustomEvent('locale-change', { detail: next }));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${locale === 'es' ? 'English' : 'Español'}`}
      className="icon-btn text-sm font-mono font-medium"
    >
      {locale === 'es' ? 'EN' : 'ES'}
    </button>
  );
}
