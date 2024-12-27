import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import {
  FaArrowCircleUp,
  FaChartLine,
  FaCogs,
  FaExclamationTriangle,
  FaHeartbeat,
  FaMedkit,
  FaPills,
  FaSearch,
} from 'react-icons/fa'; // Import React Icons
import styles from './styles.module.css';

const InheritedCholesterol = async (props: {
  params: Promise<{ lang: Locale }>;
}) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);

  return (
    <div>
      <h1 className={styles.title}>
        {dictionaries['inherited-cholesterol-disorder']['title']}
      </h1>

      {/* Highlight Part */}
      <div className={`${styles.card} ${styles.highlight}`}>
        <p
          className={styles.description}
          dangerouslySetInnerHTML={{
            __html:
              dictionaries['inherited-cholesterol-disorder']['description'],
          }}
        />
      </div>

      <div className={styles.cardContainer}>
        {/* Card 1 */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <FaHeartbeat size={styles.cardIcon} /> {/* Heartbeat icon */}
            <h2 className={styles.subtitle}>
              {dictionaries['inherited-cholesterol-disorder']['what-is-fh']}
            </h2>
          </div>
          <p className={styles.description}>
            {
              dictionaries['inherited-cholesterol-disorder'][
                'what-is-fh-description'
              ]
            }
          </p>
        </div>

        {/* Card 2 */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <FaSearch size={styles.cardIcon} /> {/* Search icon */}
            <h2 className={styles.subtitle}>
              {
                dictionaries['inherited-cholesterol-disorder'][
                  'how-can-fh-be-detected'
                ]
              }
            </h2>
          </div>
          <p className={styles.description}>
            {
              dictionaries['inherited-cholesterol-disorder'][
                'how-can-fh-be-detected-description'
              ]
            }
          </p>
        </div>

        {/* Card 3 */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <FaExclamationTriangle size={styles.cardIcon} />{' '}
            {/* Warning icon */}
            <h2 className={styles.subtitle}>
              {dictionaries['inherited-cholesterol-disorder']['fh-risks']}
            </h2>
          </div>
          <p className={styles.description}>
            {
              dictionaries['inherited-cholesterol-disorder'][
                'fh-risks-description'
              ]
            }
          </p>
        </div>

        {/* Card 4 */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <FaCogs size={styles.cardIcon} /> {/* Gear icon */}
            <h2 className={styles.subtitle}>
              {
                dictionaries['inherited-cholesterol-disorder'][
                  'how-is-fh-treated'
                ]
              }
            </h2>
          </div>
          <p className={styles.description}>
            {
              dictionaries['inherited-cholesterol-disorder'][
                'how-is-fh-treated-description'
              ]
            }
          </p>
        </div>

        {/* Card 5 */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <FaPills size={styles.cardIcon} /> {/* Pills icon */}
            <h2 className={styles.subtitle}>
              {dictionaries['inherited-cholesterol-disorder']['drug-therapy']}
            </h2>
          </div>
          <p className={styles.description}>
            {
              dictionaries['inherited-cholesterol-disorder'][
                'drug-therapy-description'
              ]
            }
          </p>
        </div>

        {/* Card 6 */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <FaMedkit size={styles.cardIcon} /> {/* Medical Kit icon */}
            <h2 className={styles.subtitle}>
              {
                dictionaries['inherited-cholesterol-disorder'][
                  'what-is-cholesterol'
                ]
              }
            </h2>
          </div>
          <p className={styles.description}>
            {
              dictionaries['inherited-cholesterol-disorder'][
                'what-is-cholesterol-description'
              ]
            }
          </p>
        </div>

        {/* Card 7 */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <FaArrowCircleUp size={styles.cardIcon} /> {/* Arrow Up icon */}
            <h2 className={styles.subtitle}>
              {
                dictionaries['inherited-cholesterol-disorder'][
                  'good-and-bad-cholesterol'
                ]
              }
            </h2>
          </div>
          <p className={styles.description}>
            {
              dictionaries['inherited-cholesterol-disorder'][
                'good-and-bad-cholesterol-description'
              ]
            }
          </p>
        </div>

        {/* Card 8 */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <FaChartLine size={styles.cardIcon} /> {/* Chart Line icon */}
            <h2 className={styles.subtitle}>
              {
                dictionaries['inherited-cholesterol-disorder'][
                  'your-cholesterol-reading'
                ]
              }
            </h2>
          </div>
          <p className={styles.description}>
            {
              dictionaries['inherited-cholesterol-disorder'][
                'your-cholesterol-reading-description'
              ]
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default InheritedCholesterol;
