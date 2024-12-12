import styles from './styles.module.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        Copyright &#169; 1999 - {year} Yayasan Jantung Malaysia. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
