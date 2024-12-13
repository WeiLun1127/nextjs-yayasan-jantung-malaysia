import {
  FaCalendar,
  FaHandsHelping,
  FaClipboardList,
  FaTag,
  FaUserTie,
  FaCheckCircle,
} from 'react-icons/fa'; // Importing icons
import styles from './styles.module.css';

const WordHeart2013 = () => {
  return (
    <div>
      <h1 className={styles.title}> World Heart Day 2013</h1>
      <h2 className={styles.subtitle}>
        <div className={styles.icon} /> "Take the Road to a Healthy Heart"
      </h2>
      <p className={styles.description}>
        Sunday 29 September 2013, Taman Tasik Titiwangsa
        <br />
        <br />
      </p>

      {/* Card for Details of Event */}
      <div className={styles.card}>
        <h2 className={styles.subtitle}>
          <FaCalendar className={styles.icon} /> Details of Event
        </h2>
        <p className={styles.description}>
          Date : Sunday, 29 September 2013 <br />
          Time : 7.00 am - 10.00 am <br />
          Venue : Astaka, Taman Tasik Titiwangsa, Kuala Lumpur <br />
          <br />
          <br />
        </p>
      </div>

      {/* Card for Partners/Sponsors */}
      <div className={styles.card}>
        <h2 className={styles.subtitle}>
          <FaHandsHelping className={styles.icon} /> Partners/Sponsors
        </h2>
        <div className={styles.description}>
          <ul className={styles.noBulletPoints}>
            <li>
              <div className={styles.subCard}>
                <FaCheckCircle /> Ministry of Health Malaysia
              </div>
            </li>
            <li>
              <div className={styles.subCard}>
                <FaCheckCircle /> National Heart Association of Malaysia
              </div>
            </li>
            <li>
              <div className={styles.subCard}>
                <FaCheckCircle /> Nestle Nesvita Omega Plus
              </div>
            </li>
            <li>
              <div className={styles.subCard}>
                <FaCheckCircle /> Dewan Bandaraya Kuala Lumpur
              </div>
            </li>
            <li>
              <div className={styles.subCard}>
                <FaCheckCircle /> World Heart Federation
              </div>
            </li>
          </ul>
          <br />
          <br />
        </div>
      </div>

      {/* Card for Programme */}
      <div className={styles.card}>
        <h2 className={styles.subtitle}>
          <FaClipboardList className={styles.icon} /> Programme
        </h2>
        <div className={styles.description}>
          7:00 am &ndash; Distribution of T-Shirts
          <br />
          7:30 am &ndash; Arrival of Guests
          <br />
          7:45 am &ndash; Arrival of Guest of Honor
          <br />
          <br />
          <ul className={styles.noBulletPoints}>
            <li>
              <div className={styles.subCard}>
                <FaCheckCircle /> National Anthem “ Negaraku “
              </div>
            </li>
            <li>
              <div className={styles.subCard}>
                <FaCheckCircle /> Welcome Address by YBhg Datuk J. S Sambhi,
                Chairman of The Heart Foundation of Malaysia
              </div>
            </li>
            <li>
              <div className={styles.subCard}>
                <FaCheckCircle /> Speech by Guest of Honor Y.A.Bhg Tun Dr
                Mahathir bin Mohamad
              </div>
            </li>
            <li>
              <div className={styles.subCard}>
                <FaCheckCircle /> Launch of World Heart day 2013
              </div>
            </li>
            <li>
              <div className={styles.subCard}>
                <FaCheckCircle /> Presentation of Cheque & token of Appreciation
              </div>
            </li>
            <li>
              <div className={styles.subCard}>
                <FaCheckCircle /> Warming up Exercise
              </div>
            </li>
            <li>
              <div className={styles.subCard}>
                <FaCheckCircle /> Cheerleading performance
              </div>
            </li>
            <li>
              <div className={styles.subCard}>
                <FaCheckCircle /> Walk-A-Mile Flag Off by Y.A.Bhg Tun Dr Siti
                Hasmah Binti Haji Mohd Ali
              </div>
            </li>
            <li>
              <div className={styles.subCard}>
                <FaCheckCircle /> Cooling Down Exercise
              </div>
            </li>
            <li>
              <div className={styles.subCard}>
                <FaCheckCircle /> Healthy Breakfast
              </div>
            </li>
            <li>
              <div className={styles.subCard}>
                <FaCheckCircle /> Line dance performance by Line Dance Group
              </div>
            </li>
            <li>
              <div className={styles.subCard}>
                <FaCheckCircle /> Lucky Draw
              </div>
            </li>
            <li>
              <div className={styles.subCard}>
                <FaCheckCircle /> Silat Performance by Seni Gayong Fatani Kuala
                Lumpur
              </div>
            </li>
            <li>
              <div className={styles.subCard}>
                <FaCheckCircle /> Lucky Draw / Grand Lucky Draw
              </div>
            </li>
          </ul>
          <br />
          <br />
        </div>
      </div>

      {/* Card for Side Activities */}
      <div className={styles.card}>
        <h2 className={styles.subtitle}>
          <FaTag className={styles.icon} /> Side Activities
        </h2>
        <div className={styles.description}>
          <ul className={styles.noBulletPoints}>
            <li>
              <div className={styles.subCard}>
                <FaCheckCircle /> Poster Exhibition
              </div>
            </li>
            <li>
              <div className={styles.subCard}>
                <FaCheckCircle /> Free Cholesterol & Glucose / Blood Pressure
                Check / BMI Test & Consultation
              </div>
            </li>
            <li>
              <div className={styles.subCard}>
                <FaCheckCircle /> Nutritional Talk
              </div>
            </li>
          </ul>
          <br />
          <br />
        </div>
      </div>

      {/* Card for Persons-in-charge */}
      <div className={styles.card}>
        <h2 className={styles.subtitle}>
          <FaUserTie className={styles.icon} /> Persons-in-charge
        </h2>
        <div className={styles.description}>
          <ul className={styles.noBulletPoints}>
            <li>
              <div className={styles.subCard}>
                <FaCheckCircle /> Mr. Faizal : 012-209 6571 (executive
                secretary)
              </div>
            </li>
            <li>
              <div className={styles.subCard}>
                <FaCheckCircle /> Mrs. Vijaya : 012-976 3166 (admin manager){' '}
              </div>
            </li>
          </ul>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default WordHeart2013;
