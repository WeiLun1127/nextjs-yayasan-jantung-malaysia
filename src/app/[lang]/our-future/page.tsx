import styles from './styles.module.css';
import {
  FaHeartbeat,
  FaChalkboardTeacher,
  FaHandsHelping,
  FaChild,
} from 'react-icons/fa';

const OurFuture = () => {
  return (
    <div>
      <h1 className={styles.title}>Our Future</h1>
      <p className={styles.description}>
        While we have traveled a long way, there is a tough journey still ahead
        of us. The percentage of medically certified deaths attributed to
        cardiovascular diseases have exceeded that of even cancer and has become
        the No 1 killer disease in Malaysia.
        <br />
        <br />
        There still needs much to be done and we certainly ask for your support.
        For example, in the next 12 months we aim to extend training in Basic
        Life Support to all Malaysians.
        <br />
        <br />
        We aim to build an active publishing programme in order to provide
        resource material to schools, workplaces and the community and develop
        an active Resource Centre.
      </p>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <FaHeartbeat className={styles.icon} />
          <h3>Cardiac Rehabilitation Training</h3>
          <p>
            Work with health professionals to hold training seminars for
            personnel interested in working in areas such as cardiac
            rehabilitation, nutrition, etc.
          </p>
        </div>
        <div className={styles.card}>
          <FaChalkboardTeacher className={styles.icon} />
          <h3>Expand Cardiac Rehab Support</h3>
          <p>
            Expand support for the cardiac rehabilitation programmes in the
            community and give them the best chance of a return to a full life
            following heart attack or surgery.
          </p>
        </div>
        <div className={styles.card}>
          <FaHandsHelping className={styles.icon} />
          <h3>Support Heart-Health Programs</h3>
          <p>Continue to support heart-health programmes.</p>
        </div>
        <div className={styles.card}>
          <FaChild className={styles.icon} />
          <h3>Promote Healthy Lifestyles in Schools</h3>
          <p>
            Poor health behaviour often starts in childhood. We hope to work
            towards promoting a healthy lifestyle programme in preschools and
            schools with the cooperation of the Ministries of Health and
            Education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurFuture;
