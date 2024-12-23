import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import styles from './styles.module.css';

const Research = async (props: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);

  return (
    <div>
      <h1 className={styles.title}>
        {dictionaries['research-heart-of-revolution']['title']}
      </h1>
      <p
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html: dictionaries['research-heart-of-revolution']['description'],
        }}
      />

      {/* Wrapper card for current research */}
      <div className={styles.cardWrapper}>
        <h3>
          {
            dictionaries['research-heart-of-revolution'][
              'foundation-supported-research-current'
            ]
          }
        </h3>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h4>
              {
                dictionaries['research-heart-of-revolution'][
                  'foundation-supported-research-current-one'
                ]
              }
            </h4>
            <p>
              {
                dictionaries['research-heart-of-revolution'][
                  'foundation-supported-research-current-one-description'
                ]
              }
            </p>
          </div>
          <div className={styles.card}>
            <h4>
              {
                dictionaries['research-heart-of-revolution'][
                  'foundation-supported-research-current-two'
                ]
              }
            </h4>
            <p>
              {
                dictionaries['research-heart-of-revolution'][
                  'foundation-supported-research-current-two-description'
                ]
              }
            </p>
          </div>
          <div className={styles.card}>
            <h4>
              {
                dictionaries['research-heart-of-revolution'][
                  'foundation-supported-research-current-three'
                ]
              }
            </h4>
            <p>
              {
                dictionaries['research-heart-of-revolution'][
                  'foundation-supported-research-current-three-description'
                ]
              }
            </p>
          </div>
        </div>
      </div>

      {/* Wrapper card for past research */}
      <div className={styles.cardWrapper}>
        <h3>
          {
            dictionaries['research-heart-of-revolution'][
              'foundation-supported-research-past'
            ]
          }
        </h3>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h4>
              {
                dictionaries['research-heart-of-revolution'][
                  'foundation-supported-research-past-one'
                ]
              }
            </h4>
          </div>
          <div className={styles.card}>
            <h4>
              {
                dictionaries['research-heart-of-revolution'][
                  'foundation-supported-research-past-two'
                ]
              }
            </h4>
            <p>
              {
                dictionaries['research-heart-of-revolution'][
                  'foundation-supported-research-past-two-description'
                ]
              }
            </p>
          </div>
          <div className={styles.card}>
            <h4>
              {
                dictionaries['research-heart-of-revolution'][
                  'foundation-supported-research-past-three'
                ]
              }
            </h4>
            <p>
              {
                dictionaries['research-heart-of-revolution'][
                  'foundation-supported-research-past-three-description'
                ]
              }
            </p>
          </div>
          <div className={styles.card}>
            <h4>
              {
                dictionaries['research-heart-of-revolution'][
                  'foundation-supported-research-past-four'
                ]
              }
            </h4>
            <p>
              {
                dictionaries['research-heart-of-revolution'][
                  'foundation-supported-research-past-four-description'
                ]
              }
            </p>
          </div>
          <div className={styles.card}>
            <h4>
              {
                dictionaries['research-heart-of-revolution'][
                  'foundation-supported-research-past-five'
                ]
              }
            </h4>
            <p>
              {
                dictionaries['research-heart-of-revolution'][
                  'foundation-supported-research-past-five-description'
                ]
              }
            </p>
          </div>
          <div className={styles.card}>
            <h4>
              {
                dictionaries['research-heart-of-revolution'][
                  'foundation-supported-research-past-six'
                ]
              }
            </h4>
            <p>
              {
                dictionaries['research-heart-of-revolution'][
                  'foundation-supported-research-past-six-description'
                ]
              }
            </p>
          </div>
          <div className={styles.card}>
            <h4>
              {
                dictionaries['research-heart-of-revolution'][
                  'foundation-supported-research-past-seven'
                ]
              }
            </h4>
            <p>
              {
                dictionaries['research-heart-of-revolution'][
                  'foundation-supported-research-past-seven-description'
                ]
              }
            </p>
          </div>
          <div className={styles.card}>
            <h4>
              {
                dictionaries['research-heart-of-revolution'][
                  'foundation-supported-research-past-eight'
                ]
              }
            </h4>
          </div>
          <div className={styles.card}>
            <h4>
              {
                dictionaries['research-heart-of-revolution'][
                  'foundation-supported-research-past-nine'
                ]
              }
            </h4>
            <p>
              {
                dictionaries['research-heart-of-revolution'][
                  'foundation-supported-research-past-nine-description'
                ]
              }
            </p>
          </div>
          <div className={styles.card}>
            <h4>
              {
                dictionaries['research-heart-of-revolution'][
                  'foundation-supported-research-past-ten'
                ]
              }
            </h4>
          </div>
          <div className={styles.card}>
            <h4>
              {
                dictionaries['research-heart-of-revolution'][
                  'foundation-supported-research-past-eleven'
                ]
              }
            </h4>
            <p>
              {
                dictionaries['research-heart-of-revolution'][
                  'foundation-supported-research-past-eleven-description'
                ]
              }
            </p>
          </div>
          <div className={styles.card}>
            <h4>
              {
                dictionaries['research-heart-of-revolution'][
                  'foundation-supported-research-past-twelve'
                ]
              }
            </h4>
            <p>
              {
                dictionaries['research-heart-of-revolution'][
                  'foundation-supported-research-past-twelve-description'
                ]
              }
            </p>
          </div>
          <div className={styles.card}>
            <h4>
              {
                dictionaries['research-heart-of-revolution'][
                  'foundation-supported-research-past-thirteen'
                ]
              }
            </h4>
            <p>
              {
                dictionaries['research-heart-of-revolution'][
                  'foundation-supported-research-past-thirteen-description'
                ]
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
