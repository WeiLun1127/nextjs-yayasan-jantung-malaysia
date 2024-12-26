import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import styles from './styles.module.css';

const HallRental = async (props: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>{dictionaries['hall-rental']['title']}</h1>
        <h2 className={styles.subtitle}>
          {dictionaries['hall-rental']['hall-rental-rate']}
        </h2>
        <table className={styles.rentalTable}>
          <thead>
            <tr>
              <th>{dictionaries['hall-rental']['items']}</th>
              <th>{dictionaries['hall-rental']['chairs']}</th>
              <th>{dictionaries['hall-rental']['round-tables']}</th>
              <th>{dictionaries['hall-rental']['pa-system']}</th>
              <th>{dictionaries['hall-rental']['amount']}</th>
              <th>{dictionaries['hall-rental']['amount']}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dictionaries['hall-rental']['hall']}</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>1,000.00 {dictionaries['hall-rental']['per-day']}</td>
              <td>500.00</td>
            </tr>
          </tbody>
        </table>
        <br />
        <p className={styles.description}>
          {dictionaries['hall-rental']['deposit-refund']}
          <br />
          <br />
          {dictionaries['hall-rental']['time']}: 8.00am - 5.00pm
          <br />
          {dictionaries['hall-rental']['care-taker']} - RM150.00
          <br />
          {dictionaries['hall-rental']['cleaner']} - RM100.00 - 2{' '}
          {dictionaries['hall-rental']['persons']}
          <br />
          {dictionaries['hall-rental']['food-catering']}
          <br />
          {dictionaries['hall-rental']['confirmation']} <br />
          (Tel: 03-26934709 - En. Zamri/M. Vijaya)
          <br />
          <br />
          <br />
          <b>{dictionaries['hall-rental']['other-facilities']}</b>
          <br />
          {dictionaries['hall-rental']['rental-of-dormitory']} - RM20.00{' '}
          {dictionaries['hall-rental']['per-bed']}x 20{' '}
          {dictionaries['hall-rental']['beds']}
          <br />
          {dictionaries['hall-rental']['rental-rooms-with-fan']} - RM50/RM65.00
          <br />
          {dictionaries['hall-rental']['rental-rooms-with-air-cond']} - RM80.00
          <br />
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default HallRental;
