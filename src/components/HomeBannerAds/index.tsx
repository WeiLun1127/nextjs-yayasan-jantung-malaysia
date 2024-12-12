import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

const URL_ADS = 'https://biogrow.com.my';

const HomeBannerAds = () => {
  return (
    <section>
      <Link href={URL_ADS} target="_blank">
        <div className={styles.banner_ads}>
          <Image
            fill
            alt="home-banner"
            src="/images/home/home_banner_ads.jpg"
          />
        </div>
      </Link>
    </section>
  );
};

export default HomeBannerAds;