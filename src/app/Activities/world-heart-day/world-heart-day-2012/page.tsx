import styles from './styles.module.css';

const WordHeart2012 = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <h1 className={styles.title}> World Heart Day 2012</h1>

        {/* Description for Past Event */}
        <p className={`${styles.description} ${styles.centeredDescription}`}>
          [ Past Event - this page is for archival information purposes only.]
          <br />
          <br />
        </p>
        <img
          src="/images/world-heart-day/2014/logo_WHD2014.gif"
          alt="Adam Tan Huang Chew"
          className={styles.cardImage}
        />
        <br />
        <br />
        <h1 className={styles.title}>"Workplace Wellness"</h1>
        <p className={styles.description}>
          <b>Sunday, 30th September, 2012:</b> The participants of the World
          Heart Day celebrations at Taman Tasik Titiwangsa, Kuala Lumpur were
          greeted by a beautiful sunlit day.
          <br />
          <br />
          The focus of this year&apos;s celebrations was the Walk-A-Mile event
          which was officially launched by YABHG Tun Ahmad Sarji bin Abdul
          Hamid, President of The Heart Foundation of Malaysia. A total of
          around 1300 people turned up at this year&apos;s event.
          <br />
          <br />
          All participants received heart-shaped balloons and free T-shirts
          emblazoned with logos of the World Heart Federation. After the Walk,
          they had the opportunity to attend the various other activities that
          were also held in conjunction with World Heart Day.
          <br />
          <br />
          These activities included poster exhibitions, health screening,
          nutritional talks and healthy breakfast meals from Nestle, quiz games,
          lucky draws, and also included demonstrations for gymnastics,
          jump-rope, aerobic dance, line dancing, and even traditional
          self-defence and martial arts.
          <br />
        </p>
        <img
          src="/images/world-heart-day/2014/banner_WHD2014_MY.jpg"
          alt="Adam Tan Huang Chew"
          className={styles.cardImage}
        />
      </div>
    </div>
  );
};

export default WordHeart2012;
