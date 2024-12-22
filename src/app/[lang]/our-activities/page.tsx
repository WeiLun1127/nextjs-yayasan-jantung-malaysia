import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import Image from 'next/image';
import styles from './styles.module.css';

const OurActivities = async (props: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <h1 className={styles.cardTitle}>
          {dictionaries['our-activities']['title']}
        </h1>
        <p
          className={styles.cardDescription}
          dangerouslySetInnerHTML={{
            __html: dictionaries['our-activities']['description'],
          }}
        />
        <div className={styles.cardImage}>
          <Image
            fill
            src="/images/our-acitivties/activities1.jpg"
            alt="Our Activities"
          />
        </div>
      </div>
    </div>
  );
};

export default OurActivities;
