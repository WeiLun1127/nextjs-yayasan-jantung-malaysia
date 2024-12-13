import styles from './styles.module.css';

const Calendar = () => {
  const events = [
    { month: 'January', date: '23', programme: 'School/College', venue: 'Consist, Hulu Klang' },
    { month: 'January', date: '26', programme: 'Community', venue: 'Senawang, Negeri Sembilan' },
    { month: 'February', date: '17', programme: 'Community', venue: 'Palong, Negeri Sembilan' },
    { month: 'February', date: '24', programme: 'Community', venue: 'Bahau, Negeri Sembilan' },
    { month: 'March', date: '2', programme: 'Go Red For Women', venue: 'Taman Sri Rampai, Kuala Lumpur' },
    { month: 'March', date: '9', programme: 'Go Red For Women', venue: 'Yayasan Jantung Malaysia, Kuala Lumpur' },
    { month: 'March', date: '17', programme: 'MNRB Run', venue: 'MNRB Holding, Kuala Lumpur' },
    { month: 'March', date: '18-19', programme: 'Workplace', venue: 'Takaful Ikhlas, Bangsar' },
    { month: 'March', date: '25-27', programme: 'Workplace', venue: 'MNRB, Damansara' },
    { month: 'March', date: '31', programme: 'Workplace', venue: 'Tokio Marine, Karak Pahang' },
    { month: 'April', date: '13', programme: 'Go Red For Women', venue: 'Tumpat, Kelantan' },
    { month: 'April', date: '16-17', programme: 'School', venue: 'SMK Seremban 2, Negeri Sembilan' },
    { month: 'April', date: '27', programme: 'Go Red For Women', venue: 'Labis, Johor' },
    { month: 'May', date: '1', programme: 'Community', venue: 'HKL Run, Dataran Merdeka' },
    { month: 'May', date: '3', programme: 'Community', venue: 'Salam Hospital, Senawang Negeri Sembilan' },
    { month: 'June', date: '15', programme: 'Community', venue: 'Nilai Medical Centre, Negeri Sembilan' },
    { month: 'June', date: '29', programme: 'Community', venue: 'Kampung Sungai Enggang, Temerloh Pahang' },
    { month: 'June', date: '30', programme: 'Community', venue: 'Kampung Bolok Hilir, Lanchang Pahang' },
    { month: 'July', date: '3', programme: 'Workplace', venue: 'AXA, Wisma Goldhill, Kuala Lumpur' },
    { month: 'July', date: '9', programme: 'Workplace', venue: 'UPECA, Shah Alam' },
    { month: 'July', date: '11', programme: 'School/College', venue: 'IKBTN Dusun Tua, Hulu Langat Selangor' },
    { month: 'July', date: '21', programme: 'AXA Heart In Action Run 2019', venue: 'Dataran Merdeka, Kuala Lumpur' },
    { month: 'July', date: '23-25', programme: 'Workplace', venue: 'MQA, Cyberjaya' },
    { month: 'August', date: '3', programme: 'Go Red For Women', venue: 'Komplek Sukan Langkawi, Kedah' },
    { month: 'August', date: '4', programme: 'School/College', venue: 'Kolej Komuniti Langkawi, Kedah' },
    { month: 'August', date: '25', programme: 'Community', venue: 'Flat Anggerik, Cheras' },
    { month: 'August', date: '27', programme: 'School/College', venue: 'Queens College, Kuala Lumpur' },
    { month: 'September', date: '21', programme: 'Go Red For Women', venue: 'Taman Melewar, Kuala Lumpur' },
    { month: 'September', date: '29', programme: 'Community', venue: 'Wisma YPR, Kuala Lumpur' },
    { month: 'October', date: '5', programme: 'Community', venue: 'Setapak, Kuala Lumpur' },
    { month: 'October', date: '9', programme: 'Workplace', venue: 'UPECA, Shah Alam' },
    { month: 'October', date: '12', programme: 'Go Red For Women', venue: 'Beaufort, Sabah' },
    { month: 'October', date: '17', programme: 'School', venue: 'Melaka' },
    { month: 'October', date: '20', programme: 'Community', venue: 'Sungai Buloh' },
    { month: 'November', date: '17', programme: 'Community', venue: 'Lukut, Negeri Sembilan' },
    { month: 'November', date: '20', programme: 'Workplace', venue: 'Alloy MTD' },
    { month: 'December', date: '7', programme: 'Community', venue: 'Taman Melati, Kuala Lumpur' },
    { month: 'December', date: '17', programme: 'School/College', venue: 'Geomatika, Kuala Lumpur' }
  ];

  let lastMonth = '';

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>The Heart Foundation of Malaysia</h1>
      <h2 className={styles.subtitle}>Yayasan Jantung Malaysia (YJM)</h2>
      <div className={styles.description}> {/* Changed <p> to <div> */}
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Month</th>
              <th>Date</th>
              <th>Programme</th>
              <th>Venue</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => {
              const showMonth = event.month !== lastMonth;
              lastMonth = event.month;
              return (
                <tr key={index}>
                  <td>{showMonth ? event.month : ''}</td>
                  <td>{event.date}</td>
                  <td>{event.programme}</td>
                  <td>{event.venue}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
