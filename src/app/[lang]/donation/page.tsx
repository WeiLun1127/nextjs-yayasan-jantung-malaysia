import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import Image from 'next/image';
import {
  FaAddressBook,
  FaIdCard,
  FaMoneyBill,
  FaPhone,
  FaPhoneAlt,
  FaReceipt,
  FaUser,
} from 'react-icons/fa';
import styles from './styles.module.css';

const Donation = async (props: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);

  return (
    <div>
      <h1 className={styles.title}>{dictionaries['donation']['title']}</h1>

      {/* Card for image and donation form link */}
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <div className={styles.donationImage}>
            <Image
              fill
              src="/images/donation/YJM-Donation-QR-Code.png"
              alt="DonationQR"
            />
          </div>
        </div>
        <a
          href="http://www.yjm.org.my/view_file.cfm?fileid=3"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <u>{dictionaries['donation']['donation-form']} (PDF)</u>
        </a>
      </div>

      <div className={styles.centerText}>
        {dictionaries['donation']['description']}
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

export default Donation;
