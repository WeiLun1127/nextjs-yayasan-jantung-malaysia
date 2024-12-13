import styles from './styles.module.css';

const Research = () => {
  return (
    <div>
      <h1 className={styles.title}>Research - The Heart of a Revolution</h1>
      <p className={styles.description}>
        We need a focus on research based and applicable to the Malaysian
        environment. This is simply to encourage our own medical researchers to
        take advantage of international medical advances and to incorporate them
        into situations applicable to the Malaysian population.
        <br />
        <br />
        We recognize our responsibility to support Malaysian research into
        cardiovascular diseases and the Foundation plans to grant more awards to
        local research whenever the need arises.
      </p>

      {/* Wrapper card for current research */}
      <div className={styles.cardWrapper}>
        <h3>Foundation-supported research - current</h3>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h4>Effect of ECG Biofeedback Intervention on Biochemical Indices</h4>
            <p>Patients with Unstable Angina / Myocardial Infarction</p>
          </div>
          <div className={styles.card}>
            <h4>A Comparative Study of Dexmedomidine and Propofol</h4>
            <p>For Sedation in Cardiothoracic Intensive Care Unit</p>
          </div>
          <div className={styles.card}>
            <h4>Effects of Herba (Kaempferia Galangal, Allium Fistulosum, and Mentha Spicata)</h4>
            <p>On the Probiotic Fermentation of Milk</p>
          </div>
        </div>
      </div>

      {/* Wrapper card for past research */}
      <div className={styles.cardWrapper}>
        <h3>Foundation-supported research - past</h3>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h4>Rheumatic Heart Disease in Malaysia</h4>
          </div>
          <div className={styles.card}>
            <h4>The Effect of Palm Oil Vitamin E on Blood Pressure</h4>
            <p>Atherosclerosis and Osteoporosis</p>
          </div>
          <div className={styles.card}>
            <h4>Identification on Left Ventricular Dysfunction</h4>
            <p>In Post Myocardial Infarction Patients</p>
          </div>
          <div className={styles.card}>
            <h4>Pulse Wave Velocity and Fasting Insulin</h4>
            <p>In Middle Age Malay Men (40-60 yrs old)</p>
          </div>
          <div className={styles.card}>
            <h4>Diet Modification on Lipid Profile</h4>
            <p>Of Patients with Coronary Heart Disease</p>
          </div>
          <div className={styles.card}>
            <h4>Method Development for Analysis of Homocysteine</h4>
            <p>In Human Blood</p>
          </div>
          <div className={styles.card}>
            <h4>Hypercholesterolemia Effect of Guava</h4>
            <p>In Reducing the Risk of Cardiovascular Disease</p>
          </div>
          <div className={styles.card}>
            <h4>Trend in Serum Sialic Acid Following Acute Coronary Syndrome</h4>
          </div>
          <div className={styles.card}>
            <h4>Effect of Different Preparations of Vitamin E</h4>
            <p>On Cardiovascular Health</p>
          </div>
          <div className={styles.card}>
            <h4>Cardiac Rehabilitation for Post Acute Myocardial Infarction</h4>
          </div>
          <div className={styles.card}>
            <h4>The Hypocholesterolemic and Anti-inflammatory Properties</h4>
            <p>Of Channa Striatus (Snakehead Fish) in Cholesterol-fed Rabbits</p>
          </div>
          <div className={styles.card}>
            <h4>Psychological Predictors of Depression</h4>
            <p>Among Malaysian Women with Heart Disease</p>
          </div>
          <div className={styles.card}>
            <h4>Determination of Nutritional Composition</h4>
            <p>And Antioxidant Activity in Red Pitaya (Hycocereus Spp)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
