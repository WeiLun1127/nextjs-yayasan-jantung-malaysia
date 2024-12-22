import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import Image from 'next/image';
import styles from './styles.module.css';

const AboutYJM = async (props: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);

  return (
    <div>
      <h1 className={styles.title}>
        {dictionaries['board-of-directories']['title']}
      </h1>
      <div className={styles.cardContainer}>
        {/* Member 1 */}
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Image fill src="/images/patron/shariff.jpg" alt="shariff" />
          </div>
          <h2 className={styles.subtitle}>Vice President</h2>
          <p className={styles.description}>
            YBhg Tan Sri Dato' Kamaruzzaman bin Shariff
          </p>
        </div>

        {/* Member 2 */}
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Image
              fill
              src="/images/patron/Sulaiman-Osman.jpg"
              alt="Sulaiman Osman"
            />
          </div>
          <h2 className={styles.subtitle}>Vice President</h2>
          <p className={styles.description}>
            YBhg Dato' Professor Sulaiman Osman
          </p>
        </div>

        {/* Member 3 */}
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Image
              fill
              src="/images/patron/AljafriAbdulMajid.jpg"
              alt="Aljafri Abdul Majid"
            />
          </div>
          <h2 className={styles.subtitle}>Chairman</h2>
          <p className={styles.description}>
            YBhg Dato' Dr. Aljafri bin Abdul Majid
          </p>
        </div>

        {/* Member 4 */}
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Image
              fill
              src="/images/patron/RobinderSambhi.jpg"
              alt="Robinder Sambhi"
            />
          </div>
          <h2 className={styles.subtitle}>Chairman</h2>
          <p className={styles.description}>Dr. Robinder Sambhi</p>
        </div>

        {/* Member 5 */}
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Image
              fill
              src="/images/patron/adamtanhuangchew.jpg"
              alt="Adam Tan Huang Chew"
            />
          </div>
          <h2 className={styles.subtitle}>Honorary Secretary</h2>
          <p className={styles.description}>Mr. Adam Tan Huang Chew</p>
        </div>

        {/* Member 6 */}
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Image
              fill
              src="/images/patron/ainon1.jpg"
              alt="Ainon Haji Kuntom"
            />
          </div>
          <h2 className={styles.subtitle}>
            Honorary Treasurer, Go Red For Women Director
          </h2>
          <p className={styles.description}>Puan Hajjah Ainon Haji Kuntom</p>
        </div>

        {/* Member 7 */}
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Image
              fill
              src="/images/patron/margaretsambhi.jpg"
              alt="Margaret Sambhi"
            />
          </div>
          <h2 className={styles.subtitle}>Director Executive Manager</h2>
          <p className={styles.description}>YBhg Datin Margaret Sambhi</p>
        </div>

        {/* Member 8 */}
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Image
              fill
              src="/images/patron/dharamvirgodrei.jpg"
              alt="Dharamvir Singh Godrei"
            />
          </div>
          <h2 className={styles.subtitle}>Director</h2>
          <p className={styles.description}>Dr. Dharamvir Singh Godrei</p>
        </div>

        {/* Member 9 */}
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Image fill src="/images/patron/DrPolaSingh.jpg" alt="Pola Singh" />
          </div>
          <h2 className={styles.subtitle}>Director</h2>
          <p className={styles.description}>Dr. Pola Singh</p>
        </div>

        {/* Member 10 */}
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Image
              fill
              src="/images/patron/MsSheenaGurbakhash.jpg"
              alt="Sheena Gurbakhash"
            />
          </div>
          <h2 className={styles.subtitle}>Director</h2>
          <p className={styles.description}>Ms. Sheena Gurbakhash</p>
        </div>

        {/* Member 11 */}
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Image
              fill
              src="/images/patron/MsAlyaAljafri.jpg"
              alt="Alya Aljafri"
            />
          </div>
          <h2 className={styles.subtitle}>Director</h2>
          <p className={styles.description}>Ms. Alya Aljafri</p>
        </div>
      </div>
    </div>
  );
};

export default AboutYJM;
