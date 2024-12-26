import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import {
  FaAppleAlt,
  FaBicycle,
  FaDumbbell,
  FaRunning,
  FaUserFriends,
  FaUtensils,
  FaWater,
} from 'react-icons/fa';
import styles from './styles.module.css';

const StepsToBetterHealth = async (props: {
  params: Promise<{ lang: Locale }>;
}) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);

  return (
    <div>
      <h1 className={styles.title}>
        {dictionaries['steps-to-better-health']['title']}
      </h1>
      <p
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html: dictionaries['steps-to-better-health']['description'],
        }}
      />

      {/* Card for each point */}
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaRunning className={styles.icon} />
            {dictionaries['steps-to-better-health']['start-now']}
          </h2>
          <p className={styles.cardDescription}>
            {dictionaries['steps-to-better-health']['start-now-description']}
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaBicycle className={styles.icon} />
            {dictionaries['steps-to-better-health']['get-moving']}
          </h2>
          <p className={styles.cardDescription}>
            {dictionaries['steps-to-better-health']['get-moving-description']}
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaAppleAlt className={styles.icon} />
            {dictionaries['steps-to-better-health']['lose-wisely']}
          </h2>
          <p className={styles.cardDescription}>
            {dictionaries['steps-to-better-health']['lose-wisely-description']}
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaDumbbell className={styles.icon} />
            {dictionaries['steps-to-better-health']['participate']}
          </h2>
          <p className={styles.cardDescription}>
            {dictionaries['steps-to-better-health']['participate-description']}
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaRunning className={styles.icon} />
            {dictionaries['steps-to-better-health']['exercise-regularly']}
          </h2>
          <p className={styles.cardDescription}>
            {
              dictionaries['steps-to-better-health'][
                'exercise-regularly-description'
              ]
            }
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaUserFriends className={styles.icon} />
            {dictionaries['steps-to-better-health']['weigh-yourself-monthly']}
          </h2>
          <p className={styles.cardDescription}>
            {
              dictionaries['steps-to-better-health'][
                'weigh-yourself-monthly-description'
              ]
            }
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaRunning className={styles.icon} />
            {dictionaries['steps-to-better-health']['be-active']}
          </h2>
          <p className={styles.cardDescription}>
            {dictionaries['steps-to-better-health']['be-active-description']}
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaAppleAlt className={styles.icon} />
            {dictionaries['steps-to-better-health']['eat-right']}
          </h2>
          <p className={styles.cardDescription}>
            {dictionaries['steps-to-better-health']['eat-right-description']}
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaUtensils className={styles.icon} />
            {dictionaries['steps-to-better-health']['avoid-crash-diets']}
          </h2>
          <p className={styles.cardDescription}>
            {
              dictionaries['steps-to-better-health'][
                'avoid-crash-diets-description'
              ]
            }
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaRunning className={styles.icon} />
            {dictionaries['steps-to-better-health']['minimize-the-munchies']}
          </h2>
          <p className={styles.cardDescription}>
            {
              dictionaries['steps-to-better-health'][
                'minimize-the-munchies-description'
              ]
            }
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaWater className={styles.icon} />
            {dictionaries['steps-to-better-health']['remove-temptation']}
          </h2>
          <p className={styles.cardDescription}>
            {
              dictionaries['steps-to-better-health'][
                'remove-temptation-description'
              ]
            }
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaWater className={styles.icon} />
            {dictionaries['steps-to-better-health']['eat-drink-and-be-healthy']}
          </h2>
          <p className={styles.cardDescription}>
            {
              dictionaries['steps-to-better-health'][
                'eat-drink-and-be-healthy-description'
              ]
            }
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaUtensils className={styles.icon} />
            {
              dictionaries['steps-to-better-health'][
                'entertain-but-dont-be-plain'
              ]
            }
          </h2>
          <p className={styles.cardDescription}>
            {
              dictionaries['steps-to-better-health'][
                'entertain-but-dont-be-plain-description'
              ]
            }
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaRunning className={styles.icon} />
            {dictionaries['steps-to-better-health']['eat-less-exercise-more']}
          </h2>
          <p className={styles.cardDescription}>
            {
              dictionaries['steps-to-better-health'][
                'eat-less-exercise-more-description'
              ]
            }
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaAppleAlt className={styles.icon} />
            {dictionaries['steps-to-better-health']['dieters-delight']}
          </h2>
          <p className={styles.cardDescription}>
            {
              dictionaries['steps-to-better-health'][
                'dieters-delight-description'
              ]
            }
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaDumbbell className={styles.icon} />
            {
              dictionaries['steps-to-better-health'][
                'skim-the-fat-from-your-food'
              ]
            }
          </h2>
          <p className={styles.cardDescription}>
            {
              dictionaries['steps-to-better-health'][
                'skim-the-fat-from-your-food-description'
              ]
            }
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaAppleAlt className={styles.icon} />
            {dictionaries['steps-to-better-health']['taste-and-enjoy-food']}
          </h2>
          <p className={styles.cardDescription}>
            {
              dictionaries['steps-to-better-health'][
                'taste-and-enjoy-food-description'
              ]
            }
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaUserFriends className={styles.icon} />
            {
              dictionaries['steps-to-better-health'][
                'pick-the-winning-combination'
              ]
            }
          </h2>
          <p className={styles.cardDescription}>
            {
              dictionaries['steps-to-better-health'][
                'pick-the-winning-combination-description'
              ]
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepsToBetterHealth;
