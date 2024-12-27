import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import Image from 'next/image';
import styles from './styles.module.css';

const CPR = async (props: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          {dictionaries['cpr-class-regulations-and-syllabus']['title']}
        </h1>
        <h2 className={styles.subtitle}>
          {dictionaries['cpr-class-regulations-and-syllabus']['subtitle']}
        </h2>
        <p
          className={styles.description}
          dangerouslySetInnerHTML={{
            __html:
              dictionaries['cpr-class-regulations-and-syllabus']['description'],
          }}
        />
        <br />
        <br />
        <div className={styles.cardImage}>
          <Image fill src="/images/cpr/11700251_s.jpg" alt="cpr" />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default CPR;
