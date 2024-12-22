import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import {
  FaChalkboardTeacher,
  FaChild,
  FaHandsHelping,
  FaHeartbeat,
} from 'react-icons/fa';
import styles from './styles.module.css';

const OurFuture = async (props: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);

  return (
    <div>
      <h1 className={styles.title}>{dictionaries['our-future']['title']}</h1>
      <p
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html: dictionaries['our-future']['description'],
        }}
      />

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <FaHeartbeat className={styles.icon} />
          <h3>
            {dictionaries['our-future']['cardiac-rehabilitation-training']}
          </h3>
          <p>
            {
              dictionaries['our-future'][
                'cardiac-rehabilitation-training-description'
              ]
            }
          </p>
        </div>
        <div className={styles.card}>
          <FaChalkboardTeacher className={styles.icon} />
          <h3>{dictionaries['our-future']['expand-cardiac-rehab-support']}</h3>
          <p>
            {
              dictionaries['our-future'][
                'expand-cardiac-rehab-support-description'
              ]
            }
          </p>
        </div>
        <div className={styles.card}>
          <FaHandsHelping className={styles.icon} />
          <h3>{dictionaries['our-future']['support-heart-health-programs']}</h3>
          <p>
            {
              dictionaries['our-future'][
                'support-heart-health-programs-description'
              ]
            }
          </p>
        </div>
        <div className={styles.card}>
          <FaChild className={styles.icon} />
          <h3>
            {
              dictionaries['our-future'][
                'promote-healthy-lifestyles-in-schools'
              ]
            }
          </h3>
          <p>
            {
              dictionaries['our-future'][
                'promote-healthy-lifestyles-in-schools-description'
              ]
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurFuture;
