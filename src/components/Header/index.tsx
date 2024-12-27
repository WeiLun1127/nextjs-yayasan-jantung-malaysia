import Image from 'next/image';
import Link from 'next/link';
import {
  FaAmbulance,
  FaBook,
  FaBuilding,
  FaBullseye,
  FaCalendarAlt,
  FaCalendarDay,
  FaDonate,
  FaDumbbell,
  FaExclamationCircle,
  FaFileAlt,
  FaFlask,
  FaHandshake,
  FaHandsHelping,
  FaHeart,
  FaHeartbeat,
  FaHeartBroken,
  FaHome,
  FaIdCard,
  FaImage,
  FaInfoCircle,
  FaLightbulb,
  FaLink,
  FaNewspaper,
  FaPhone,
  FaRandom,
  FaRunning,
  FaSitemap,
  FaSmokingBan,
  FaStethoscope,
  FaTint,
  FaUserFriends,
  FaUsers,
} from 'react-icons/fa';
import LanguageSelector from '../LanguageSelector';
import styles from './styles.module.css';

interface HeaderProps {
  dictionaries: Dict.Dictionaries;
}

const Header = ({ dictionaries }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <LanguageSelector />

      <Link href="/">
        <picture className={styles.logo}>
          <Image fill alt="logo" src="/images/logo.png" sizes="602px" />
        </picture>
      </Link>

      <nav className={styles.nav}>
        <div className={styles.dropdown}>
          <Link href="/about-yjm">
            <FaInfoCircle /> {dictionaries['header-navbar']['About YJM']}
          </Link>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link href="/patron">
                <FaUsers />{' '}
                {dictionaries['header-navbar']['Patron & Board of Directories']}
              </Link>
            </li>
            <li>
              <Link href="/supporting-staff">
                <FaUserFriends />{' '}
                {dictionaries['header-navbar']['Supporting Staff']}
              </Link>
            </li>
            <li>
              <Link href="/our-aspiration">
                <FaBullseye /> {dictionaries['header-navbar']['Our Aspiration']}
              </Link>
            </li>
            <li>
              <Link href="/our-future">
                <FaCalendarAlt /> {dictionaries['header-navbar']['Our Future']}
              </Link>
            </li>
            <li>
              <Link href="/our-activities">
                <FaRunning /> {dictionaries['header-navbar']['Our Activities']}
              </Link>
            </li>
            <li>
              <Link href="/promoting-health">
                <FaHeartbeat />{' '}
                {dictionaries['header-navbar']['Promoting Health']}
              </Link>
            </li>
            <li>
              <Link href="/research">
                <FaFlask />{' '}
                {
                  dictionaries['header-navbar'][
                    'Research - The Heart of A Revolution'
                  ]
                }
              </Link>
            </li>
            <li>
              <Link href="/cpr">
                <FaAmbulance />{' '}
                {
                  dictionaries['header-navbar'][
                    'CPR (Cardio Pulmonary Resuscitation)'
                  ]
                }
              </Link>
            </li>
            <li>
              <Link href="/friends-of-the-foundation">
                <FaHandshake />{' '}
                {dictionaries['header-navbar']['Friends of the Foundation']}
              </Link>
            </li>
            <li>
              <Link href="/how-you-can-help">
                <FaHandsHelping />{' '}
                {dictionaries['header-navbar']['How You Can Help']}
              </Link>
            </li>
            <li>
              <Link href="/you-can-make-a-difference">
                <FaLightbulb />{' '}
                {dictionaries['header-navbar']['You Can Make A Difference']}
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.dropdown}>
          <a>
            <FaBuilding /> {dictionaries['header-navbar']['Facilities']}
          </a>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link href="/hall-rental">
                <FaBuilding /> {dictionaries['header-navbar']['Hall Rental']}
              </Link>
            </li>
            <li>
              <Link href="/halfway-house">
                <FaHome /> {dictionaries['header-navbar']['Halway House']}
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.dropdown}>
          <Link href="/articles/how-does-human-heart-works">
            <FaStethoscope /> {dictionaries['header-navbar']['Health Articles']}
          </Link>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link href="/articles/how-does-human-heart-works">
                <FaHeart />{' '}
                {
                  dictionaries['header-navbar'][
                    'How Does the Human Heart Work?'
                  ]
                }
              </Link>
            </li>
            <li>
              <Link href="/articles/four-ways-to-prevent-heart-attack">
                <FaExclamationCircle />{' '}
                {
                  dictionaries['header-navbar'][
                    'Four Ways to Prevent Heart Attack'
                  ]
                }
              </Link>
            </li>
            <li>
              <Link href="/articles/heart-disease">
                <FaHeartBroken />{' '}
                {dictionaries['header-navbar']['Heart Disease Warning']}
              </Link>
            </li>
            <li>
              <Link href="/articles/how-does-exercise-impact-weight-loss">
                <FaDumbbell />{' '}
                {
                  dictionaries['header-navbar'][
                    'How Does Exercise Impact Weight Loss'
                  ]
                }
              </Link>
            </li>
            <li>
              <Link href="/articles/heart-basics">
                <FaBook /> {dictionaries['header-navbar']['Heart Basics']}
              </Link>
            </li>
            <li>
              <Link href="/articles/steps-to-better-health">
                <FaRunning />{' '}
                {dictionaries['header-navbar']['Steps to Better Health']}
              </Link>
            </li>
            <li>
              <Link href="/articles/tobacco-and-your-health">
                <FaSmokingBan />{' '}
                {dictionaries['header-navbar']['Tobacco and Your Health']}
              </Link>
            </li>
            <li>
              <Link href="/articles/heart-attack">
                <FaHeartBroken />{' '}
                {dictionaries['header-navbar']['Heart Attack']}
              </Link>
            </li>
            <li>
              <Link href="/articles/heart-disease">
                <FaHeart />{' '}
                {
                  dictionaries['header-navbar'][
                    'Heart Disease - Not somebody else business'
                  ]
                }
              </Link>
            </li>
            <li>
              <Link href="/articles/arrhythmias">
                <FaRandom />{' '}
                {
                  dictionaries['header-navbar'][
                    'Arrhythmias and Sudden Cardiac Death'
                  ]
                }
              </Link>
            </li>
            <li>
              <Link href="/articles/inherited-cholesterol">
                <FaSitemap />{' '}
                {
                  dictionaries['header-navbar'][
                    'Inherited Cholesterol Disorder'
                  ]
                }
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.dropdown}>
          <Link href="/calender">
            <FaCalendarAlt /> {dictionaries['header-navbar']['Activities']}
          </Link>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link href="/photo-gallery">
                <FaImage />{' '}
                {dictionaries['header-navbar']['Photo Gallery - Albums']}
              </Link>
            </li>
            <li>
              <Link href="/activities/cpr">
                <FaHeartbeat />{' '}
                {
                  dictionaries['header-navbar'][
                    'CPR (Cardio Pulmonary Resuscitation)'
                  ]
                }
              </Link>
            </li>
            <li>
              <Link href="/activities/course-proforma">
                <FaFileAlt />{' '}
                {dictionaries['header-navbar']['CPR - Course Performa']}
              </Link>
            </li>
            <li>
              <Link href="/activities/axa-hearts-in-action-run">
                <FaRunning />{' '}
                {dictionaries['header-navbar']['AXA Hearts in Action Run 2020']}
                A
              </Link>
            </li>
            <li>
              <Link href="/walk-a-million-miles">
                <FaRunning />{' '}
                {dictionaries['header-navbar']['Walk A Million Miles 2020']}
              </Link>
            </li>

            <li className={styles.worldHeartDay}>
              <Link href="/activities/world-heart-day/world-heart-day(default)">
                <FaCalendarDay />{' '}
                {dictionaries['header-navbar']['World Heart Day']}
              </Link>
              <ul className={styles.subDropdownMenu}>
                <li>
                  <Link href="/activities/world-heart-day/world-heart-day-2014">
                    <FaCalendarDay />{' '}
                    {dictionaries['header-navbar']['World Heart Day 2014']}
                  </Link>
                </li>
                <li>
                  <Link href="/activities/world-heart-day/world-heart-day-2013">
                    <FaCalendarDay />{' '}
                    {dictionaries['header-navbar']['World Heart Day 2013']}
                  </Link>
                </li>
                <li>
                  <Link href="/activities/world-heart-day/world-heart-day-2012">
                    <FaCalendarDay />{' '}
                    {dictionaries['header-navbar']['World Heart Day 2012']}
                  </Link>
                </li>
                <li>
                  <Link href="/activities/world-heart-day/world-heart-day-2011">
                    <FaCalendarDay />{' '}
                    {dictionaries['header-navbar']['World Heart Day 2011']}
                  </Link>
                </li>
                <li>
                  <Link href="/activities/world-heart-day/world-heart-day-2010">
                    <FaCalendarDay />{' '}
                    {dictionaries['header-navbar']['World Heart Day 2010']}
                  </Link>
                </li>
                <li>
                  <Link href="/activities/world-heart-day/world-heart-day-2009">
                    <FaCalendarDay />{' '}
                    {dictionaries['header-navbar']['World Heart Day 2009']}
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/activities/go-red-for-women">
                <FaTint /> {dictionaries['header-navbar']['Go Red For Women']}
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.dropdown}>
          <Link href="/bulletin">
            <FaNewspaper /> {dictionaries['header-navbar']['Bulletin']}
          </Link>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link href="/bulletin">
                <FaNewspaper />
                {dictionaries['header-navbar']['YJM News']}
              </Link>
            </li>
            <li>
              <Link href="/useful-links">
                <FaLink /> {dictionaries['header-navbar']['Useful Links']}
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.dropdown}>
          <Link href="/contact-us">
            <FaPhone /> {dictionaries['header-navbar']['Contact Us']}
          </Link>
          <ul className={styles.dropdownMenu}>
            <li>
              <Link href="/contact-us">
                <FaPhone /> {dictionaries['header-navbar']['Contact Us']}
              </Link>
            </li>
            <li>
              <Link href="/membership">
                <FaIdCard /> {dictionaries['header-navbar']['Membership']}
              </Link>
            </li>
            <li>
              <Link href="/donation">
                <FaDonate /> {dictionaries['header-navbar']['Donation']}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
