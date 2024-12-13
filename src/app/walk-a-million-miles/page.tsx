import styles from './styles.module.css';

const WalkAMillionMiles = () => {
  return (
    <div>
      <p className={styles.title}>
        Nestle Omega Plus Walk A MILLION Miles towards a Healthy HeartNation!
      </p>

      {/* Centered clickable text to download the PDF */}
      <a
        href="http://www.yjm.org.my/view_file.cfm?fileid=30"
        className={styles.downloadLink}
        download
      >
        Want to Join Walk A Million Miles? Click here!
      </a>

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img
            src="/images/walk-a-million-miles-2020/Nestle-Omega-Walking-A-Million-Miles-2020.png"
            alt="halfway-house"
            className={styles.cardImage}
          />
        </div>
        <div className={styles.card}>
          <img
            src="/images/walk-a-million-miles-2020/Nestle-Omega-Walking-A-Million-Miles-2020-Flyer-1-th.png"
            alt="halfway-house"
            className={styles.cardImage}
          />
        </div>
        <div className={styles.card}>
          <img
            src="/images/walk-a-million-miles-2020/Nestle-Omega-Walking-A-Million-Miles-2020-Flyer-2-th.jpg"
            alt="halfway-house"
            className={styles.cardImage}
          />
        </div>
      </div>
    </div>
  );
};

export default WalkAMillionMiles;
