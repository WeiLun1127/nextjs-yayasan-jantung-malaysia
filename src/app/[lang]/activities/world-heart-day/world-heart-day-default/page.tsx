import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import Image from 'next/image';
import styles from './styles.module.css';

const WorldHeartDayDefault = async (props: {
  params: Promise<{ lang: Locale }>;
}) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>
        {dictionaries['world-heart-day']['title']}
      </h1>
      <p
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html: dictionaries['world-heart-day']['description'],
        }}
      />

      <div className={styles.cardImage}>
        <Image
          fill
          src="/images/world-heart-day/Whd-2013-1.jpg"
          alt="world-heart-day"
        />
      </div>
    </div>
  );
};

export default WorldHeartDayDefault;
