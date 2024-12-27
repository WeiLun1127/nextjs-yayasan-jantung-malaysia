import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import Image from 'next/image';
import styles from './styles.module.css';

const WordHeart2012 = async (props: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          {dictionaries['world-heart-day-2012']['title']}
        </h1>

        {/* Description for Past Event */}
        <p className={`${styles.description} ${styles.centeredDescription}`}>
          {dictionaries['world-heart-day-2012']['past-event']}
          <br />
          <br />
        </p>

        <div className={styles.cardImage}>
          <Image
            fill
            src="/images/world-heart-day/2014/logo_WHD2014.gif"
            alt="Adam Tan Huang Chew"
          />
        </div>

        <br />
        <br />

        <h1 className={styles.title}>
          {dictionaries['world-heart-day-2012']['subtitle']}
        </h1>

        <p
          className={styles.description}
          dangerouslySetInnerHTML={{
            __html: dictionaries['world-heart-day-2012']['description'],
          }}
        />

        <div className={styles.cardImageTwo}>
          <Image
            fill
            src="/images/world-heart-day/2014/banner_WHD2014_MY.jpg"
            alt="Adam Tan Huang Chew"
          />
        </div>
      </div>
    </div>
  );
};

export default WordHeart2012;
