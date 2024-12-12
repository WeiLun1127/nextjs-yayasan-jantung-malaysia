import styles from './styles.module.css';

const WordHeart2013 = () => {
  return (
    <div>
      <h1 className={styles.title}> World Heart Day 2013</h1>
      <h2 className={styles.subtitle}>"Take the Road to a Healthy Heart"</h2>
      <p className={styles.description}>
        Sunday 29 September 2013, Taman Tasik Titiwangsa
        <br />
        <br />
      </p>
      {/* <h1 className={styles.title}>"Workplace Wellness"</h1> */}
      <h2 className={styles.subtitle}>Details of Event</h2>
      <p className={styles.description}>
        Date : Sunday, 29 September 2013 <br />
        Time : 7.00 am - 10.00 am <br />
        Venue : Astaka, Taman Tasik Titiwangsa, Kuala Lumpur <br />
        <br />
        <br />
      </p>
      <h2 className={styles.subtitle}>Partners/Sponsors</h2>
      <p className={styles.description}>
        <ul>
          <li>Ministry of Health Malaysia</li>
          <li>National Heart Association of Malaysia</li>
          <li>Nestle Nesvita Omega Plus</li>
          <li>Dewan Bandaraya Kuala Lumpur</li>
          <li>World Heart Federation</li>
        </ul>
        <br />
        <br />
      </p>
      <h2 className={styles.subtitle}>Programme</h2>
      <p className={styles.description}>
        7:00 am &ndash; Distribution of T-Shirts
        <br />
        7:30 am &ndash; Arrival of Guests
        <br />
        7:45 am &ndash; Arrival of Guest of Honor
        <br />
        <br />
        <ul>
          <li>National Anthem “ Negaraku “</li>
          <li>
            Welcome Address by YBhg Datuk J. S Sambhi, Chairman of The Heart
            Foundation of Malaysia
          </li>
          <li>Speech by Guest of Honor Y.A.Bhg Tun Dr Mahathir bin Mohamad</li>
          <li>Launch of World Heart day 2013</li>
          <li>Presentation of Cheque & token of Appreciation</li>
          <li>Warming up Exercise</li>
          <li>Cheerleading performance</li>
          <li>
            Walk-A-Mile Flag Off by Y.A.Bhg Tun Dr Siti Hasmah Binti Haji Mohd
            Ali
          </li>
          <li>Cooling Down Exercise</li>
          <li>Healthy Breakfast</li>
          <li>Line dance performance by Line Dance Group</li>
          <li>Lucky Draw</li>
          <li>Silat Performance by Seni Gayong Fatani Kuala Lumpur</li>
          <li>Lucky Draw / Grand Lucky Draw</li>
        </ul>
        <br />
        <br />
      </p>
      <h2 className={styles.subtitle}>Side Activities</h2>
      <p className={styles.description}>
        <ul>
          <li>Poster Exhibition</li>
          <li>
            Free Cholesterol & Glucose / Blood Pressure Check / BMI Test &
            Consultation
          </li>
          <li>Nutritional Talk</li>
        </ul>
        <br />
        <br />
      </p>
      <h2 className={styles.subtitle}>Persons-in-charge</h2>
      <p className={styles.description}>
        <ul>
          <li>Mr. Faizal : 012-209 6571 (executive secretary)</li>
          <li>Mrs. Vijaya : 012-976 3166 (admin manager) </li>
        </ul>
        <br />
        <br />
      </p>
    </div>
  );
};

export default WordHeart2013;
