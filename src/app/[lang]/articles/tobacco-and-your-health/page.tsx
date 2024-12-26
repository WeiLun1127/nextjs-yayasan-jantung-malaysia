import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import {
  FaBan,
  FaFire,
  FaHeart,
  FaSkullCrossbones,
  FaUsers,
} from 'react-icons/fa'; // Import the icons
import styles from './styles.module.css';

const TobbaccoAndYourHealth = async (props: {
  params: Promise<{ lang: Locale }>;
}) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);

  return (
    <div>
      <h1 className={styles.title}>
        {dictionaries['tobacco-and-your-health']['title']}
      </h1>
      <h2 className={styles.subtitle}>
        {dictionaries['tobacco-and-your-health']['subtitle']}
      </h2>
      <br />
      <p
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html: dictionaries['tobacco-and-your-health']['description'],
        }}
      />
      <br />
      <br />

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <FaHeart size={30} className={styles.icon} />
            <h2 className={styles.subtitle}>
              {
                dictionaries['tobacco-and-your-health'][
                  'who-can-be-hurt-by-tobacco'
                ]
              }
            </h2>
          </div>
          <p className={styles.description}>
            {
              dictionaries['tobacco-and-your-health'][
                'who-can-be-hurt-by-tobacco-description'
              ]
            }
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <FaSkullCrossbones size={30} className={styles.icon} />
            <h2 className={styles.subtitle}>
              {dictionaries['tobacco-and-your-health']['how-does-smoking-kill']}
            </h2>
          </div>
          <p className={styles.description}>
            {
              dictionaries['tobacco-and-your-health'][
                'how-does-smoking-kill-description'
              ]
            }
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <FaFire size={30} className={styles.icon} />
            <h2 className={styles.subtitle}>
              {
                dictionaries['tobacco-and-your-health'][
                  'how-dangerous-is-it-to-start-smoking'
                ]
              }
            </h2>
          </div>
          <p className={styles.description}>
            {
              dictionaries['tobacco-and-your-health'][
                'how-dangerous-is-it-to-start-smoking-description'
              ]
            }
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <FaUsers size={30} className={styles.icon} />
            <h2 className={styles.subtitle}>
              {
                dictionaries['tobacco-and-your-health'][
                  'why-people-use-tobacco'
                ]
              }
            </h2>
          </div>
          <p className={styles.description}>
            {
              dictionaries['tobacco-and-your-health'][
                'why-people-use-tobacco-description'
              ]
            }
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <FaBan size={30} className={styles.icon} />
            <h2 className={styles.subtitle}>
              {dictionaries['tobacco-and-your-health']['what-can-you-do']}
            </h2>
          </div>
          <p className={styles.description}>
            {
              dictionaries['tobacco-and-your-health'][
                'what-can-you-do-description'
              ]
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default TobbaccoAndYourHealth;
