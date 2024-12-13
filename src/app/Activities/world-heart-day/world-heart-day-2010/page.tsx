import { FaWalking, FaHeart, FaNewspaper, FaUsers } from 'react-icons/fa';
import styles from './styles.module.css';

const WordHeart2010 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>World Heart Day 2010</h1>
      <p className={styles.description}>
        [ Past Event - this page is for archival information purposes only.]
        <br />
        <br />
      </p>

      {/* Cards Section */}
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaHeart /> "Workplace Wellness"
          </h2>
          <p className={styles.cardDescription}>
            Sunday 26 September 2010 Taman Tasik Titiwangsa
            <br />
            <br />
            <b>Details of Event</b>
            <br />
            Date : Sunday, 26 September 2010
            <br />
            Time : 7.00 am - 10.30 am
            <br />
            Venue : Taman Tasik Titiwangsa, Kuala Lumpur
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaUsers /> Partners/Sponsors
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
              <FaWalking /> Activities Include
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
        </div>
      </div>
      <p className={styles.centeredText}>Our Facebook Album has loads more photographs!</p>
    </div>
  );
};

export default WordHeart2010;
