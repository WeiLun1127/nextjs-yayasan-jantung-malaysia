import {
  FaGift,
  FaHandHoldingUsd,
  FaHeartbeat,
  FaRegCreditCard,
  FaUserFriends,
} from 'react-icons/fa'; // Importing icons

import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import Image from 'next/image';
import styles from './styles.module.css';

const YouCanMakeADifference = async (props: {
  params: Promise<{ lang: Locale }>;
}) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);

  return (
    <div>
      <h1 className={styles.title}>
        {dictionaries['you-can-make-a-difference']['title']}
      </h1>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <FaHeartbeat className={styles.icon} /> {/* Add the icon */}
          <h2>
            {dictionaries['you-can-make-a-difference']['reduce-your-own-risk']}
          </h2>
          <p>
            {
              dictionaries['you-can-make-a-difference'][
                'reduce-your-own-risk-description'
              ]
            }
          </p>
        </div>
        <div className={styles.card}>
          <FaHandHoldingUsd className={styles.icon} /> {/* Add the icon */}
          <h2>
            {
              dictionaries['you-can-make-a-difference'][
                'donation-to-the-foundation'
              ]
            }
          </h2>
          <p>
            {
              dictionaries['you-can-make-a-difference'][
                'donation-to-the-foundation-description'
              ]
            }
          </p>
        </div>
        <div className={styles.card}>
          <FaUserFriends className={styles.icon} /> {/* Add the icon */}
          <h2>
            {dictionaries['you-can-make-a-difference']['become-a-friend']}
          </h2>
          <p>
            {
              dictionaries['you-can-make-a-difference'][
                'become-a-friend-description'
              ]
            }
          </p>
        </div>
        <div className={styles.card}>
          <FaRegCreditCard className={styles.icon} /> {/* Add the icon */}
          <h2>
            {dictionaries['you-can-make-a-difference']['leave-a-bequest']}
          </h2>
          <p>
            {
              dictionaries['you-can-make-a-difference'][
                'leave-a-bequest-description'
              ]
            }
          </p>
        </div>
        <div className={styles.card}>
          <FaGift className={styles.icon} /> {/* Add the icon */}
          <h2>
            {
              dictionaries['you-can-make-a-difference'][
                'make-an-in-memoriam-gift'
              ]
            }
          </h2>
          <p>
            {
              dictionaries['you-can-make-a-difference'][
                'make-an-in-memoriam-gift-description'
              ]
            }
          </p>
        </div>
      </div>
      <br />
      <div className={styles.bottomSection}>
        <div className={styles.cardImage}>
          <Image
            fill
            src="/images/you-can-make-a-difference/worldheartday2013-1.gif"
            alt="Our Activities"
          />
        </div>
      </div>
      <br />
      <br />
      <p
        dangerouslySetInnerHTML={{
          __html: dictionaries['you-can-make-a-difference']['to-join'],
        }}
      />
      <br />
      <br />
    </div>
  );
};

export default YouCanMakeADifference;
