import {
  FaHeartbeat,
  FaHandHoldingUsd,
  FaUserFriends,
  FaRegCreditCard,
  FaGift,
} from 'react-icons/fa'; // Importing icons

import styles from './styles.module.css';

const YouCanMakeADifference = () => {
  return (
    <div>
      <h1 className={styles.title}>You Can Make A Difference!</h1>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <FaHeartbeat className={styles.icon} /> {/* Add the icon */}
          <h2>Reduce Your Own Risk</h2>
          <p>
            Enjoy healthy eating, exercising, being smoke-free, and having your
            blood pressure checked regularly.
          </p>
        </div>
        <div className={styles.card}>
          <FaHandHoldingUsd className={styles.icon} /> {/* Add the icon */}
          <h2>Donate to the Foundation</h2>
          <p>
            Donate to the Foundation for our research, health promotion, CPR,
            and rehabilitation programmes.
          </p>
        </div>
        <div className={styles.card}>
          <FaUserFriends className={styles.icon} /> {/* Add the icon */}
          <h2>Become a Friend</h2>
          <p>Become a Friend of the Foundation.</p>
        </div>
        <div className={styles.card}>
          <FaRegCreditCard className={styles.icon} /> {/* Add the icon */}
          <h2>Leave a Bequest</h2>
          <p>Leave a bequest to the Foundation in your will.</p>
        </div>
        <div className={styles.card}>
          <FaGift className={styles.icon} /> {/* Add the icon */}
          <h2>Make an "In Memoriam" Gift</h2>
          <p>Make an "In Memoriam" gift.</p>
        </div>
      </div>
      <br />
      <div className={styles.bottomSection}>
        <img
          src="/images/you-can-make-a-difference/worldheartday2013-1.gif"
          alt="Our Activities"
          className={styles.cardImage}
        />
      </div>
      <br />
      <br />
      To join the fight against Malaysia's major killer, please{' '}
      <u>contact us</u> here or complete a copy of our{' '}
      <u>Membership/Donation Form</u> here.
      <br />
      <br />
    </div>
  );
};

export default YouCanMakeADifference;
