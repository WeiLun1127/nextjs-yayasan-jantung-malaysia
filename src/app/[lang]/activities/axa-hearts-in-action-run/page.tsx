import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import Image from 'next/image';
import styles from './styles.module.css';

const AXAHeartsInAction = async (props: {
  params: Promise<{ lang: Locale }>;
}) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);

  return (
    <div>
      <h1 className={styles.title}>
        {dictionaries['axa-hearts-in-action-run']['title']}
      </h1>
      <div className={styles.card}>
        <p
          className={styles.description}
          dangerouslySetInnerHTML={{
            __html: dictionaries['axa-hearts-in-action-run']['description'],
          }}
        />
      </div>

      <br />
      <br />

      {/* Image Cards */}
      <div className={styles.cardContainer}>
        <div className={styles.imageCard}>
          <div className={styles.cardImage}>
            <Image
              fill
              src="/images/axa/AXA-Virtual-Run-2020-Medal.png"
              alt="AXA-Virtual-Run-2020-Medal"
            />
          </div>
        </div>

        <div className={styles.imageCard}>
          <div className={styles.cardImage}>
            <Image
              fill
              src="/images/axa/AXA-Virtual-Run-2020-Poster.png"
              alt="AXA-Virtual-Run-2020-Poster"
            />
          </div>
        </div>

        <div className={styles.imageCard}>
          <div className={styles.cardImage}>
            <Image
              fill
              src="/images/axa/AXA-Virtual-Run-2020-T-Shirt.png"
              alt="AXA-Virtual-Run-2020-T-Shirt"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AXAHeartsInAction;
