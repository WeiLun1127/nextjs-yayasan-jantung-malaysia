import React from 'react';
import {
  FaRunning,
  FaAppleAlt,
  FaDumbbell,
  FaUserFriends,
  FaWater,
  FaUtensils,
  FaBicycle,
} from 'react-icons/fa';
import styles from './styles.module.css';

const StepsToBetterHealth = () => {
  return (
    <div>
      <h1 className={styles.title}>Steps to Better Health</h1>
      <p className={styles.description}>
        Eating less and/or exercising more? Easier said than done, right? Well,
        you can start by making small changes to your eating and exercise
        habits. There must be dozens of ways to get into shape.
        <br />
        <br />
        Here are 18 pointers to get you going:
      </p>

      {/* Card for each point */}
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaRunning className={styles.icon} /> START NOW!
          </h2>
          <p className={styles.cardDescription}>
            For about a week, record everything you eat, how much, when and
            where, what you were doing when you ate, whom you were with, and
            your mood. Then analyze your record. If you see any bad habits,
            start changing them.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaBicycle className={styles.icon} /> GET MOVING
          </h2>
          <p className={styles.cardDescription}>
            Make time to exercise for at least 3 times a week for a minimum of
            15-30 minutes each time.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaAppleAlt className={styles.icon} /> LOSE WISELY
          </h2>
          <p className={styles.cardDescription}>
            A weight loss of ½ to 1 kg a week is safe. Anything more is not
            advisable. To lose about ½ kg a week, eat 250 calories less per day
            and burn off 250 calories more in exercises.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaDumbbell className={styles.icon} /> PARTICIPATE
          </h2>
          <p className={styles.cardDescription}>
            Join after-work exercise classes or school sports. It's more fun to
            exercise with family or friends.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaRunning className={styles.icon} /> EXERCISE REGULARLY
          </h2>
          <p className={styles.cardDescription}>
            Make it a part of your daily routine! Take the stairs instead of the
            lift whenever you can.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaUserFriends className={styles.icon} /> WEIGH YOURSELF MONTHLY
          </h2>
          <p className={styles.cardDescription}>
            Your weight changes daily, so weigh yourself only once a month and
            at the same time of the day.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaRunning className={styles.icon} /> BE ACTIVE
          </h2>
          <p className={styles.cardDescription}>
            Don't just sit around! Take a walk, jog, swim, or cycle. For a
            change, try dancing or doing calisthenics in time to music.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaAppleAlt className={styles.icon} /> EAT RIGHT!
          </h2>
          <p className={styles.cardDescription}>
            Cut down on sweets, fats, and salt. Eat more fruits, vegetables, and
            whole grains.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaUtensils className={styles.icon} /> AVOID CRASH DIETS!
          </h2>
          <p className={styles.cardDescription}>
            Fat diets and diet pills are not recommended for weight loss. In
            fact, quick weight loss is due to loss of water and muscle, not fat.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaRunning className={styles.icon} /> MINIMIZE THE MUNCHIES
          </h2>
          <p className={styles.cardDescription}>
            Watch out for those bags of chips. You could devour a whole bag in
            front of the TV or whilst reading without knowing.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaWater className={styles.icon} /> REMOVE TEMPTATION
          </h2>
          <p className={styles.cardDescription}>
            Get rid of food from your office and bedroom. Store everything you
            eat in the kitchen only.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaWater className={styles.icon} /> EAT, DRINK, AND BE HEALTHY
          </h2>
          <p className={styles.cardDescription}>
            Water is an essential liquid. You need about 8 glasses daily.
            Drinking a glass before you eat will help make you feel fuller, and
            you may eat less.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaUtensils className={styles.icon} /> ENTERTAIN BUT DON'T BE PLAIN
          </h2>
          <p className={styles.cardDescription}>
            Prepare tasty, nutritious, and low-calorie snacks in place of salty,
            greasy, and sweet ones. Serve pure fruit juices or soda water.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaRunning className={styles.icon} /> EAT LESS, EXERCISE MORE
          </h2>
          <p className={styles.cardDescription}>
            No single food is fattening, but too much of anything can be. Burn
            off extra calories by exercising. Myth: Exercise won't increase your
            appetite.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaAppleAlt className={styles.icon} /> DIETER'S DELIGHT
          </h2>
          <p className={styles.cardDescription}>
            Don't give up all your favourite foods. Simply eat less than you
            usually do. Have two slices of kuih lapis instead of three and cut
            your cake into eight slices instead of six.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaDumbbell className={styles.icon} /> SKIM THE FAT FROM YOUR FOOD
          </h2>
          <p className={styles.cardDescription}>
            Choose foods that have been broiled, baked, or steamed instead of
            fried. A baked potato has 80 calories, while a packet of French
            fries has over 200. Replace full cream milk with low-fat milk as a
            drink or creamer for your favourite beverages.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaAppleAlt className={styles.icon} /> TASTE AND ENJOY FOOD!
          </h2>
          <p className={styles.cardDescription}>
            Chew your food slowly and enjoy every bite. Take smaller servings.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FaUserFriends className={styles.icon} /> PICK THE WINNING
            COMBINATION
          </h2>
          <p className={styles.cardDescription}>
            Choose a variety of wholesome foods and keep active.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepsToBetterHealth;
