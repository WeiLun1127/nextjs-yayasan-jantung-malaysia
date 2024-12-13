import styles from './styles.module.css';

const AboutYJM = () => {
  return (
    <div>
      <h1 className={styles.title}>The Heart Foundation of Malaysia</h1>
      <div className={styles.cardContainer}>
        {/* Member 1 */}
        <div className={styles.card}>
          <img
            src="/images/patron/shariff.jpg"
            alt="shariff"
            className={styles.cardImage}
          />
          <h2 className={styles.subtitle}>Vice President</h2>
          <p className={styles.description}>
            YBhg Tan Sri Dato' Kamaruzzaman bin Shariff
          </p>
        </div>

        {/* Member 2 */}
        <div className={styles.card}>
          <img
            src="/images/patron/Sulaiman-Osman.jpg"
            alt="Sulaiman Osman"
            className={styles.cardImage}
          />
          <h2 className={styles.subtitle}>Vice President</h2>
          <p className={styles.description}>
            YBhg Dato' Professor Sulaiman Osman
          </p>
        </div>

        {/* Member 3 */}
        <div className={styles.card}>
          <img
            src="/images/patron/AljafriAbdulMajid.jpg"
            alt="Aljafri Abdul Majid"
            className={styles.cardImage}
          />
          <h2 className={styles.subtitle}>Chairman</h2>
          <p className={styles.description}>
            YBhg Dato' Dr. Aljafri bin Abdul Majid
          </p>
        </div>

        {/* Member 4 */}
        <div className={styles.card}>
          <img
            src="/images/patron/RobinderSambhi.jpg"
            alt="Robinder Sambhi"
            className={styles.cardImage}
          />
          <h2 className={styles.subtitle}>Chairman</h2>
          <p className={styles.description}>
            Dr. Robinder Sambhi
          </p>
        </div>

        {/* Member 5 */}
        <div className={styles.card}>
          <img
            src="/images/patron/adamtanhuangchew.jpg"
            alt="Adam Tan Huang Chew"
            className={styles.cardImage}
          />
          <h2 className={styles.subtitle}>Honorary Secretary</h2>
          <p className={styles.description}>
            Mr. Adam Tan Huang Chew
          </p>
        </div>

        {/* Member 6 */}
        <div className={styles.card}>
          <img
            src="/images/patron/ainon1.jpg"
            alt="Ainon Haji Kuntom"
            className={styles.cardImage}
          />
          <h2 className={styles.subtitle}>Honorary Treasurer, Go Red For Women Director</h2>
          <p className={styles.description}>
            Puan Hajjah Ainon Haji Kuntom
          </p>
        </div>

        {/* Member 7 */}
        <div className={styles.card}>
          <img
            src="/images/patron/margaretsambhi.jpg"
            alt="Margaret Sambhi"
            className={styles.cardImage}
          />
          <h2 className={styles.subtitle}>Director Executive Manager</h2>
          <p className={styles.description}>
            YBhg Datin Margaret Sambhi
          </p>
        </div>

        {/* Member 8 */}
        <div className={styles.card}>
          <img
            src="/images/patron/dharamvirgodrei.jpg"
            alt="Dharamvir Singh Godrei"
            className={styles.cardImage}
          />
          <h2 className={styles.subtitle}>Director</h2>
          <p className={styles.description}>
            Dr. Dharamvir Singh Godrei
          </p>
        </div>

        {/* Member 9 */}
        <div className={styles.card}>
          <img
            src="/images/patron/DrPolaSingh.jpg"
            alt="Pola Singh"
            className={styles.cardImage}
          />
          <h2 className={styles.subtitle}>Director</h2>
          <p className={styles.description}>
            Dr. Pola Singh
          </p>
        </div>

        {/* Member 10 */}
        <div className={styles.card}>
          <img
            src="/images/patron/MsSheenaGurbakhash.jpg"
            alt="Sheena Gurbakhash"
            className={styles.cardImage}
          />
          <h2 className={styles.subtitle}>Director</h2>
          <p className={styles.description}>
            Ms. Sheena Gurbakhash
          </p>
        </div>

        {/* Member 11 */}
        <div className={styles.card}>
          <img
            src="/images/patron/MsAlyaAljafri.jpg"
            alt="Alya Aljafri"
            className={styles.cardImage}
          />
          <h2 className={styles.subtitle}>Director</h2>
          <p className={styles.description}>
            Ms. Alya Aljafri
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutYJM;
