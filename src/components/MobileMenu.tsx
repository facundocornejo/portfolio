import { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { localeStore } from '@i18n/store';
import { t } from '@i18n/utils';

const navLinks = [
  { key: 'nav.projects' as const, href: '#projects' },
  { key: 'nav.about' as const, href: '#about' },
  { key: 'nav.contact' as const, href: '#contact' },
  { key: 'nav.resume' as const, href: '/resume' },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useStore(localeStore);

  // Close menu on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        className="p-2 rounded-lg"
        style={{ color: 'var(--color-text-primary)' }}
      >
        <svg
          className="size-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Overlay + menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={() => setIsOpen(false)}
        >
          <nav
            className="absolute right-0 top-0 h-full w-64 p-8 flex flex-col gap-6"
            style={{
              backgroundColor: 'var(--color-bg-card)',
              borderLeft: '1px solid var(--color-border)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="self-end p-2"
              style={{ color: 'var(--color-text-primary)' }}
            >
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={(e) => {
                  setIsOpen(false);
                  if (link.href.startsWith('#')) {
                    e.preventDefault();
                    const el = document.querySelector(link.href);
                    if (el) {
                      setTimeout(() => {
                        el.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }
                }}
                className="text-lg font-medium transition-colors duration-200"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {t(locale, link.key)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
