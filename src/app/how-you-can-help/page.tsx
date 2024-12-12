import styles from './styles.module.css';
import { FaDonate, FaHandshake, FaProjectDiagram, FaPrint, FaTaxi } from 'react-icons/fa'; // Importing icons

const HowYouCanHelp = () => {
  return (
    <div>
      <h1 className={styles.title}>How You Can Help</h1>
      <div className={styles.cardContainer}> {/* Use the correct class name */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaDonate className={styles.icon} />
          </div>
          <h2>Donations</h2>
          <p>
            By donations to support cardiovascular research. Specific areas of research may be designated, but a more general and flexible type of donation is preferred.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaHandshake className={styles.icon} />
          </div>
          <h2>Sponsoring a Fellowship</h2>
          <p>
            By sponsoring a Research or Training Fellowship. The name of an individual, company or trust can be applied to the Fellowship and specific requests can be negotiated and incorporated into the conditions for the award.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaProjectDiagram className={styles.icon} />
          </div>
          <h2>Sponsoring Research Projects</h2>
          <p>
            By sponsoring Research Projects. An individual, company, or trust may sponsor research within a particular field. Sponsorship is applied to an award made by the Foundation's Scientific Committee.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaPrint className={styles.icon} />
          </div>
          <h2>Sponsoring Printing</h2>
          <p>
            By sponsoring printing of brochures, Student Heart Health programmes, Symposium, or Conferences. The Foundation has a broad range of activities offering opportunities for corporate sponsorship.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaTaxi className={styles.icon} />
          </div>
          <h2>Tax Benefits</h2>
          <p>
            Individuals, companies, and trusts which support the Foundation through sponsorship are eligible for taxation benefits. They also receive goodwill through association with non-profit organizations.
          </p>
        </div>
      </div>
      <br />
      <br />
      Monetary Contributions made to the Foundation are <b>tax exempted: JHDN/01/35/42/51/179-6.3452</b>
      <br />
      <br />
      Please click here for Donation Form &#40;pdf&#41;
      <br />
      <br />
    </div>
  );
};

export default HowYouCanHelp;
