import styles from './styles.module.css';

const AXAHeartsInAction = () => {
  return (
    <div>
      <h1 className={styles.title}>AXA Hearts in Action Run 2020</h1>
      <div className={styles.card}>
        <p className={styles.description}>
          <b>AXA Hearts in Action Run 2020</b> is back for the 6th consecutive
          year - this year in virtual format to advocate for 5 social causes
          (Cancer, Children, Heart, Environment, and Kidney)!
          <br />
          <br />
          Join <b>#AXAHeartsinActionRun2020</b> - Virtual Run Series and run for
          the social cause close to your heart. Choose PINK and support us in
          raising awareness on heart and circulatory diseases in Malaysia.
          <br />
          <br />
          <b>Registration period:</b> 21st September - 22nd October 2020 <br />
          <b>Run period:</b> 24th October - 8th November 2020 <br />
          <b>Venue: </b>Anywhere <br />
          <b>Categories: </b>6KM (13 years old & above) & 12KM (15 years old &
          above)
          <br />
          <br />
          Registration is NOW OPEN. Visit{' '}
          <a
            href="https://bit.ly/axarun2020"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>bit.ly/axarun2020</u>
          </a>{' '}
          to find out more.
          <br />
          <br />
          <b>#AXAHeartsinActionRun2020 #AXAMalaysia #myaxaaffin #KnowYouCan</b>
          <br />
          <br />
        </p>
      </div>

      {/* Image Cards */}
      <div className={styles.cardContainer}>
        <div className={styles.imageCard}>
          <img
            src="/images/axa/AXA-Virtual-Run-2020-Medal.png"
            alt="AXA-Virtual-Run-2020-Medal"
            className={styles.cardImage}
          />
        </div>

        <div className={styles.imageCard}>
          <img
            src="/images/axa/AXA-Virtual-Run-2020-Poster.png"
            alt="AXA-Virtual-Run-2020-Poster"
            className={styles.cardImage}
          />
        </div>

        <div className={styles.imageCard}>
          <img
            src="/images/axa/AXA-Virtual-Run-2020-T-Shirt.png"
            alt="AXA-Virtual-Run-2020-T-Shirt"
            className={styles.cardImage}
          />
        </div>
      </div>
    </div>
  );
};

export default AXAHeartsInAction;
