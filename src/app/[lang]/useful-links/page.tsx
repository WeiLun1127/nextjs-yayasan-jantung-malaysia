import {
  FaHospital,
  FaHeartbeat,
  FaGlobe,
  FaHeart,
  FaSitemap,
  FaBuilding,
} from 'react-icons/fa'; // Import icons
import styles from './styles.module.css';

const UsefulLinks = () => {
  return (
    <div>
      <h1 className={styles.title}>Useful Links</h1>
      <p className={styles.description}>
        Below are some heart-related organisations and their websites:
      </p>
      <div className={styles.cardContainer}>
        <ul className={styles.list}>
          <li className={styles.card}>
            <a
              href="https://www.MOH.gov.my"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaHospital size={30} className={styles.icon} /> The Ministry of
              Health Malaysia
            </a>
          </li>
          <li className={styles.card}>
            <a
              href="https://www.ijn.com.my"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaHeartbeat size={30} className={styles.icon} /> The National
              Heart Institute - Institut Jantung Negara (IJN)
            </a>
          </li>
          <li className={styles.card}>
            <a
              href="https://www.who.int"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGlobe size={30} className={styles.icon} /> The World Health
              Organization (WHO)
            </a>
          </li>
          <li className={styles.card}>
            <a
              href="https://www.world-heart-federation.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaHeart size={30} className={styles.icon} /> The World Heart
              Federation (WHF)
            </a>
          </li>
          <li className={styles.card}>
            <a
              href="https://www.malaysianheart.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSitemap size={30} className={styles.icon} /> The National Heart
              Association of Malaysia (NHAM)
            </a>
          </li>
          <li className={styles.card}>
            <a
              href="https://www.sarawakheartfoundation.org.my"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBuilding size={30} className={styles.icon} /> The Sarawak Heart
              Foundation
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UsefulLinks;
