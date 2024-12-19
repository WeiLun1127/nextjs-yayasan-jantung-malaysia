import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

interface HeaderProps {
  dictionaries: Dict.Dictionaries;
}

const Encourage = ({ dictionaries }: HeaderProps) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{dictionaries['change-lifestyle']['Change Lifestyle']}</h2>
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
          {dictionaries['change-lifestyle']['Description']}
        </p>
      </div>
    </section>
  );
};

export default Encourage;
