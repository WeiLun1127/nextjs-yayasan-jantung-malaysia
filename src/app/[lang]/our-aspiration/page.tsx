import styles from './styles.module.css';

const OurAspiration = () => {
  return (
    <div>
      <h1 className={styles.title}>Our Aspirations</h1>
      <p className={styles.description}>
        Patience, dedication, hard work, good organization, discernment, and
        foresight have turned many of our earlier dreams into reality. We do
        have a fair share of funding constraints. However, public generosity in
        terms of donations in cash and kind enables the Foundation to
        participate in several services and campaigns to bring about an
        understanding in preventive education. We create an understanding of the
        extent of consequences that heart and circulatory diseases can have on
        our lives when unchecked.
      </p>
      <p className={styles.description}>
        We focus on five very important areas:
      </p>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <img
            src="/images/our-aspiration/aspiration1.jpg"
            alt="Aspiration1"
            className={styles.cardImage}
          />
          <h2 className={styles.cardTitle}>Research</h2>
          <p className={styles.cardDescription}>
            To advance understanding of the causes of heart disease and provide
            the basis for new techniques in treatment and prevention and
            applicable to our environment.
          </p>
        </div>
        <div className={styles.card}>
          <img
            src="/images/our-aspiration/aspiration2.jpg"
            alt="Aspiration2"
            className={styles.cardImage}
          />
          <h2 className={styles.cardTitle}>Public Education</h2>
          <p className={styles.cardDescription}>
            To develop and implement health educational programmes designed to
            encourage a healthy lifestyle and to assist in preventing heart
            disease and stroke deaths.
          </p>
        </div>
        <div className={styles.card}>
          <img
            src="/images/our-aspiration/aspiration3.jpg"
            alt="Aspiration3"
            className={styles.cardImage}
          />
          <h2 className={styles.cardTitle}>Professional Education</h2>
          <p className={styles.cardDescription}>
            To increase the knowledge and improve the skills of health
            professionals.
          </p>
        </div>
        <div className={styles.card}>
          <img
            src="/images/our-aspiration/aspiration4.jpg"
            alt="Aspiration4"
            className={styles.cardImage}
          />
          <h2 className={styles.cardTitle}>Rehabilitation</h2>
          <p className={styles.cardDescription}>
            To encourage programmes which promote the rehabilitation of those
            suffering from diseases of the heart and circulation.
          </p>
        </div>
        <div className={styles.card}>
          <img
            src="/images/our-aspiration/aspiration5.jpg"
            alt="Aspiration5"
            className={styles.cardImage}
          />
          <h2 className={styles.cardTitle}>Public Service</h2>
          <p className={styles.cardDescription}>
            To provide accommodation for families of heart patients who are
            undergoing medical treatment at hospitals within the city.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurAspiration;
