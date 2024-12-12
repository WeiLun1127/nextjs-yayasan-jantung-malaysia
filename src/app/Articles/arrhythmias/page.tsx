import { FaHeartbeat, FaMedkit, FaStethoscope, FaUsers } from 'react-icons/fa';
import styles from './styles.module.css';

const Arrhythmias = () => {
  return (
    <div>
      <h1 className={styles.title}>Arrhythmias and Sudden Cardiac Death</h1>

      {/* Card for "What are arrhythmias?" */}
      <div className={styles.card}>
        <FaHeartbeat className={styles.cardIcon} />
        <h2 className={styles.cardTitle}>What are arrhythmias?</h2>
        <p className={styles.cardDescription}>
          Normal cardiac rhythm results from electrical impulses that start in the sinoatrial (SA) node and spread through the heart. The term arrhythmia refers to any change from this normal sequence. Some arrhythmias are brief, causing only a minor disruption to heart rate, while others can make the heart rate too slow or too fast.
          <br />
          <br />
          Bradycardia refers to a rate of less than 60 beats per minute, while tachycardia refers to a rate over 100 beats per minute.
        </p>
      </div>

      {/* Card for "How do arrhythmias occur?" */}
      <div className={styles.card}>
        <FaMedkit className={styles.cardIcon} />
        <h2 className={styles.cardTitle}>How do arrhythmias occur?</h2>
        <p className={styles.cardDescription}>
          Arrhythmias can occur due to abnormalities in the heart's conduction system. Secondary pacemaker tissue may fire too quickly, causing tachycardia. Arrhythmias can also develop due to impulse conduction issues, such as heart block or reentry.
          <br />
          <br />
          Tachycardias can arise in either the ventricles or supraventricular areas of the heart, depending on where the abnormal rhythm starts.
        </p>
      </div>

      {/* Card for "What are the symptoms of arrhythmias?" */}
      <div className={styles.card}>
        <FaStethoscope className={styles.cardIcon} />
        <h2 className={styles.cardTitle}>What are the symptoms of arrhythmias?</h2>
        <p className={styles.cardDescription}>
          Symptoms of arrhythmias range from mild to severe. Brief arrhythmias may be felt as palpitations, while sustained arrhythmias can cause fatigue, lightheadedness, and even death if the heart is unable to pump blood effectively.
          <br />
          <br />
          Tachycardias can affect the heart's ability to pump blood, leading to shortness of breath, chest pain, or dizziness. Prolonged arrhythmias can result in organ damage or stroke.
        </p>
      </div>

      {/* Card for "Who is prone to arrhythmias?" */}
      <div className={styles.card}>
        <FaUsers className={styles.cardIcon} />
        <h2 className={styles.cardTitle}>Who is prone to arrhythmias?</h2>
        <p className={styles.cardDescription}>
          Arrhythmias can occur in anyone, but their prevalence increases with age. People with congenital heart conditions or acquired heart disease, such as atherosclerosis or hypertension, are more likely to develop arrhythmias.
          <br />
          <br />
          Other factors, such as electrolyte imbalances or substance abuse, can also increase the risk of arrhythmias.
        </p>
      </div>
    </div>
  );
};

export default Arrhythmias;
