import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import { FaHeart, FaNewspaper, FaUsers, FaWalking } from 'react-icons/fa';
import styles from './styles.module.css';

const WordHeart2011 = async (props: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {dictionaries['world-heart-day-2011']['title']}
      </h1>
      <p className={styles.description}>
        {dictionaries['world-heart-day-2011']['past-event']}
        <br />
        <br />
      </p>

      {/* Cards Section */}
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaHeart />
            {dictionaries['world-heart-day-2011']['subtitle']}
          </h2>
          <p className={styles.cardDescription}>
            Sunday 25 September 2011, Taman Tasik Titiwangsa
            <br />
            <br />
            <b>{dictionaries['world-heart-day-2011']['details-of-event']}</b>
            <br />
            {dictionaries['world-heart-day-2011']['date']}: Sunday, 25 September
            2011
            <br />
            {dictionaries['world-heart-day-2011']['time']}: 7.00 am - 10.30 am
            <br />
            {dictionaries['world-heart-day-2011']['venue']}: Taman Tasik
            Titiwangsa, Kuala Lumpur
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaUsers />
            {dictionaries['world-heart-day-2011']['partners-sponsors']}
          </h2>
          <div className={styles.cardDescription}>
            <div className={styles.subCard}>Ministry of Health Malaysia</div>
            <div className={styles.subCard}>
              National Heart Association of Malaysia
            </div>
            <div className={styles.subCard}>Kuala Lumpur City Hall</div>
            <div className={styles.subCard}>Nestle Nesvita Omega Plus</div>
          </div>
        </div>
      </div>

      {/* Centered Activities Card (with new layout) */}
      <div className={styles.activityCardsContainer}>
        <div className={styles.leftCard}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <FaWalking />
              {dictionaries['world-heart-day-2011']['activities-include']}
            </h2>
            <div className={styles.cardDescription}>
              <div className={styles.subCard}>Poster Exhibition</div>
              <div className={styles.subCard}>Walk-A-Mile Final Event</div>
              <div className={styles.subCard}>Health Talks</div>
              <div className={styles.subCard}>
                Healthy heart breakfast from Nestle
              </div>
              <div className={styles.subCard}>Aerobic Exercises</div>
              <div className={styles.subCard}>Line Dancing Performance</div>
              <div className={styles.subCard}>Martial Arts Performance</div>
              <div className={styles.subCard}>Jump Rope Demonstration</div>
              <div className={styles.subCard}>
                Free Health Screening for Blood Pressure, Blood Sugar,
                Cholesterol, Weight
              </div>
              <div className={styles.subCard}>Anti Smoking Campaign</div>
              <div className={styles.subCard}>Lucky Draws</div>
            </div>
          </div>
          <br />
        </div>

        <div className={styles.rightCards}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <FaNewspaper />
              {dictionaries['world-heart-day-2011']['publicity']}
            </h2>
            <div className={styles.cardDescription}>
              <div className={styles.subCard}>Local Newspaper</div>
              <div className={styles.subCard}>
                Health Magazine (Special issue focusing on World Heart Day and
                theme)
              </div>
            </div>
          </div>
        </div>
      </div>

      <p
        className={styles.centeredText}
        dangerouslySetInnerHTML={{
          __html: dictionaries['world-heart-day-2011']['description'],
        }}
      />
    </div>
  );
};

export default WordHeart2011;
