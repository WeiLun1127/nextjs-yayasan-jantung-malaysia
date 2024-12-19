import styles from './styles.module.css';

const GoRed = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>Take the Road to a Healthy Heart</h1>
        <p className={styles.description}>
          Each year over 8.6 million women globally die of heart disease and
          stroke.
          <br />
          <br />
          This is more than the total number of women who die from all cancers,
          tuberculosis, HIV/AIDS, and malaria combined. And yet, most heart
          disease and stroke is preventable.
          <br />
          <br />
          Together with its members across the world, the World Heart Federation
          is running the Go Red for Women campaign to improve women's knowledge
          of heart disease and stroke so that they can take action and achieve
          longer, better heart-healthy lives.
          <br />
          <br />
          <b>Go Red for Women</b> is an international awareness campaign
          dedicated to the prevention, diagnosis, and control of cardiovascular
          disease in women.
          <br />
          <br />
        </p>
        <div className={styles.imageWrapper}>
          <img
            src="/images/go-red-for-women/Go-Red-for-Women-0.gif"
            alt="GoRedForWomen"
            className={styles.cardImage}
          />
          <img
            src="/images/go-red-for-women/Go-Red-for-Women-1.jpg"
            alt="GoRedForWomen"
            className={styles.cardImage}
          />
          <img
            src="/images/go-red-for-women/Go-Red-for-Women-2.jpg"
            alt="GoRedForWomen"
            className={styles.cardImage}
          />
        </div>
      </div>
    </div>
  );
};

export default GoRed;
