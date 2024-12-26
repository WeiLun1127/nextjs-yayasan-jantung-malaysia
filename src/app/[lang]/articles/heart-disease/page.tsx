import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import { FaAppleAlt, FaHeartbeat, FaLeaf } from 'react-icons/fa';
import styles from './styles.module.css';

const HeartDisease = async (props: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);

  return (
    <div>
      <h1 className={styles.title}>{dictionaries['heart-disease']['title']}</h1>

      {/* Card for "Risks for heart & blood vessel disease" */}
      <div className={styles.card}>
        <FaAppleAlt className={styles.cardIcon} />
        <h2 className={styles.cardTitle}>
          {
            dictionaries['heart-disease'][
              'risks-for-heart-blood-vessel-disease'
            ]
          }
        </h2>
        <p
          className={styles.cardDescription}
          dangerouslySetInnerHTML={{
            __html:
              dictionaries['heart-disease'][
                'risks-for-heart-blood-vessel-disease-description'
              ],
          }}
        />
      </div>

      {/* Card for "Fibre is an important dietary component" */}
      <div className={styles.card}>
        <FaHeartbeat className={styles.cardIcon} />
        <h2 className={styles.cardTitle}>
          {
            dictionaries['heart-disease'][
              'fibre-is-an-important-dietary-component'
            ]
          }
        </h2>
        <p
          className={styles.cardDescription}
          dangerouslySetInnerHTML={{
            __html:
              dictionaries['heart-disease'][
                'fibre-is-an-important-dietary-component-description'
              ],
          }}
        />
      </div>

      {/* Card for "Why eat more fibre?" */}
      <div className={styles.card}>
        <FaLeaf className={styles.cardIcon} />
        <h2 className={styles.cardTitle}>
          {dictionaries['heart-disease']['why-eat-more-fibre']}
        </h2>
        <p
          className={styles.cardDescription}
          dangerouslySetInnerHTML={{
            __html:
              dictionaries['heart-disease']['why-eat-more-fibre-description'],
          }}
        />
      </div>
    </div>
  );
};

export default HeartDisease;
