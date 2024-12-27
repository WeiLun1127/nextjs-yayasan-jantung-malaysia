import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import { FaHeartbeat, FaMedkit, FaStethoscope, FaUsers } from 'react-icons/fa';
import styles from './styles.module.css';

const Arrhythmias = async (props: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);

  return (
    <div>
      <h1 className={styles.title}>{dictionaries['arrhythmias']['title']}</h1>

      {/* Card for "What are arrhythmias?" */}
      <div className={styles.card}>
        <FaHeartbeat className={styles.cardIcon} />
        <h2 className={styles.cardTitle}>
          {dictionaries['arrhythmias']['what-are-arrhythmias']}
        </h2>
        <p
          className={styles.cardDescription}
          dangerouslySetInnerHTML={{
            __html:
              dictionaries['arrhythmias']['what-are-arrhythmias-description'],
          }}
        />
      </div>

      {/* Card for "How do arrhythmias occur?" */}
      <div className={styles.card}>
        <FaMedkit className={styles.cardIcon} />
        <h2 className={styles.cardTitle}>
          {dictionaries['arrhythmias']['how-do-arrhythmias-occur']}
        </h2>
        <p
          className={styles.cardDescription}
          dangerouslySetInnerHTML={{
            __html:
              dictionaries['arrhythmias'][
                'how-do-arrhythmias-occur-description'
              ],
          }}
        />
      </div>

      {/* Card for "What are the symptoms of arrhythmias?" */}
      <div className={styles.card}>
        <FaStethoscope className={styles.cardIcon} />
        <h2 className={styles.cardTitle}>
          {dictionaries['arrhythmias']['what-are-the-symptoms-of-arrhythmias']}
        </h2>
        <p
          className={styles.cardDescription}
          dangerouslySetInnerHTML={{
            __html:
              dictionaries['arrhythmias'][
                'what-are-the-symptoms-of-arrhythmias-description'
              ],
          }}
        />
      </div>

      {/* Card for "Who is prone to arrhythmias?" */}
      <div className={styles.card}>
        <FaUsers className={styles.cardIcon} />
        <h2 className={styles.cardTitle}>
          {dictionaries['arrhythmias']['who-is-prone-to-arrhythmias']}
        </h2>
        <p
          className={styles.cardDescription}
          dangerouslySetInnerHTML={{
            __html:
              dictionaries['arrhythmias'][
                'who-is-prone-to-arrhythmias-description'
              ],
          }}
        />
      </div>
    </div>
  );
};

export default Arrhythmias;
