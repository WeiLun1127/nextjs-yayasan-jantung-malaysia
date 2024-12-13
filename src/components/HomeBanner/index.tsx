import Image from 'next/image';
import styles from './styles.module.css';

const HomeBanner = () => {
  return (
    <section>
      <div className={styles.banner}>
        <Image fill alt="home-banner" src="/images/home/home_banner.jpg" />
      </div>
    </section>
  );
};

export default HomeBanner;
