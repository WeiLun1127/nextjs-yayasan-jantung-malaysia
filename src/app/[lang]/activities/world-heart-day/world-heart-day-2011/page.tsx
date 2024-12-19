// import styles from './styles.module.css';

// const WordHeart2011 = () => {
//   return (
//     <div>
//       <h1 className={styles.title}> World Heart Day 2011</h1>

//       <div className={styles.card}>
//         <h2 className={styles.subtitle}>[ Past Event - this page is for archival information purposes only.]</h2>
//         <div className={styles.description}>
//           <br />
//           <br />
//         </div>
//       </div>

//       <h1 className={styles.title}>"One World, One Home, One Heart"</h1>

//       <div className={styles.card}>
//         <h2 className={styles.subtitle}>Event Details</h2>
//         <div className={styles.description}>
//           Sunday 25 September 2011, Taman Tasik Titiwangsa
//           <br />
//           <br />
//           <b>Details of Event</b>
//           <br />
//           <br />
//           Date : Sunday, 25 September 2011
//           <br />
//           Time : 7.00 am - 10.30 am
//           <br />
//           Venue : Taman Tasik Titiwangsa, Kuala Lumpur
//           <br />
//           <br />
//           <br />
//         </div>
//       </div>

//       <div className={styles.card}>
//         <h2 className={styles.subtitle}>Partners/Sponsors</h2>
//         <div className={styles.description}>
//           <ol>
//             <li>Ministry of Health Malaysia</li>
//             <li>National Heart Association of Malaysia</li>
//             <li>Kuala Lumpur City Hall</li>
//             <li>Nestle Nesvita Omega Plus</li>
//           </ol>
//           <br />
//           <br />
//         </div>
//       </div>

//       <div className={styles.activityCardsContainer}>
//         {/* Left Column - Activities Include */}
//         <div className={styles.leftCard}>
//           <div className={styles.card}>
//             <h2 className={styles.subtitle}>Activities Include</h2>
//             <div className={styles.description}>
//               <ol>
//                 <li>Poster Exhibition</li>
//                 <li>Walk-A-Mile Final Event</li>
//                 <li>Health Talks</li>
//                 <li>Healthy heart breakfast from Nestle</li>
//                 <li>Aerobic Exercises</li>
//                 <li>Line Dancing Performance</li>
//                 <li>Martial Arts Performance</li>
//                 <li>Jump Rope Demonstration</li>
//                 <li>Free Health Screening for Blood Pressure, Blood sugar, Cholesterol, Weight</li>
//                 <li>Anti Smoking Campaign</li>
//                 <li>Lucky Draws</li>
//               </ol>
//               <br />
//               <br />
//               The event was officiated by Former Prime Minister of Malaysia, Tun Abdullah Ahmad Badawi. Each participant was given a free T-Shirt featuring the World Heart Federation logo and Heart-shaped balloon.
//             </div>
//           </div>
//         </div>

//         {/* Right Column - Publicity */}
//         <div className={styles.rightCards}>
//           <div className={styles.card}>
//             <h2 className={styles.subtitle}>Publicity</h2>
//             <div className={styles.description}>
//               <ol>
//                 <li>Local Newspaper</li>
//                 <li>Health Magazine (Special issue focusing on World Heart Day and theme)</li>
//               </ol>
//               <br />
//               Our <u>facebook link here</u> has loads of pictures.
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WordHeart2011;

import { FaWalking, FaHeart, FaNewspaper, FaUsers } from 'react-icons/fa';
import styles from './styles.module.css';

const WordHeart2011 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>World Heart Day 2011</h1>
      <p className={styles.description}>
        [ Past Event - this page is for archival information purposes only.]
        <br />
        <br />
      </p>

      {/* Cards Section */}
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaHeart /> "One World, One Home, One Heart"
          </h2>
          <p className={styles.cardDescription}>
            Sunday 25 September 2011, Taman Tasik Titiwangsa
            <br />
            <br />
            <b>Details of Event</b>
            <br />
            Date: Sunday, 25 September 2011
            <br />
            Time: 7.00 am - 10.30 am
            <br />
            Venue: Taman Tasik Titiwangsa, Kuala Lumpur
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaUsers /> Partners/Sponsors
          </h2>
          <div className={styles.cardDescription}>
            <div className={styles.subCard}>Ministry of Health Malaysia</div>
            <div className={styles.subCard}>
              National Heart Association of Malaysia
            </div>
            <div className={styles.subCard}>Kuala Lumpur City Hall</div>
            <div className={styles.subCard}>Nestle Nesvita Omega Plus</div>
          </div>
        </div>
      </div>

      {/* Centered Activities Card (with new layout) */}
      <div className={styles.activityCardsContainer}>
        <div className={styles.leftCard}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <FaWalking /> Activities Include
            </h2>
            <div className={styles.cardDescription}>
              <div className={styles.subCard}>Poster Exhibition</div>
              <div className={styles.subCard}>Walk-A-Mile Final Event</div>
              <div className={styles.subCard}>Health Talks</div>
              <div className={styles.subCard}>
                Healthy heart breakfast from Nestle
              </div>
              <div className={styles.subCard}>Aerobic Exercises</div>
              <div className={styles.subCard}>Line Dancing Performance</div>
              <div className={styles.subCard}>Martial Arts Performance</div>
              <div className={styles.subCard}>Jump Rope Demonstration</div>
              <div className={styles.subCard}>
                Free Health Screening for Blood Pressure, Blood Sugar,
                Cholesterol, Weight
              </div>
              <div className={styles.subCard}>Anti Smoking Campaign</div>
              <div className={styles.subCard}>Lucky Draws</div>
            </div>
          </div>
          <br />
        </div>

        <div className={styles.rightCards}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <FaNewspaper /> Publicity
            </h2>
            <div className={styles.cardDescription}>
              <div className={styles.subCard}>Local Newspaper</div>
              <div className={styles.subCard}>
                Health Magazine (Special issue focusing on World Heart Day and
                theme)
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.centeredText}>
        The event was officiated by Former Prime Minister of Malaysia, Tun
        Abdullah Ahmad Badawi. Each participant was given a free T-Shirt
        featuring the World Heart Federation logo and Heart-shaped balloon.
      </p>
    </div>
  );
};

export default WordHeart2011;
