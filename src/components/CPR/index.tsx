import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

const CPRMain = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>CPR (Cardio Pulmonary Resuscitation)</h2>
      <div className={styles.bulletin_card}>
        <Link href="/">
          <div className={styles.bulletin_cover}>
            <Image fill alt="bulletin-cover" src="/images/cpr/icon-cpr.gif" />
          </div>
        </Link>
        <p className={styles.bulletin_description}>
          <b>CPR (Cardio Pulmonary Resuscitation)</b> The Heart Foundation of
          Malaysia (Yayasan Jantung Malaysia) is a leading agency in the
          education, training and on the control of heart and blood vessel
          disease.
          <br />
          <br />
          In this respect, the time has come for the foundation, to seriously
          work towards creating interest not only disseminating the knowledge
          and skills in Basic Life Support, but, also from time to time conduct
          and demonstrate saving technique's of Cardiopulmonary Resuscitation
          (CPR).
          <Link href="/activities/cpr" className={styles.read_more}>
            Read More
          </Link>
        </p>
      </div>
    </section>
  );
};

export default CPRMain;
