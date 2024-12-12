import { FaAppleAlt, FaHeartbeat, FaLeaf } from 'react-icons/fa';
import styles from './styles.module.css';

const HeartDisease = () => {
  return (
    <div>
      <h1 className={styles.title}>
        Heart Disease - Not somebody else's business
      </h1>

      {/* Card for "Risks for heart & blood vessel disease" */}
      <div className={styles.card}>
        <FaAppleAlt className={styles.cardIcon} />
        <h2 className={styles.cardTitle}>Risks for heart & blood vessel disease</h2>
        <p className={styles.cardDescription}>
          Around 60% of all men and about 45% of all women are overweight or obese. According to the Heart Foundation, 1/3 to 1/2 of Australians between 20 and 69 years have higher than recommended blood cholesterol levels. This is reflected in the number of early deaths, with over 10,000 people under 70 dying from heart and blood vessel disease in 1996.
          <br />
          <br />
          A healthy heart and circulation require a balanced eating plan and lifestyle. A balanced eating plan can help control three modifiable risk factors for heart disease: blood cholesterol levels, obesity, and blood pressure. Physical activity and not smoking are also crucial in reducing risk.
          <br />
          <br />
          A balanced diet should be high in carbohydrates from grains, fruits, and vegetables, and low in saturated fat. It should also be rich in fiber. The Heart Foundation recommends 30 grams of fiber per day for all adults.
        </p>
      </div>

      {/* Card for "Fibre is an important dietary component" */}
      <div className={styles.card}>
        <FaHeartbeat className={styles.cardIcon} />
        <h2 className={styles.cardTitle}>Fibre is an important dietary component</h2>
        <p className={styles.cardDescription}>
          Most foods with fiber contain both soluble and insoluble fiber, which offer different benefits. Soluble fiber helps lower blood cholesterol levels. Sources of soluble fiber include oats, barley, legumes, fruits, and vegetables. 
          <br />
          <br />
          Research has shown that people with blood cholesterol problems who ate a psyllium-rich cereal meal daily managed to lower their blood cholesterol by 5% and LDL (bad cholesterol) by 9%. Lowering cholesterol is crucial to our nation's health.
        </p>
      </div>

      {/* Card for "Why eat more fibre?" */}
      <div className={styles.card}>
        <FaLeaf className={styles.cardIcon} />
        <h2 className={styles.cardTitle}>Why eat more fibre?</h2>
        <p className={styles.cardDescription}>
          Eating fiber-rich foods daily helps manage weight, maintain healthy cholesterol levels, and reduces the risk of heart disease. Additionally, regular physical activity and not smoking are essential to reduce your overall risk.
          <br />
          <br />
          Source: Kellog's Facts for Life & Heart Foundation of Australia
        </p>
      </div>
    </div>
  );
};

export default HeartDisease;
