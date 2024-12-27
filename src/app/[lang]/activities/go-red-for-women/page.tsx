import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import Image from 'next/image';
import styles from './styles.module.css';

const GoRedForWomen = async (props: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          {dictionaries['go-red-for-women']['title']}
        </h1>
        <p
          className={styles.description}
          dangerouslySetInnerHTML={{
            __html: dictionaries['go-red-for-women']['description'],
          }}
        />
        <br />
        <br />
        <div className={styles.imageWrapper}>
          <div className={styles.cardImageOne}>
            <Image
              fill
              src="/images/go-red-for-women/Go-Red-for-Women-0.gif"
              alt="GoRedForWomen"
            />
          </div>
          <div className={styles.cardImageTwo}>
            <Image
              fill
              src="/images/go-red-for-women/Go-Red-for-Women-1.jpg"
              alt="GoRedForWomen"
            />
          </div>
          <div className={styles.cardImageThree}>
            <Image
              fill
              src="/images/go-red-for-women/Go-Red-for-Women-2.jpg"
              alt="GoRedForWomen"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoRedForWomen;
