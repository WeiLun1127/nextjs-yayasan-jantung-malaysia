import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import { FaHeartbeat, FaRunning, FaWeight } from 'react-icons/fa'; // Importing the icons
import styles from './styles.module.css';

const HowDoesExercise = async (props: {
  params: Promise<{ lang: Locale }>;
}) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);

  return (
    <div>
      <h1 className={styles.title}>
        {dictionaries['how-does-exercise-impact-weight-loss']['title']}
      </h1>
      {/* YouTube Video Embed */}
      <div className={styles.videoContainer}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ep9j7YaTfMg?si=aKldeufFq_FfdkIc"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <br />
      <p
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html:
            dictionaries['how-does-exercise-impact-weight-loss']['description'],
        }}
      />

      {/* Card Container for Bullet Points with Icons */}
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <FaWeight size={30} className={styles.cardIcon} />{' '}
          {/* Icon for Body Weight */}
          <h2>
            {
              dictionaries['how-does-exercise-impact-weight-loss'][
                'starting-body-weight'
              ]
            }
          </h2>
          <p>
            {
              dictionaries['how-does-exercise-impact-weight-loss'][
                'starting-body-weight-description'
              ]
            }
          </p>
        </div>
        <div className={styles.card}>
          <FaHeartbeat size={30} className={styles.cardIcon} />{' '}
          {/* Icon for BMR */}
          <h2>
            {
              dictionaries['how-does-exercise-impact-weight-loss'][
                'basal-metabolic-rate'
              ]
            }
          </h2>
          <p>
            {
              dictionaries['how-does-exercise-impact-weight-loss'][
                'basal-metabolic-rate-description'
              ]
            }
          </p>
        </div>
        <div className={styles.card}>
          <FaRunning size={30} className={styles.cardIcon} />{' '}
          {/* Icon for Physical Activity */}
          <h2>
            {
              dictionaries['how-does-exercise-impact-weight-loss'][
                'physical-activity'
              ]
            }
          </h2>
          <p>
            {
              dictionaries['how-does-exercise-impact-weight-loss'][
                'physical-activity-description'
              ]
            }
          </p>
        </div>
      </div>

      <br />
      <p
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html:
            dictionaries['how-does-exercise-impact-weight-loss'][
              'subdescription'
            ],
        }}
      />
    </div>
  );
};

export default HowDoesExercise;
