'use client';

import { type Locale } from '@/i18n-config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './styles.module.css';

const LanguageSelector = () => {
  const pathname = usePathname();

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const setLanguageCookie = (locale: Locale) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/`;
  };

  return (
    <div className={styles.languageSelector}>
      <Link
        href={redirectedPathname('en')}
        className={styles.languageLink}
        onClick={() => setLanguageCookie('en')}
      >
        ENG
      </Link>
      <span>|</span>
      <Link
        href={redirectedPathname('my')}
        className={styles.languageLink}
        onClick={() => setLanguageCookie('my')}
      >
        BM
      </Link>
      <span>|</span>
      <Link
        href={redirectedPathname('cn')}
        className={styles.languageLink}
        onClick={() => setLanguageCookie('cn')}
      >
        CN
      </Link>
    </div>
  );
};

export default LanguageSelector;
