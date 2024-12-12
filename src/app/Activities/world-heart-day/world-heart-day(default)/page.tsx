import styles from './styles.module.css';

const GoRed = () => {
  return (
    <div>
      <h1 className={styles.title}>Go Red For Women</h1>
      <h2 className={styles.subtitle}>
        <b>World Heart Day 2014 </b>&#40;28 September 2014&#41;.
      </h2>
      <p className={styles.description}>
        World Heart Day was initiated by World Heart Federation &#40;WHF&#41; by
        working with the World Health Organization and UNESCO to set one special
        day to create awareness to the world population towards heart disease.
        <br />
        <br />
        <b>
          WHO & UNESCO had agreed to declare the last Sunday of the month of
          September since year 2000 as World Heart Day.
        </b>
        <br />
        <br />
        Since then, every Heart Foundation worldwide will celebrate World Heart
        Day &#40;with different themes&#41; with participation from every single
        person of the population by organizing various heart health activities.
        <br />
        <br />
        <u>
          Click here for programme updated details &#40;Malaysia World Heart
          Day, 28 September 2014&#41;
        </u>
        <br />
        <br />
      </p>
    </div>
  );
};

export default GoRed;
