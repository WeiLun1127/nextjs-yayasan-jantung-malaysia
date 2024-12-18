import { FaDownload } from 'react-icons/fa'; // Import the download icon from react-icons
import styles from './styles.module.css';

const HalfwayHouse = () => {
  const downloadLink = 'http://www.yjm.org.my/view_file.cfm?fileid=33';

  return (
    <div>
      <p className={styles.description}>
        &#91;
        <a
          href={downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.downloadLink}
        >
          <FaDownload size={24} /> Leaflet - PDF (872 KB)
          {/* React Icons download icon */}
        </a>
        &#93;
      </p>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <a href={downloadLink} target="_blank" rel="noopener noreferrer">
            <img
              src="/images/halfway-house/HalfwayHouse2022-1.png"
              alt="halfway-house"
              className={styles.cardImage}
            />
          </a>
        </div>
        <div className={styles.card}>
          <a href={downloadLink} target="_blank" rel="noopener noreferrer">
            <img
              src="/images/halfway-house/HalfwayHouse2022-2b.png"
              alt="halfway-house"
              className={styles.cardImage}
            />
          </a>
        </div>
        <div className={styles.card}>
          <a href={downloadLink} target="_blank" rel="noopener noreferrer">
            <img
              src="/images/halfway-house/HalfwayHouse2022-3.png"
              alt="halfway-house"
              className={styles.cardImage}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HalfwayHouse;
