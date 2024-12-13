import styles from './styles.module.css';

const AboutYJM = () => {
  return (
    <div>
      <h1 className={styles.title}>YJM Staff Team</h1>
      <div className={styles.cardContainer}>
        {/* Member 1 */}
        <div className={styles.card}>
          <img
            src="/images/supporting-staff/mohamedzamri.jpg"
            alt="shariff"
            className={styles.cardImage}
          />
          <h2 className={styles.subtitle}>Executive Secretary</h2>
          <p className={styles.description}>
          Mohamed Zamri bin Mohamed Nezuri
          </p>
        </div>

        {/* Member 2 */}
        <div className={styles.card}>
          <img
            src="/images/supporting-staff/vijaya.jpg"
            alt="Sulaiman Osman"
            className={styles.cardImage}
          />
          <h2 className={styles.subtitle}>Administration Manager</h2>
          <p className={styles.description}>
          Vijayalatchumi D/O Mahalingam
          </p>
        </div>

        {/* Member 3 */}
        <div className={styles.card}>
          <img
            src="/images/supporting-staff/hong.jpg"
            alt="Aljafri Abdul Majid"
            className={styles.cardImage}
          />
          <h2 className={styles.subtitle}>Accounts</h2>
          <p className={styles.description}>
          Hong Kim Chuan
          </p>
        </div>

        {/* Member 4 */}
        <div className={styles.card}>
          <img
            src="/images/supporting-staff/kamariah.jpg"
            alt="Robinder Sambhi"
            className={styles.cardImage}
          />
          <h2 className={styles.subtitle}>Halfway House Warden</h2>
          <p className={styles.description}>
          Puan Kamariah bte. A. Kadir
          </p>
        </div>

        {/* Member 5 */}
        <div className={styles.card}>
          <img
            src="/images/supporting-staff/mohammad-syafiq-mahdzar.jpg"
            alt="Adam Tan Huang Chew"
            className={styles.cardImage}
          />
          <h2 className={styles.subtitle}>Nurse Program Manager</h2>
          <p className={styles.description}>
          Mohammad Syafiq Mahdzar bin Zarir
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutYJM;
