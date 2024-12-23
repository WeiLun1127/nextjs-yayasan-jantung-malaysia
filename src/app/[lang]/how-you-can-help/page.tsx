import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import {
  FaDonate,
  FaHandshake,
  FaPrint,
  FaProjectDiagram,
  FaTaxi,
} from 'react-icons/fa';
import styles from './styles.module.css';

const HowYouCanHelp = async (props: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);

  return (
    <div>
      <h1 className={styles.title}>
        {dictionaries['how-you-can-help']['title']}
      </h1>
      <div className={styles.cardContainer}>
        {/* Use the correct class name */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaDonate className={styles.icon} />
          </div>
          <h2>{dictionaries['how-you-can-help']['donation']}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: dictionaries['how-you-can-help']['donation-description'],
            }}
          />
        </div>
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaHandshake className={styles.icon} />
          </div>
          <h2>{dictionaries['how-you-can-help']['sponsoring-a-fellowship']}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html:
                dictionaries['how-you-can-help'][
                  'sponsoring-a-fellowship-description'
                ],
            }}
          />
        </div>
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaProjectDiagram className={styles.icon} />
          </div>
          <h2>
            {dictionaries['how-you-can-help']['sponsoring-research-projects']}
          </h2>
          <p
            dangerouslySetInnerHTML={{
              __html:
                dictionaries['how-you-can-help'][
                  'sponsoring-research-projects-description'
                ],
            }}
          />
        </div>
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaPrint className={styles.icon} />
          </div>
          <h2>{dictionaries['how-you-can-help']['sponsoring-printing']}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html:
                dictionaries['how-you-can-help'][
                  'sponsoring-printing-description'
                ],
            }}
          />
        </div>
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaTaxi className={styles.icon} />
          </div>
          <h2>{dictionaries['how-you-can-help']['tax-benefits']}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html:
                dictionaries['how-you-can-help']['tax-benefits-description'],
            }}
          />
        </div>
      </div>
      <br />
      <br />
      <p
        dangerouslySetInnerHTML={{
          __html: dictionaries['how-you-can-help']['tax-exempted'],
        }}
      />
      <br />
      <br />
      <p
        dangerouslySetInnerHTML={{
          __html: dictionaries['how-you-can-help']['donation-form'],
        }}
      />
      <br />
      <br />
    </div>
  );
};

export default HowYouCanHelp;
