import {
  FaHeartbeat,
  FaSearch,
  FaExclamationTriangle,
  FaCogs,
  FaPills,
  FaMedkit,
  FaArrowCircleUp,
  FaChartLine,
} from 'react-icons/fa'; // Import React Icons
import styles from './styles.module.css';

const InheritedCholesterol = () => {
  return (
    <div>
      <h1 className={styles.title}>Inherited Cholesterol Disorder</h1>

      {/* Highlight Part */}
      <div className={`${styles.card} ${styles.highlight}`}>
        <p className={styles.description}>
          The food link to high blood cholesterol is well known. The higher the
          intake of fatty food, the higher the cholesterol levels in our body.
          Less known is the exercise connection. Regular exercise helps bring
          down the cholesterol levels. <br />
          <br />
          <b>
            Perhaps what is not known is the genetic connection to high blood
            cholesterol can be inherited from your parents. And when it does
            occur its management often requires more than just lifestyle
            modifications. Treatment with drugs is required.
          </b>
          <br />
          <br />
          This page is about helping you understanding and manage{' '}
          <b>
            Familial Hypercholesterolemia or inherited cholesterol disorder
            (ICD)
          </b>
          .
        </p>
      </div>

      {/* Card 1 */}
      <div className={styles.card}>
        <FaHeartbeat size={styles.cardIcon} /> {/* Heartbeat icon */}
        <h2 className={styles.subtitle}>
          What is Familial Hypercholesterolemia (Inherited Cholesterol
          Disorder)?
        </h2>
        <p className={styles.description}>
          Familial Hypercholesterolemia or FH is a genetic disorder where the
          body is unable to remove LDL (bad cholesterol) from the blood. It is
          passed from generation to generation. The abnormal gene can be
          inherited from one or both parents. If a child inherits the FH gene
          from both parents, it can lead to a severe form known as Homozygous
          FH.
        </p>
      </div>

      {/* Card 2 */}
      <div className={styles.card}>
        <FaSearch size={styles.cardIcon} /> {/* Search icon */}
        <h2 className={styles.subtitle}>How can FH be Detected?</h2>
        <p className={styles.description}>
          FH can be detected early through blood tests and screening, especially
          in families with a history of high cholesterol. DNA testing is also an
          effective diagnostic tool. Early detection helps prevent
          atherosclerosis and heart disease.
        </p>
      </div>

      {/* Card 3 */}
      <div className={styles.card}>
        <FaExclamationTriangle size={styles.cardIcon} /> {/* Warning icon */}
        <h2 className={styles.subtitle}>
          What are the Risks Associated with FH?
        </h2>
        <p className={styles.description}>
          The primary risk is atherosclerosis, particularly in the coronary
          arteries, leading to heart attacks or strokes. The severity of the
          cholesterol buildup is much higher than in other types of
          hyperlipidemia.
        </p>
      </div>

      {/* Card 4 */}
      <div className={styles.card}>
        <FaCogs size={styles.cardIcon} /> {/* Gear icon */}
        <h2 className={styles.subtitle}>How is FH Treated?</h2>
        <p className={styles.description}>
          Treatment for FH includes statins, lifestyle changes, and in severe
          cases, procedures like plasmapheresis or liver transplant. Lifestyle
          modifications, including healthy eating and exercise, are also
          essential.
        </p>
      </div>

      {/* Card 5 */}
      <div className={styles.card}>
        <FaPills size={styles.cardIcon} /> {/* Pills icon */}
        <h2 className={styles.subtitle}>Drug Therapy</h2>
        <p className={styles.description}>
          Statins are commonly prescribed for lowering cholesterol. Other
          treatments include bile acid sequestrants, niacin, and fibrates, with
          statins being the most effective in long-term cholesterol management.
        </p>
      </div>

      {/* Card 6 */}
      <div className={styles.card}>
        <FaMedkit size={styles.cardIcon} /> {/* Medical Kit icon */}
        <h2 className={styles.subtitle}>What is Cholesterol?</h2>
        <p className={styles.description}>
          Cholesterol is a soft, waxy substance essential for cell membranes,
          nerve insulation, and hormone production. The liver produces most of
          the cholesterol in your blood.
        </p>
      </div>

      {/* Card 7 */}
      <div className={styles.card}>
        <FaArrowCircleUp size={styles.cardIcon} /> {/* Arrow Up icon */}
        <h2 className={styles.subtitle}>Good and Bad Cholesterol</h2>
        <p className={styles.description}>
          Cholesterol is carried through the blood by lipoproteins: LDL (bad
          cholesterol) which can clog arteries, and HDL (good cholesterol) which
          helps remove excess cholesterol from the body.
        </p>
      </div>

      {/* Card 8 */}
      <div className={styles.card}>
        <FaChartLine size={styles.cardIcon} /> {/* Chart Line icon */}
        <h2 className={styles.subtitle}>Your Cholesterol Reading</h2>
        <p className={styles.description}>
          Cholesterol readings include Total Cholesterol, LDL, HDL, and
          Triglycerides. Each of these should be monitored for optimal
          cardiovascular health.
        </p>
      </div>
    </div>
  );
};

export default InheritedCholesterol;
