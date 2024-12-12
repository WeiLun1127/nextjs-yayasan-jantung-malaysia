import { FaSmoking, FaWeightHanging, FaAppleAlt, FaRunning } from 'react-icons/fa';
import styles from './styles.module.css';

const PreventHeartAttack = () => {
  return (
    <div>
      <h1 className={styles.title}>Four ways to prevent heart disease</h1>
      {/* YouTube Video Embed */}
      <div className={styles.videoContainer}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ocw_Zey-7cA?si=nsN4-50ejj11daSP"
          title="Four ways to prevent heart disease"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <br/>
      <p className={styles.description}>
        Healthy lifestyle habits are of almost importance in the prevention of
        CAD and heart attack.
        <br />
        <br />
        <b>Four (4) important points are:</b>
      </p>

      {/* Card Container for 4 Points */}
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <FaSmoking className={styles.icon} />
          <h2>Don&rsquo;t Smoke</h2>
          <p>Avoiding smoking significantly reduces the risk of heart disease.</p>
        </div>
        <div className={styles.card}>
          <FaWeightHanging className={styles.icon} />
          <h2>Diet to Keep BMI &lt; 25</h2>
          <p>Maintain a healthy body mass index to prevent strain on your heart.</p>
        </div>
        <div className={styles.card}>
          <FaAppleAlt className={styles.icon} />
          <h2>Eat More Fruits &amp; Vegetables</h2>
          <p>A balanced diet with more fruits and vegetables supports heart health.</p>
        </div>
        <div className={styles.card}>
          <FaRunning className={styles.icon} />
          <h2>Exercise &gt; 150 mins/week</h2>
          <p>Regular physical activity strengthens the heart and prevents disease.</p>
        </div>
      </div>

      <br />
      <p className={styles.description}>
        Though there are various treatments for CAD, such as angioplasty,
        stents, coronary artery bypass surgery and medications like statins,
        these are costly and not as effective as prevention. Prevention is
        better than cure.
        <br />
        <br />
      </p>
    </div>
  );
};

export default PreventHeartAttack;