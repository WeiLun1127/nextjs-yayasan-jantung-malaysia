import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const PromotingHealth = () => {
  return (
    <div className={styles.card}>
      <h1 className={styles.cardTitle}>Promoting Health</h1>
      <p className={styles.cardDescription}>
        Encouraging people to change their lifestyles and to help develop
        environments which make healthy choices easier, are a fundamental part
        of The Heart Foundation of Malaysia&apos;s drive to reduce premature
        death and disability from heart and circulatory disease.
        <br />
        <br />
        Each year, The Heart Foundation of Malaysia spends over MYR50, 000 on
        heart health promotion initiatives trying to reach just about every
        sector of the community.
        <br />
        <br />
      </p>
      {/* <div className={styles.cardLink}>
        Click here to view our Calendar of Events and our "Heart" articles.
      </div> */}
      <img
          src="/images/promoting-health/activities3.jpg"
          alt="Promoting Health"
          className={styles.cardImage}
        />
    </div>
  );
};

export default PromotingHealth;
