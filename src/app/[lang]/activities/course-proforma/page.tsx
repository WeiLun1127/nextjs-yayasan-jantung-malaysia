import { getDictionary } from '@/dictionaries';
import { Locale } from '@/i18n-config';
import {
  FaAward,
  FaBook,
  FaBullhorn,
  FaCheck,
  FaClipboardList,
  FaHeart,
  FaUserMd,
} from 'react-icons/fa';
import styles from './styles.module.css';

const CoursePerforma = async (props: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await props.params;
  const dictionaries = await getDictionary(lang);

  return (
    <div>
      <h1 className={styles.title}>
        {dictionaries['course-proforma']['title']}
      </h1>

      {/* Use div or section instead of p to avoid hydration error */}
      <div className={styles.description}>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <FaBook className={styles.icon} />
              {dictionaries['course-proforma']['background']}
            </h2>
            <ul>
              <li>
                <FaCheck className={styles.tickIcon} />
                {dictionaries['course-proforma']['background-one']}
              </li>
              <li>
                <FaCheck className={styles.tickIcon} />
                {dictionaries['course-proforma']['background-two']}
              </li>
              <li>
                <FaCheck className={styles.tickIcon} />
                {dictionaries['course-proforma']['background-three']}
              </li>
            </ul>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <FaBullhorn className={styles.icon} />
              {dictionaries['course-proforma']['aim-of-the-course']}
            </h2>
            <ul>
              <li>
                <FaCheck className={styles.tickIcon} />
                {dictionaries['course-proforma']['aim-of-the-course-one']}
              </li>
            </ul>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <FaUserMd className={styles.icon} />
              {dictionaries['course-proforma']['training-strategies']}
            </h2>
            <ul>
              <li>
                <FaCheck className={styles.tickIcon} />
                {dictionaries['course-proforma']['training-strategies-one']}
              </li>
            </ul>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <FaClipboardList className={styles.icon} />
              {dictionaries['course-proforma']['trainers']}
            </h2>
            <ul>
              <li>
                <FaCheck className={styles.tickIcon} />
                {dictionaries['course-proforma']['trainers-one']}
              </li>
            </ul>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <FaClipboardList className={styles.icon} />
              {dictionaries['course-proforma']['assessment']}
            </h2>
            <ul>
              <li>
                <FaCheck className={styles.tickIcon} />
                {dictionaries['course-proforma']['assessment-one']}
              </li>
            </ul>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <FaClipboardList className={styles.icon} />
              {dictionaries['course-proforma']['examiners']}
            </h2>
            <ul>
              <li>
                <FaCheck className={styles.tickIcon} />
                {dictionaries['course-proforma']['examiners-one']}
              </li>
            </ul>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <FaAward className={styles.icon} />
              {dictionaries['course-proforma']['award']}
            </h2>
            <ul>
              <li>
                <FaCheck className={styles.tickIcon} />
                {dictionaries['course-proforma']['award-one']}
              </li>
            </ul>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <FaHeart className={styles.icon} />
              {dictionaries['course-proforma']['programme']}
            </h2>
            <ul>
              <li>
                <FaCheck className={styles.tickIcon} />
                {dictionaries['course-proforma']['programme-one']}
              </li>
              <li>
                <FaCheck className={styles.tickIcon} />
                {dictionaries['course-proforma']['programme-two']}
              </li>
              <li>
                <FaCheck className={styles.tickIcon} />
                {dictionaries['course-proforma']['programme-three']}
              </li>
              <li>
                <FaCheck className={styles.tickIcon} />
                {dictionaries['course-proforma']['programme-four']}
              </li>
              <li>
                <FaCheck className={styles.tickIcon} />
                {dictionaries['course-proforma']['programme-five']}
              </li>
              <li>
                <FaCheck className={styles.tickIcon} />
                {dictionaries['course-proforma']['programme-six']}
              </li>
              <li>
                <FaCheck className={styles.tickIcon} />
                {dictionaries['course-proforma']['programme-seven']}
              </li>
              <li>
                <FaCheck className={styles.tickIcon} />
                {dictionaries['course-proforma']['programme-eight']}
              </li>
              <li>
                <FaCheck className={styles.tickIcon} />
                {dictionaries['course-proforma']['programme-nine']}
              </li>
              <li>
                <FaCheck className={styles.tickIcon} />
                {dictionaries['course-proforma']['programme-ten']}
              </li>
              <li>
                <FaCheck className={styles.tickIcon} />
                {dictionaries['course-proforma']['programme-eleven']}
              </li>
              <li>
                <FaCheck className={styles.tickIcon} />
                {dictionaries['course-proforma']['programme-twelve']}
              </li>
              <li>
                <FaCheck className={styles.tickIcon} />
                {dictionaries['course-proforma']['programme-thirteen']}
              </li>
              <li>
                <FaCheck className={styles.tickIcon} />
                {dictionaries['course-proforma']['programme-fourteen']}
              </li>
              <li>
                <FaCheck className={styles.tickIcon} />
                {dictionaries['course-proforma']['programme-fifteen']}
              </li>
              <li>
                <FaCheck className={styles.tickIcon} />
                {dictionaries['course-proforma']['programme-sixteen']}
              </li>
              <li>
                <FaCheck className={styles.tickIcon} />
                {dictionaries['course-proforma']['programme-seventeen']}
              </li>
              <li>
                <FaCheck className={styles.tickIcon} />
                {dictionaries['course-proforma']['programme-eighteen']}
              </li>
              <li>
                <FaCheck className={styles.tickIcon} />
                {dictionaries['course-proforma']['programme-nineteen']}
              </li>
              <li>
                <FaCheck className={styles.tickIcon} />
                {dictionaries['course-proforma']['programme-twenty']}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePerforma;
