import styles from './styles.module.css';

const HealthDiseaseWarning = () => {
  return (
    <div>
      <h1 className={styles.title}> Health Matters - Heart Disease Warning</h1>
      {/* YouTube Video Embed */}
      <div className={styles.videoContainer}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/eqe9j6i8p14?si=5VEwhHzm9EVK7SAi"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className={styles.description}>
        Heart Disease is often thought to be an older person&apos;s problem, but
        in fact, it can strike anyone. More and more young people are diagnosed
        everyday, as well as women who have risk factors.
        <br />
        <br />
        Common risk factors are:
        <ol>
          <li>Smoking.</li>
          <li>Obesity.</li>
          <li>High blood pressure.</li>
          <li>Diabetes.</li>
          <li>Genetic factors.</li>
          <li>Stress.</li>
        </ol>
        <br />
        Most of these risk factors are PREVENTABLE with healthy lifestyle
        habits.
        <br />
        <br />
      </p>
    </div>
  );
};

export default HealthDiseaseWarning;
