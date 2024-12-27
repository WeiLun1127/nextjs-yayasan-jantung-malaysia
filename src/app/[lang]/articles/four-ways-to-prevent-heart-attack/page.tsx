import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import {
  FaAppleAlt,
  FaRunning,
  FaSmoking,
  FaWeightHanging,
} from 'react-icons/fa';
import styles from './styles.module.css';

const PreventHeartAttack = async (props: {
  params: Promise<{ lang: Locale }>;
}) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);

  return (
    <div>
      <h1 className={styles.title}>
        {dictionaries['four-ways-to-prevent-heart-attack']['title']}
      </h1>

      {/* YouTube Video Embed */}
      <div className={styles.videoContainer}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ocw_Zey-7cA?si=nsN4-50ejj11daSP"
          title="Four ways to prevent heart disease"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <br />
      <p
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html:
            dictionaries['four-ways-to-prevent-heart-attack']['description'],
        }}
      />

      <h3 className={styles.subtitle}>
        {
          dictionaries['four-ways-to-prevent-heart-attack'][
            'four-important-points'
          ]
        }
      </h3>

      {/* Card Container for 4 Points */}
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <FaSmoking className={styles.icon} />
          <h2>
            {dictionaries['four-ways-to-prevent-heart-attack']['dont-smoke']}
          </h2>
          <p>
            {
              dictionaries['four-ways-to-prevent-heart-attack'][
                'dont-smoke-description'
              ]
            }
          </p>
        </div>
        <div className={styles.card}>
          <FaWeightHanging className={styles.icon} />
          <h2>
            {
              dictionaries['four-ways-to-prevent-heart-attack'][
                'diet-to-keep-bmi-25'
              ]
            }
          </h2>
          <p>
            {
              dictionaries['four-ways-to-prevent-heart-attack'][
                'diet-to-keep-bmi-25-description'
              ]
            }
          </p>
        </div>
        <div className={styles.card}>
          <FaAppleAlt className={styles.icon} />
          <h2>
            {
              dictionaries['four-ways-to-prevent-heart-attack'][
                'eat-more-fruits-vegetables'
              ]
            }
          </h2>
          <p>
            {
              dictionaries['four-ways-to-prevent-heart-attack'][
                'eat-more-fruits-vegetables-description'
              ]
            }
          </p>
        </div>
        <div className={styles.card}>
          <FaRunning className={styles.icon} />
          <h2>
            {
              dictionaries['four-ways-to-prevent-heart-attack'][
                'exercise-150-mins-week'
              ]
            }
          </h2>
          <p>
            {
              dictionaries['four-ways-to-prevent-heart-attack'][
                'exercise-150-mins-week-description'
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
            dictionaries['four-ways-to-prevent-heart-attack']['subdescription'],
        }}
      />
    </div>
  );
};

export default PreventHeartAttack;
