import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import styles from './styles.module.css';

const ContactUs = async (props: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);

  return (
    <div>
      <h1 className={styles.title}>{dictionaries['contact-us']['title']}</h1>
      <h2 className={styles.subtitle}>
        {dictionaries['contact-us']['subtitle']}
      </h2>

      {/* Card containing both Address and Information */}
      <div className={styles.card}>
        <h3>{dictionaries['contact-us']['address']}</h3>
        <p className={styles.description}>
          No 6 Jalan Lai Tet Loke 2 Off Lorong Gurney 54100 Kuala Lumpur,
          MALAYSIA
        </p>

        <h3>{dictionaries['contact-us']['contact-information']}</h3>
        <p className={styles.description}>
          {dictionaries['contact-us']['tel']}: 03-2693 4709 | Fax: 03-2693 3267{' '}
          <br />
          {dictionaries['contact-us']['email']}: jantung1.yjm@gmail.com
          <br />
          {dictionaries['contact-us']['website']}:{' '}
          <a
            href="https://www.yjm.org.my"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.yjm.org.my
          </a>
          <br />
          {dictionaries['contact-us']['facebook']}:{' '}
          <a
            href="https://www.facebook.com/YayasanJantungMalaysia"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yayasan Jantung Malaysia
          </a>
          <br />
        </p>
      </div>

      <br />
      <br />

      {/* Location Map */}
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.709806047445!2d101.71064807584418!3d3.1709127530166907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37ddf04706d1%3A0xe08aca14c5401842!2sYayasan%20Jantung%20Malaysia!5e0!3m2!1sen!2smy!4v1734029322305!5m2!1sen!2smy"
          width="800"
          height="600"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
