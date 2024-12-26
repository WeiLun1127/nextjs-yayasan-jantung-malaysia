import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import styles from './styles.module.css';

const HowDoesHumanHeartWork = async (props: {
  params: Promise<{ lang: Locale }>;
}) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);

  return (
    <div>
      <h1 className={styles.title}>
        {dictionaries['how-does-human-heart-works']['title']}
      </h1>
      {/* YouTube Video Embed */}
      <div className={styles.videoContainer}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/H04d3rJCLCE"
          title="How Does the Human Heart Work?"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <br />
      <p
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html: dictionaries['how-does-human-heart-works']['description'],
        }}
      />
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h2>
            {dictionaries['how-does-human-heart-works']['tricuspid-valve']}
          </h2>
          <p>
            {
              dictionaries['how-does-human-heart-works'][
                'tricuspid-valve-description'
              ]
            }
          </p>
        </div>
        <div className={styles.card}>
          <h2>
            {dictionaries['how-does-human-heart-works']['pulmonary-valve']}
          </h2>
          <p>
            {
              dictionaries['how-does-human-heart-works'][
                'pulmonary-valve-description'
              ]
            }
          </p>
        </div>
        <div className={styles.card}>
          <h2>{dictionaries['how-does-human-heart-works']['mitral-valve']}</h2>
          <p>
            {
              dictionaries['how-does-human-heart-works'][
                'mitral-valve-description'
              ]
            }
          </p>
        </div>
        <div className={styles.card}>
          <h2>{dictionaries['how-does-human-heart-works']['aortic-valve']}</h2>
          <p>
            {
              dictionaries['how-does-human-heart-works'][
                'aortic-valve-description'
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
            dictionaries['how-does-human-heart-works'][
              'heart-valve-description'
            ],
        }}
      />
      <div className={`${styles.cardContainer} ${styles.wideCardContainer}`}>
        <div className={`${styles.card} ${styles.wideCard}`}>
          <h2>
            {
              dictionaries['how-does-human-heart-works'][
                'coronary-artery-disease'
              ]
            }
          </h2>
          <p
            dangerouslySetInnerHTML={{
              __html:
                dictionaries['how-does-human-heart-works'][
                  'coronary-artery-disease-description'
                ],
            }}
          />
        </div>
      </div>
      <br />
      <p
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html:
            dictionaries['how-does-human-heart-works'][
              'what-controls-the-heart-rate'
            ],
        }}
      />
    </div>
  );
};

export default HowDoesHumanHeartWork;
