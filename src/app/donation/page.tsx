import styles from './styles.module.css';
import {
  FaUser,
  FaIdCard,
  FaAddressBook,
  FaPhone,
  FaMoneyBill,
  FaReceipt,
  FaPhoneAlt,
} from 'react-icons/fa';

const AboutYJM = () => {
  return (
    <div>
      <h1 className={styles.title}>Donation</h1>

      {/* Card for image and donation form link */}
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img
            src="/images/donation/YJM-Donation-QR-Code.png"
            alt="DonationQR"
            className={styles.membershipImage}
          />
        </div>
        <a
          href="http://www.yjm.org.my/view_file.cfm?fileid=3"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <u>Donation Form (PDF)</u>
        </a>
      </div>

      <div className={styles.centerText}>
        To get the Tax Exempted Receipt, please FAX to 03-26933267 or EMAIL to
        Jantung1.yjm@gmail.com the following details as follows:
      </div>

      {/* Cards for each list item */}
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <FaUser className={styles.icon} />
          FULL NAME
        </div>
        <div className={styles.card}>
          <FaIdCard className={styles.icon} />
          NRIC NO/BUSINESS REGISTRATION NO.
        </div>
        <div className={styles.card}>
          <FaAddressBook className={styles.icon} />
          FULL POSTAL ADDRESS
        </div>
        <div className={styles.card}>
          <FaPhone className={styles.icon} />
          TELEPHONE NO.
        </div>
        <div className={styles.card}>
          <FaMoneyBill className={styles.icon} />
          DONATED AMOUNT
        </div>
        <div className={styles.card}>
          <FaReceipt className={styles.icon} />
          PROOF OF PAYMENT (BANK-IN-SLIP)
        </div>
        <div className={styles.card}>
          <FaPhoneAlt className={styles.icon} />
          For further inquiries, kindly contact 03 - 26934709
        </div>
      </div>
    </div>
  );
};

export default AboutYJM;
