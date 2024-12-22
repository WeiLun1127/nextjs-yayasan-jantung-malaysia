import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import Image from 'next/image';
import styles from './styles.module.css';

const PromotingHealth = async (props: {
  params: Promise<{ lang: Locale }>;
}) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);

  return (
    <div className={styles.card}>
      <h1 className={styles.cardTitle}>
        {dictionaries['promoting-health']['title']}
      </h1>
      <p
        className={styles.cardDescription}
        dangerouslySetInnerHTML={{
          __html: dictionaries['promoting-health']['description'],
        }}
      />

      <div className={styles.cardImage}>
        <Image
          fill
          src="/images/promoting-health/activities3.jpg"
          alt="Promoting Health"
        />
      </div>
    </div>
  );
};

export default PromotingHealth;
