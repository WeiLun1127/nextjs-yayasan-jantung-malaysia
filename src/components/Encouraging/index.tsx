import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

const Encourage = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Change Lifestyle</h2>
      <div className={styles.bulletin_card}>
        <Link href="/">
          <div className={styles.bulletin_cover}>
            <Image
              fill
              alt="bulletin-cover"
              src="/images/encourage/download.jpg"
            />
          </div>
        </Link>
        <p className={styles.bulletin_description}>
          <b>Encouraging people to change their lifestyles</b> and to help
          develop environments which make healthy choices easier, are a
          fundamental part of The Heart Foundation of Malaysia'.s drive to
          reduce premature death and disability from heart and circulatory
          disease.
        </p>
      </div>
    </section>
  );
};

export default Encourage;
