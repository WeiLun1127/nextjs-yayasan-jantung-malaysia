import Link from 'next/link';
import styles from './styles.module.css';

const CPR = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}> Friends of the Foundation</h1>
        <p className={styles.description}>
          The Heart Foundation of Malaysia invites you to become a Friend of the
          Heart Foundation. Your support will ensure that we can continue
          working together to reduce the incidence of heart and blood vessel
          disease including stroke in our community and improve the quality of
          life.
          <br />
          <br />
          You may not wish to be part of the administrative structure of the
          Foundation or to attend annual meetings, but simply want to express
          your goodwill and encouragement in a practical way. You can do this by
          becoming one of our Friends through an annual donation.
          <br />
          <br />
          As a Friend of the Heart Foundation, you will receive regular mailouts
          of our newsletters which will keep you abreast of the Foundation's
          activities and other information which we hope will be of interest to
          you.
          <br />
          <br />
          Should you wish greater involvement, as a Friend of the Foundation you
          may wish to start Healthy Heart Clubs in your area to further promote
          awareness of the Foundation's aims, work and activities.
          <br />
          <br />
          For more information, please{' '}
          <Link href="/contact-us" className={styles.contactLink}>
            contact us here
          </Link>
          .
          <br />
          <br />
        </p>
        <img
          src="/images/friends-of-the-foundation/17215601_s.jpg"
          alt="friendsOfTheFoundation"
          className={styles.cardImage}
        />
      </div>
    </div>
  );
};

export default CPR;
