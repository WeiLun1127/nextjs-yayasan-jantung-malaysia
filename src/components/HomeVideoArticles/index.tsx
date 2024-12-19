'use client';

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import styles from './styles.module.css';

interface HeaderProps {
  dictionaries: Dict.Dictionaries;
}

const HomeVideoArticles = ({ dictionaries }: HeaderProps) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{dictionaries['video']['Video Articles']}</h2>

      <div className={styles.video_container}>
        <div className={styles.video_card}>
          <LiteYouTubeEmbed
            id="H04d3rJCLCE"
            title="How the Human Heart Works"
          />
          <h3 className={styles.video_article_title}>
            How the Human Heart Works
          </h3>
        </div>

        <div className={styles.video_card}>
          <LiteYouTubeEmbed
            id="ocw_Zey-7cA"
            title="Four Ways to Prevent Heart Attack"
          />
          <h3 className={styles.video_article_title}>
            Four Ways to Prevent Heart Attack
          </h3>
        </div>

        <div className={styles.video_card}>
          <LiteYouTubeEmbed id="eqe9j6i8p14" title="Heart Disease Warning" />
          <h3 className={styles.video_article_title}>Heart Disease Warning</h3>
        </div>

        <div className={styles.video_card}>
          <LiteYouTubeEmbed
            id="ep9j7YaTfMg"
            title="How does Exercise Impact Weight Loss"
          />
          <h3 className={styles.video_article_title}>
            How does Exercise Impact Weight Loss
          </h3>
        </div>
      </div>
    </section>
  );
};

export default HomeVideoArticles;
