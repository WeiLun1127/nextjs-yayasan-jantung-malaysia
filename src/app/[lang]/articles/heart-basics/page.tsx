import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import {
  FaBrain,
  FaChartLine,
  FaCrosshairs,
  FaExternalLinkAlt,
  FaFileMedicalAlt,
  FaFlask,
  FaHeartbeat,
  FaHospitalAlt,
  FaPlus,
  FaShieldAlt,
  FaStethoscope,
} from 'react-icons/fa';
import styles from './styles.module.css';

const HeartBasics = async (props: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);

  return (
    <div>
      <h1 className={styles.title}>{dictionaries['heart-bassics']['title']}</h1>

      <div className={styles.cardContainer}>
        {/* Card for Heart Attack */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaHeartbeat className={styles.icon} />
          </div>
          <h2 className={styles.subtitle}>
            {dictionaries['heart-bassics']['what-is-heart-attack']}
          </h2>
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html:
                dictionaries['heart-bassics'][
                  'what-is-heart-attack-description'
                ],
            }}
          />
        </div>

        {/* Card for Angina */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaFileMedicalAlt className={styles.icon} />
          </div>
          <h2 className={styles.subtitle}>
            {dictionaries['heart-bassics']['what-is-angina']}
          </h2>
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html:
                dictionaries['heart-bassics']['what-is-angina-description'],
            }}
          />
        </div>

        {/* Card for Silent Ischemia */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaStethoscope className={styles.icon} />
          </div>
          <h2 className={styles.subtitle}>
            {dictionaries['heart-bassics']['what-is-silent-ischemia']}
          </h2>
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html:
                dictionaries['heart-bassics'][
                  'what-is-silent-ischemia-description'
                ],
            }}
          />
        </div>

        {/* Card for Collateral Circulation */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaChartLine className={styles.icon} />
          </div>
          <h2 className={styles.subtitle}>
            {
              dictionaries['heart-bassics'][
                'what-is-heart-collateral-circulation'
              ]
            }
          </h2>
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html:
                dictionaries['heart-bassics'][
                  'what-is-heart-collateral-circulation-description'
                ],
            }}
          />
        </div>

        {/* Card for Arrhythmias */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaHeartbeat className={styles.icon} />
          </div>
          <h2 className={styles.subtitle}>
            {dictionaries['heart-bassics']['what-are-arrhythmias']}
          </h2>
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html:
                dictionaries['heart-bassics'][
                  'what-are-arrhythmias-description'
                ],
            }}
          />
        </div>

        {/* Card for Sudden Cardiac Death */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaPlus className={styles.icon} />
          </div>
          <h2 className={styles.subtitle}>
            {dictionaries['heart-bassics']['what-is-sudden-cardiac-death']}
          </h2>
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html:
                dictionaries['heart-bassics'][
                  'what-is-sudden-cardiac-death-description'
                ],
            }}
          />
        </div>

        {/* Card for Stroke */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaBrain className={styles.icon} />
          </div>
          <h2 className={styles.subtitle}>
            {dictionaries['heart-bassics']['what-is-stroke']}
          </h2>
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html:
                dictionaries['heart-bassics']['what-is-stroke-description'],
            }}
          />
        </div>

        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaShieldAlt className={styles.icon} />
          </div>
          <h2 className={styles.subtitle}>
            {dictionaries['heart-bassics']['what-is-rheumatic-heart-disease']}
          </h2>
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html:
                dictionaries['heart-bassics'][
                  'what-is-rheumatic-heart-disease-description'
                ],
            }}
          />
        </div>

        {/* Card for Congestive Heart Failure */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaHospitalAlt className={styles.icon} />
          </div>
          <h2 className={styles.subtitle}>
            {dictionaries['heart-bassics']['what-is-congestive-heart-failure']}
          </h2>
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html:
                dictionaries['heart-bassics'][
                  'what-is-congestive-heart-failure-description'
                ],
            }}
          />
        </div>

        {/* Card for Kawasaki Disease */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaCrosshairs className={styles.icon} />
          </div>
          <h2 className={styles.subtitle}>
            {dictionaries['heart-bassics']['what-is-kawasaki-disease']}
          </h2>
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html:
                dictionaries['heart-bassics'][
                  'what-is-kawasaki-disease-description'
                ],
            }}
          />
        </div>

        {/* Card for Bacterial Endocarditis */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaFlask className={styles.icon} />
          </div>
          <h2 className={styles.subtitle}>
            {dictionaries['heart-bassics']['what-is-bacterial-endocarditis']}
          </h2>
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html:
                dictionaries['heart-bassics'][
                  'what-is-bacterial-endocarditis-description'
                ],
            }}
          />
        </div>

        {/* Card for Excerpts */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaExternalLinkAlt className={styles.icon} />
          </div>
          <h2 className={styles.subtitle}>
            {
              dictionaries['heart-bassics'][
                'excerpts-and-additional-information'
              ]
            }
          </h2>
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html:
                dictionaries['heart-bassics'][
                  'excerpts-and-additional-information-description'
                ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeartBasics;
