import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import Image from 'next/image';
import styles from './styles.module.css';

const CPR = async (props: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          {dictionaries['friends-of-the-foundation']['title']}
        </h1>
        <p
          className={styles.description}
          dangerouslySetInnerHTML={{
            __html: dictionaries['friends-of-the-foundation']['description'],
          }}
        />
        <div className={styles.cardImage}>
          <Image
            fill
            src="/images/friends-of-the-foundation/17215601_s.jpg"
            alt="friendsOfTheFoundation"
          />
        </div>
      </div>
    </div>
  );
};

export default CPR;
