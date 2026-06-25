import { useStore } from '@nanostores/react';
import { localeStore, setLocale, type Locale } from '@i18n/store';

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
      className="px-2 py-1 rounded-lg text-sm font-mono font-medium transition-colors duration-200"
      style={{ color: 'var(--color-text-secondary)' }}
    >
      {locale === 'es' ? 'EN' : 'ES'}
    </button>
  );
}
