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

  return (
    <div className={styles.languageSelector}>
      <Link href={redirectedPathname('en')} className={styles.languageLink}>
        ENG
      </Link>
      <span>|</span>
      <Link href={redirectedPathname('my')} className={styles.languageLink}>
        BM
      </Link>
      <span>|</span>
      <Link href={redirectedPathname('cn')} className={styles.languageLink}>
        CN
      </Link>
    </div>
  );
};

export default LanguageSelector;
