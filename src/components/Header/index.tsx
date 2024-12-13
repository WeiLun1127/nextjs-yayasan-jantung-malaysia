import Image from 'next/image';
import Link from 'next/link';
import {
  FaInfoCircle,
  FaUsers,
  FaUserFriends,
  FaBullseye,
  FaCalendarAlt,
  FaRunning,
  FaHeartbeat,
  FaFlask,
  FaAmbulance,
  FaHandshake,
  FaHandsHelping,
  FaLightbulb,
  FaBuilding,
  FaHome,
  FaStethoscope,
  FaHeart,
  FaExclamationCircle,
  FaDumbbell,
  FaBook,
  FaSmokingBan,
  FaHeartBroken,
  FaRandom,
  FaSitemap,
  FaCalendarDay,
  FaImage,
  FaFileAlt,
  FaTint,
  FaNewspaper,
  FaLink,
  FaPhone,
  FaIdCard,
  FaDonate,
} from 'react-icons/fa';
import styles from './styles.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <picture className={styles.logo}>
          <Image fill alt="logo" src="/images/logo.png" sizes="602px" />
        </picture>
      </Link>

      <nav className={styles.nav}>
        <div className={styles.dropdown}>
          <a href="/about-yjm">
            <FaInfoCircle /> About YJM
          </a>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link href="/patron">
                <FaUsers /> Patron & Board of Directory
              </Link>
            </li>
            <li>
              <Link href="/supporting-staff">
                <FaUserFriends /> Supporting Staff
              </Link>
            </li>
            <li>
              <Link href="/our-aspiration">
                <FaBullseye /> Our Aspiration
              </Link>
            </li>
            <li>
              <Link href="/our-future">
                <FaCalendarAlt /> Our Future
              </Link>
            </li>
            <li>
              <Link href="/our-activities">
                <FaRunning /> Our Activities
              </Link>
            </li>
            <li>
              <Link href="/promoting-health">
                <FaHeartbeat /> Promoting Health
              </Link>
            </li>
            <li>
              <Link href="/research">
                <FaFlask /> Research - The Heart of A Revolution
              </Link>
            </li>
            <li>
              <Link href="/cpr">
                <FaAmbulance /> CPR (Cardio Pulmonary Resuscitation)
              </Link>
            </li>
            <li>
              <Link href="/friends-of-the-foundation">
                <FaHandshake /> Friends of the Foundation
              </Link>
            </li>
            <li>
              <Link href="/how-you-can-help">
                <FaHandsHelping /> How You Can Help
              </Link>
            </li>
            <li>
              <Link href="/you-can-make-a-difference">
                <FaLightbulb /> You Can Make A Difference
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.dropdown}>
          <a>
            <FaBuilding /> Facilities
          </a>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link href="/hall-rental">
                <FaBuilding /> Hall Rental
              </Link>
            </li>
            <li>
              <Link href="/halfway-house">
                <FaHome /> Halway House
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.dropdown}>
          <a href="/Articles/how-does-human-heart-works">
            <FaStethoscope /> Health Articles
          </a>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link href="/Articles/how-does-human-heart-works">
                <FaHeart /> How Does the Human Heart Work?
              </Link>
            </li>
            <li>
              <Link href="/Articles/four-ways-to-prevent-heart-attack">
                <FaExclamationCircle /> Four Ways to Prevent Heart Attack
              </Link>
            </li>
            <li>
              <Link href="/Articles/heart-disease">
                <FaHeartBroken /> Heart Disease Warning
              </Link>
            </li>
            <li>
              <Link href="/Articles/how-does-exercise-impact-weight-loss">
                <FaDumbbell /> How Does Exercise Impact Weight Loss
              </Link>
            </li>
            <li>
              <Link href="/Articles/heart-basics">
                <FaBook /> Heart Basics
              </Link>
            </li>
            <li>
              <Link href="/Articles/steps-to-better-health">
                <FaRunning /> Steps to Better Health
              </Link>
            </li>
            <li>
              <Link href="/Articles/tobacco-and-your-health">
                <FaSmokingBan /> Tobacco and Your Health
              </Link>
            </li>
            <li>
              <Link href="/Articles/heart-attack">
                <FaHeartBroken /> Heart Attack
              </Link>
            </li>
            <li>
              <Link href="/Articles/heart-disease">
                <FaHeart /> Heart Disease - Not somebody else's business
              </Link>
            </li>
            <li>
              <Link href="/Articles/arrhythmias">
                <FaRandom /> Arrhythmias and Sudden Cardiac Death
              </Link>
            </li>
            <li>
              <Link href="/Articles/inherited-cholesterol">
                <FaSitemap /> Inherited Cholesterol Disorder
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.dropdown}>
          <a href="/calender">
            <FaCalendarAlt /> Activities
          </a>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link href="/photo-gallery">
                <FaImage /> Photo Gallery - Albums
              </Link>
            </li>
            <li>
              <Link href="/Activities/cpr">
                <FaHeartbeat /> CPR (Cardio Pulmonary Resuscitation)
              </Link>
            </li>
            <li>
              <Link href="/Activities/course-proforma">
                <FaFileAlt /> CPR - Course Performa
              </Link>
            </li>
            <li>
              <Link href="/Activities/axa-hearts-in-action-run">
                <FaRunning /> AXA Hearts in Action Run 2020
              </Link>
            </li>
            <li>
              <Link href="/walk-a-million-miles">
                <FaRunning /> Walk A Million Miles 2020
              </Link>
            </li>

            <li className={styles.worldHeartDay}>
              <Link href="/Activities/world-heart-day/world-heart-day(default)">
                <FaCalendarDay /> World Heart Day
              </Link>
              <ul className={styles.subDropdownMenu}>
                <li>
                  <Link href="/Activities/world-heart-day/world-heart-day-2014">
                    <FaCalendarDay /> World Heart Day 2014
                  </Link>
                </li>
                <li>
                  <Link href="/Activities/world-heart-day/world-heart-day-2013">
                    <FaCalendarDay /> World Heart Day 2013
                  </Link>
                </li>
                <li>
                  <Link href="/Activities/world-heart-day/world-heart-day-2012">
                    <FaCalendarDay /> World Heart Day 2012
                  </Link>
                </li>
                <li>
                  <Link href="/Activities/world-heart-day/world-heart-day-2011">
                    <FaCalendarDay /> World Heart Day 2011
                  </Link>
                </li>
                <li>
                  <Link href="/Activities/world-heart-day/world-heart-day-2010">
                    <FaCalendarDay /> World Heart Day 2010
                  </Link>
                </li>
                <li>
                  <Link href="/Activities/world-heart-day/world-heart-day-2009">
                    <FaCalendarDay /> World Heart Day 2009
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/Activities/go-red">
                <FaTint /> Go Red For Women
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.dropdown}>
          <a href="/bulletin">
            <FaNewspaper /> Bulletin
          </a>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link href="/bulletin">
                <FaNewspaper /> Berita YJM
              </Link>
            </li>
            <li>
              <Link href="/useful-links">
                <FaLink /> Useful Links
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.dropdown}>
          <a href="/contact-us">
            <FaPhone /> Contact Us
          </a>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link href="/contact-us">
                <FaPhone /> Contact Us
              </Link>
            </li>
            <li>
              <Link href="/membership">
                <FaIdCard /> Membership
              </Link>
            </li>
            <li>
              <Link href="/donation">
                <FaDonate /> Donation
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
