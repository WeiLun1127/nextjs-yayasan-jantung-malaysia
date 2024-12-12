import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

const HomeBulletin = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>News Bulletin</h2>
      <div className={styles.bulletin_content}>
        <Link href="/">
          <div className={styles.bulletin_cover}>
            <Image
              fill
              alt="bulletin-cover"
              src="/images/home/bulletin_cover.png"
            />
          </div>
        </Link>
        <p className={styles.bulletin_description}>
          Berita YJM (Newsletter of the Heart Foundation of Malaysia) Volume 55
          Editorial Feature is entitled &quot;Keep NCD Prevention in Mind&quot;.
          With the ongoing COVID-19 pandemic, non-communicable diseases (NCDs)
          such as cardiovascular diseases and hypertension have received less
          attention. However, COVID-19 can cause serious complications to people
          with NCDs, leading to higher risks of severe illness, hospitalisation
          and death. This is worrying as an estimated 3 in 10 Malaysians have
          hypertension and 4 in 10 Malaysians have high blood cholesterol.{' '}
          <Link href="/" className={styles.read_more}>
            Read More
          </Link>
        </p>
      </div>
    </section>
  );
};

export default HomeBulletin;
