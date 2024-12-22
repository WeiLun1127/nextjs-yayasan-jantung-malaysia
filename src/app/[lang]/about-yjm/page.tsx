import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import Image from 'next/image';
import styles from './styles.module.css';

const AboutYJM = async (props: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{dictionaries['about-YJM']['title']}</h1>
      <h2 className={styles.subtitle}>
        {dictionaries['about-YJM']['subtitle']}
      </h2>
      <p
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html: dictionaries['about-YJM']['description'],
        }}
      />
      <div className={styles.logoContainer}>
        <Image fill src="/images/about-yjm/download.png" alt="logo-yjm" />
      </div>
    </div>
  );
};

export default AboutYJM;
