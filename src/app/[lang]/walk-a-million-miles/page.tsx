import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import Image from 'next/image';
import styles from './styles.module.css';

const WalkAMillionMiles = async (props: {
  params: Promise<{ lang: Locale }>;
}) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);
  return (
    <div>
      <h1 className={styles.title}>
        {dictionaries['walk-a-million-miles']['title']}
      </h1>

      {/* Centered clickable text to download the PDF */}
      <a
        href="http://www.yjm.org.my/view_file.cfm?fileid=30"
        className={styles.downloadLink}
        download
      >
        {dictionaries['walk-a-million-miles']['subtitle']}
      </a>

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.cardImageOne}>
            <Image
              fill
              src="/images/walk-a-million-miles-2020/Nestle-Omega-Walking-A-Million-Miles-2020.png"
              alt="halfway-house"
            />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImageTwo}>
            <Image
              fill
              src="/images/walk-a-million-miles-2020/Nestle-Omega-Walking-A-Million-Miles-2020-Flyer-1-th.png"
              alt="halfway-house"
            />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImageThree}>
            <Image
              fill
              src="/images/walk-a-million-miles-2020/Nestle-Omega-Walking-A-Million-Miles-2020-Flyer-2-th.jpg"
              alt="halfway-house"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalkAMillionMiles;
