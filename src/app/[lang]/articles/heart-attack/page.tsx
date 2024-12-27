import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import { FaCogs, FaHeartbeat, FaShieldAlt, FaSyringe } from 'react-icons/fa';
import styles from './styles.module.css';

const HeartAttack = async (props: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);

  return (
    <div>
      <h1 className={styles.title}>{dictionaries['heart-attack']['title']}</h1>

      {/* Card for "What is Heart Attack?" */}
      <div className={styles.card}>
        <FaHeartbeat className={styles.cardIcon} />
        <h2 className={styles.cardTitle}>
          {dictionaries['heart-attack']['what-is-heart-attack']}
        </h2>
        <p
          className={styles.cardDescription}
          dangerouslySetInnerHTML={{
            __html:
              dictionaries['heart-attack']['what-is-heart-attack-description'],
          }}
        />
      </div>

      {/* Card for "What are the Symptoms of a Heart Attack?" */}
      <div className={styles.card}>
        <FaSyringe className={styles.cardIcon} />
        <h2 className={styles.cardTitle}>
          {
            dictionaries['heart-attack'][
              'what-are-the-symptoms-of-heart-attack'
            ]
          }
        </h2>
        <p
          className={styles.cardDescription}
          dangerouslySetInnerHTML={{
            __html:
              dictionaries['heart-attack'][
                'what-are-the-symptoms-of-heart-attack-description'
              ],
          }}
        />
      </div>

      {/* Card for "How is a Heart Attack Treated?" */}
      <div className={styles.card}>
        <FaCogs className={styles.cardIcon} />
        <h2 className={styles.cardTitle}>
          {dictionaries['heart-attack']['how-is-heart-attack-treated']}
        </h2>
        <p
          className={styles.cardDescription}
          dangerouslySetInnerHTML={{
            __html:
              dictionaries['heart-attack'][
                'how-is-heart-attack-treated-description'
              ],
          }}
        />
      </div>

      {/* Card for "Is There Any Way to Reduce the Chance of a Heart Attack?" */}
      <div className={styles.card}>
        <FaShieldAlt className={styles.cardIcon} />
        <h2 className={styles.cardTitle}>
          {
            dictionaries['heart-attack'][
              'is-there-any-way-to-reduce-the-chance-of-heart-attack'
            ]
          }
        </h2>
        <p
          className={styles.cardDescription}
          dangerouslySetInnerHTML={{
            __html:
              dictionaries['heart-attack'][
                'is-there-any-way-to-reduce-the-chance-of-heart-attack-description'
              ],
          }}
        />
      </div>
    </div>
  );
};

export default HeartAttack;
