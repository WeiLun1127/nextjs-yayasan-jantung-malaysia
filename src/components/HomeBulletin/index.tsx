import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

interface HeaderProps {
  dictionaries: Dict.Dictionaries;
}

const HomeBulletin = ({ dictionaries }: HeaderProps) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        {dictionaries['news-bulletin']['News Bulletin']}
      </h2>
      <div className={styles.bulletin_card}>
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
          {dictionaries['news-bulletin']?.['Description']}{' '}
          <Link href="/" className={styles.read_more}>
            Read More
          </Link>
        </p>
      </div>
    </section>
  );
};

export default HomeBulletin;
