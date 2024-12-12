import { FaHeartbeat, FaSyringe, FaCogs, FaShieldAlt } from 'react-icons/fa';
import styles from './styles.module.css';

const HeartAttack = () => {
  return (
    <div>
      <h1 className={styles.title}>Heart Attack</h1>

      {/* Card for "What is Heart Attack?" */}
      <div className={styles.card}>
        <FaHeartbeat className={styles.cardIcon} />
        <h2 className={styles.cardTitle}>What is Heart Attack?</h2>
        <p className={styles.cardDescription}>
          Heart attack results from blood vessel disease in the heart. Coronary heart disease (CHD), sometimes referred to as coronary after disease (CAD), are general names for heart attack (and angina).
          <br />
          <br />
          A heart attack, or myocardial infarction, occurs when the blood supply to part of the heart muscle itself (the myocardium) is severely reduced or stopped. This occurs when one of the coronary arteries (the arteries that supply blood to the heart muscle) is blocked by an obstruction, such as a blood clot that has formed on plaque due to atherosclerosis.
          <br />
          <br />
          If the blood supply is cut off drastically or for a long time, muscle cells suffer irreversible injury and die. Disability or death can result, depending on how much heart muscle is damaged.
        </p>
      </div>

      {/* Card for "What are the Symptoms of a Heart Attack?" */}
      <div className={styles.card}>
        <FaSyringe className={styles.cardIcon} />
        <h2 className={styles.cardTitle}>What are the Symptoms of a Heart Attack?</h2>
        <p className={styles.cardDescription}>
          Sometimes the first indications of a heart attack come as warning signals. The actual diagnosis of a heart attack must be made by a physician who has studied the results of several tests. Besides reviewing a patient's complete medical history and giving a physical examination, a doctor will use an electrocardiogram (ECG) to discover any abnormalities caused by damage to the heart.
          <br />
          <br />
          Sometimes a blood test is used to detect abnormal levels of certain enzymes in the bloodstream.
        </p>
      </div>

      {/* Card for "How is a Heart Attack Treated?" */}
      <div className={styles.card}>
        <FaCogs className={styles.cardIcon} />
        <h2 className={styles.cardTitle}>How is a Heart Attack Treated?</h2>
        <p className={styles.cardDescription}>
          When a heart attack occurs, it's critical to recognize the signals and respond immediately. Delaying may increase the damage to the heart and reduce the chance of survival. Anyone experiencing the warning signals of a heart attack should be taken immediately to the nearest hospital with 24-hour emergency cardiac care.
          <br />
          <br />
          Most communities have an emergency cardiac care system that can quickly respond. This prompt care for heart attack victims dramatically reduces damage to the heart.
        </p>
      </div>

      {/* Card for "Is There Any Way to Reduce the Chance of a Heart Attack?" */}
      <div className={styles.card}>
        <FaShieldAlt className={styles.cardIcon} />
        <h2 className={styles.cardTitle}>Is There Any Way to Reduce the Chance of a Heart Attack?</h2>
        <p className={styles.cardDescription}>
          Many scientific studies show that certain characteristics increase the risk of coronary heart disease. The four major modifiable risk factors are cigarette / tobacco smoke, high blood cholesterol, high blood pressure, and physical inactivity. Other contributing risk factors are diabetes mellitus and obesity.
          <br />
          <br />
          The Heart Foundation strongly urges people to control their modifiable risk factors. Also, people with angina should take episodes of chest pain seriously and see their doctor before their atherosclerosis leads to a heart attack.
        </p>
      </div>
    </div>
  );
};

export default HeartAttack;
