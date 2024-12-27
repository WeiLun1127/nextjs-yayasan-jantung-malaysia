import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import Image from 'next/image';
import styles from './styles.module.css';

const Membership = async (props: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);

  return (
    <div>
      <h1 className={styles.title}>{dictionaries['membership']['title']}</h1>

      <div className={styles.imageContainer}>
        <a
          href="http://www.yjm.org.my/view_file.cfm?fileid=4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.membershipImage}>
            <Image
              fill
              src="/images/membership/membership-form.jpg"
              alt="Membership"
            />
          </div>
        </a>
      </div>

      <p className={styles.description}>
        <b>{dictionaries['membership']['membership-form']}:</b> PDF
      </p>
    </div>
  );
};

export default Membership;
