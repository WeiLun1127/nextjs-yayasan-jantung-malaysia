import styles from './styles.module.css';

const HallRental = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>YJM Facilities</h1>
        <h2 className={styles.subtitle}>Hall Rental Rate</h2>
        <table className={styles.rentalTable}>
          <thead>
            <tr>
              <th>Items</th>
              <th>Chairs (200 units)</th>
              <th>Round Tables (5 units)</th>
              <th>PA System (unit)</th>
              <th>Amount (RM)</th>
              <th>Deposit (RM)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hall</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>1,000.00 per day</td>
              <td>500.00</td>
            </tr>
          </tbody>
        </table>
        <br />
        <p className={styles.description}>
          Deposit will be refunded 1 week after event
          <br />
          <br />
          Time: 8.00am - 5.00pm
          <br />
          Care Taker - RM150.00
          <br />
          Cleaner - RM100.00 - 2 persons
          <br />
          If Food Catering done - NO WASHING OF DISHES ALLOWED
          <br />
          Please confirm 2 weeks before the event <br />
          (Tel: 03-26934709 - En. Zamri/M. Vijaya)
          <br />
          <br />
          <br />
          <b>Other Facilities</b>
          <br />
          Rental of Dormitory - RM20.00 per bed x 20 beds
          <br />
          Rental of Rooms with fan - RM50/RM65.00
          <br />
          Rental of Rooms with air-cond - RM80.00
          <br />
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default HallRental;
