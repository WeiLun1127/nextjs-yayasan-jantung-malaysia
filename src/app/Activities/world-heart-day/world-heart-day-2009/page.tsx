import { FaWalking, FaHeart, FaNewspaper, FaUsers } from 'react-icons/fa';
import styles from './styles.module.css';

const WordHeart2009 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>World Heart Day 2009</h1>
      <p className={styles.description}>
        [Past Event - this page is for archival information purposes only.]
        <br />
        <br />
      </p>

      {/* Cards Section */}
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaHeart /> Wellness in the Workplace
          </h2>
          <p className={styles.cardDescription}>
            18 October 2009 Taman Tasik Permaisuri Cheras
            <br />
            <br />
            <b>Details of Event</b>
            <br />
            Date: Sunday, 18 October 2009
            <br />
            Time: 7.00 am - 10.30 am
            <br />
            Venue: Tasik Permaisuri Park, Kuala Lumpur
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

        <div className={styles.rightCards}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <FaWalking /> Other Pre-Event Activities Held Were
            </h2>
            <div className={styles.cardDescription}>
              <div className={styles.subCard}>
                Walk-A-Mile in different states of Malaysia
              </div>
              <div className={styles.subCard}>
                Health screening at community halls
              </div>
              <div className={styles.subCard}>Health talks at workplaces</div>
            </div>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <FaNewspaper /> Publicity
            </h2>
            <div className={styles.cardDescription}>
              <div className={styles.subCard}>Local Newspaper</div>
              <div className={styles.subCard}>
                Health & Beauty Magazine - Special issue focusing on World Heart
                Day and the theme on Wellness in the Workplace
              </div>
              <div className={styles.subCard}>
                Health Magazine (Special issue focusing on World Heart Day and
                theme)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordHeart2009;
