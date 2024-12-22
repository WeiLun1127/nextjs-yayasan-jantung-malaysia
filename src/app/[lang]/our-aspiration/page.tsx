import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import Image from 'next/image';
import styles from './styles.module.css';

const OurAspiration = async (props: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);

  return (
    <div>
      <h1 className={styles.title}>
        {dictionaries['our-aspiration']['title']}
      </h1>
      <p className={styles.description}>
        {dictionaries['our-aspiration']['description']}
      </p>
      <p className={styles.description}>
        {dictionaries['our-aspiration']['important-areas']}
      </p>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <Image
              fill
              src="/images/our-aspiration/aspiration1.jpg"
              alt="Aspiration1"
            />
          </div>
          <h2 className={styles.cardTitle}>
            {dictionaries['our-aspiration']['research']}
          </h2>
          <p className={styles.cardDescription}>
            {dictionaries['our-aspiration']['research-description']}
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <Image
              fill
              src="/images/our-aspiration/aspiration2.jpg"
              alt="Aspiration2"
            />
          </div>
          <h2 className={styles.cardTitle}>
            {dictionaries['our-aspiration']['public-education']}
          </h2>
          <p className={styles.cardDescription}>
            {dictionaries['our-aspiration']['public-education-description']}
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <Image
              fill
              src="/images/our-aspiration/aspiration3.jpg"
              alt="Aspiration3"
            />
          </div>
          <h2 className={styles.cardTitle}>
            {dictionaries['our-aspiration']['professional-education']}
          </h2>
          <p className={styles.cardDescription}>
            {
              dictionaries['our-aspiration'][
                'professional-education-description'
              ]
            }
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <Image
              fill
              src="/images/our-aspiration/aspiration4.jpg"
              alt="Aspiration4"
            />
          </div>
          <h2 className={styles.cardTitle}>
            {dictionaries['our-aspiration']['rehabilitation']}
          </h2>
          <p className={styles.cardDescription}>
            {dictionaries['our-aspiration']['rehabilitation-description']}
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <Image
              fill
              src="/images/our-aspiration/aspiration5.jpg"
              alt="Aspiration5"
            />
          </div>
          <h2 className={styles.cardTitle}>
            {dictionaries['our-aspiration']['public-service']}
          </h2>
          <p className={styles.cardDescription}>
            {dictionaries['our-aspiration']['public-service-description']}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurAspiration;
