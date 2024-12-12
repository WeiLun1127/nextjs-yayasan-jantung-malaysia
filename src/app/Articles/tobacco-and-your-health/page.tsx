import { FaHeart, FaBan, FaSkullCrossbones, FaFire, FaUsers, FaRegSave } from 'react-icons/fa'; // Import the icons
import styles from './styles.module.css';

const TobbaccoAndYourHealth = () => {
  return (
    <div>
      <h1 className={styles.title}>Tobacco and Your Health</h1>
      <h2 className={styles.subtitle}>
        How important is tobacco to your country's health?
      </h2>
      <br />
      <p className={styles.description}>
        Tobacco use can kill up to half of all the people who use it, and half
        in middle age. This is a serious problem for any country, especially
        when there are many other health problems.
        <br />
        <br />
      </p>

      <div className={styles.card}>
        <FaHeart size={30} className={styles.icon} /> {/* Heart icon */}
        <h2 className={styles.subtitle}>Who can be hurt by tobacco?</h2>
        <br />
        <p className={styles.description}>
          Tobacco can kill the people who use it. It can also hurt the people who
          breathe in the smoke from other people's smoking.
          <br />
          <br />
        </p>
      </div>

      <div className={styles.card}>
        <FaSkullCrossbones size={30} className={styles.icon} /> {/* Skull and crossbones icon */}
        <h2 className={styles.subtitle}>How does smoking kill?</h2>
        <br />
        <p className={styles.description}>
          Tobacco smoke contains more than 4000 chemicals. Many of them are
          harmful and can cause cancer, cardiovascular disease, respiratory
          damage, and other problems. Tobacco that is chewed or sniffed also
          contains disease-causing components.
          <br />
          <br />
        </p>
      </div>

      <div className={styles.card}>
        <FaFire size={30} className={styles.icon} /> {/* Fire icon */}
        <h2 className={styles.subtitle}>How dangerous is it to start smoking?</h2>
        <br />
        <p className={styles.description}>
          Tobacco is addictive, which means that it is difficult to stop using it,
          even when one wants to stop. So it is very dangerous to start smoking.
          <br />
          <br />
        </p>
      </div>

      <div className={styles.card}>
        <FaUsers size={30} className={styles.icon} /> {/* Users icon */}
        <h2 className={styles.subtitle}>Why people use tobacco?</h2>
        <br />
        <p className={styles.description}>
          People use tobacco for many reasons. It can pleasurable, and help people
          to feel different. Tobacco transnationals use deception and propaganda
          to make people want to begin to smoke in spite of the danger.
          <br />
          <br />
        </p>
      </div>

      <div className={styles.card}>
        <FaBan size={30} className={styles.icon} /> {/* Ban icon */}
        <h2 className={styles.subtitle}>What can you do?</h2>
        <br />
        <p className={styles.description}>
          You can act to help people to stop smoking, to help people to remain
          non-smokers, to join together with others to change social attitudes and
          to press for tobacco control laws.
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default TobbaccoAndYourHealth;
