import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import Image from 'next/image';
import { FaCalendar, FaRegListAlt } from 'react-icons/fa';
import styles from './styles.module.css';

const WordHeart2014 = async (props: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);

  return (
    <div>
      <div className={styles.card}>
        <h1 className={styles.title}>
          {dictionaries['world-heart-day-2014']['title']}
        </h1>

        <div className={styles.cardImage}>
          <Image
            fill
            src="/images/world-heart-day/2014/logo_WHD2014.gif"
            alt="Adam Tan Huang Chew"
          />
        </div>

        <br />
        <br />

        <p
          className={styles.description}
          dangerouslySetInnerHTML={{
            __html: dictionaries['world-heart-day-2014']['description'],
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

      <div className={styles.cardContainer}>
        <div className={styles.card1}>
          <FaCalendar className={styles.icon} />
          <h1 className={styles.title}>
            {dictionaries['world-heart-day-2014']['at-the-heart-of-health']}
          </h1>
          <h2 className={styles.subtitle}>
            {dictionaries['world-heart-day-2014']['details-of-event']}
          </h2>
          <p className={styles.description}>
            {dictionaries['world-heart-day-2014']['date']} : 28 September 2014,
            Sunday <br />
            {dictionaries['world-heart-day-2014']['time']} : 6 AM - 11 AM <br />
            {dictionaries['world-heart-day-2014']['venue']} : Astaka, Taman
            Tasik Titiwangsa, Kuala Lumpur <br />
          </p>
        </div>

        <div className={styles.card1}>
          <FaRegListAlt className={styles.icon} />
          <h2 className={styles.subtitle}>
            {dictionaries['world-heart-day-2014']['program-highlights']}
          </h2>
          <ul className={styles.description}>
            <li>{dictionaries['world-heart-day-2014']['walk-a-mile']}</li>
            <li>{dictionaries['world-heart-day-2014']['free-goodie-bags']}</li>
            <li>
              {dictionaries['world-heart-day-2014']['free-health-screening']}
            </li>
            <li>{dictionaries['world-heart-day-2014']['fun-games']}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WordHeart2014;
