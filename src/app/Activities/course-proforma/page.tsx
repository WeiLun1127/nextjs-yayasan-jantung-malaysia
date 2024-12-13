import { FaBook, FaBullhorn, FaUserMd, FaClipboardList, FaAward, FaHeart, FaCheck } from 'react-icons/fa';
import styles from './styles.module.css';

const CoursePerforma = () => {
  return (
    <div>
      <h1 className={styles.title}>Course Proforma</h1>

      {/* Use div or section instead of p to avoid hydration error */}
      <div className={styles.description}>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}><FaBook className={styles.icon} /> Background</h2>
            <ul>
              <li><FaCheck className={styles.tickIcon} /> This course is named as the Basic Life Support Cardiopulmonary resuscitation (CPR).</li>
              <li><FaCheck className={styles.tickIcon} /> This certificate course is accredited and certified by the Yayasan Jantung Malaysia (The Heart Foundation of Malaysia).</li>
              <li><FaCheck className={styles.tickIcon} /> The target participants do not need any prerequisites.</li>
            </ul>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}><FaBullhorn className={styles.icon} /> Aim of the Course</h2>
            <ul>
              <li><FaCheck className={styles.tickIcon} /> To assess and manage an emergency life-threatening situation until medical aid arrives.</li>
            </ul>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}><FaUserMd className={styles.icon} /> Training Strategies</h2>
            <ul>
              <li><FaCheck className={styles.tickIcon} /> Predominantly learner-centered and skills-based. These include knowledge, video presentations, skills, and assessments.</li>
            </ul>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}><FaClipboardList className={styles.icon} /> Trainers</h2>
            <ul>
              <li><FaCheck className={styles.tickIcon} /> Accredited and registered with The Heart Foundation of Malaysia.</li>
            </ul>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}><FaClipboardList className={styles.icon} /> Assessment</h2>
            <ul>
              <li><FaCheck className={styles.tickIcon} /> To be eligible for assessment, participants MUST attend a minimum of 85% of the sessions. Assessment will consist of a written paper (MCQ) and all skill stations as stated in the course syllabus.</li>
            </ul>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}><FaClipboardList className={styles.icon} /> Examiners</h2>
            <ul>
              <li><FaCheck className={styles.tickIcon} /> Appointed by The Heart Foundation of Malaysia.</li>
            </ul>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}><FaAward className={styles.icon} /> Award</h2>
            <ul>
              <li><FaCheck className={styles.tickIcon} /> Participants who qualify in the assessments will be awarded with a CPR CERTIFICATE. This certificate is ONLY valid for TWO YEARS from the date of assessment. To renew, participants must undergo reassessment.</li>
            </ul>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}><FaHeart className={styles.icon} /> Programme</h2>
            <ul>
              <li><FaCheck className={styles.tickIcon} /> Why Should I Learn CPR?</li>
              <li><FaCheck className={styles.tickIcon} /> Chain of Survivor</li>
              <li><FaCheck className={styles.tickIcon} /> Normal Heart and Lung Anatomy and Function</li>
              <li><FaCheck className={styles.tickIcon} /> Coronary Artery Disease</li>
              <li><FaCheck className={styles.tickIcon} /> Risk Factors for Heart Attack</li>
              <li><FaCheck className={styles.tickIcon} /> Prudent Heart Living</li>
              <li><FaCheck className={styles.tickIcon} /> How to Recognise a Heart Attack</li>
              <li><FaCheck className={styles.tickIcon} /> Stroke; Warning Signs and Risk Factors</li>
              <li><FaCheck className={styles.tickIcon} /> Foreign Body Airway Obstruction (Choking)</li>
              <li><FaCheck className={styles.tickIcon} /> Video Presentation - CPR Techniques</li>
              <li><FaCheck className={styles.tickIcon} /> Recovery Position</li>
              <li><FaCheck className={styles.tickIcon} /> One-Man Rescuer CPR (Adult)</li>
              <li><FaCheck className={styles.tickIcon} /> Airway Obstruction (Conscious Adult)</li>
              <li><FaCheck className={styles.tickIcon} /> Airway Obstruction (Unconscious Adult)</li>
              <li><FaCheck className={styles.tickIcon} /> CPR & Airway Obstruction in Child</li>
              <li><FaCheck className={styles.tickIcon} /> CPR & Airway Obstruction in Infant</li>
              <li><FaCheck className={styles.tickIcon} /> Skill Stations to Practice</li>
              <li><FaCheck className={styles.tickIcon} /> Theory Paper Test</li>
              <li><FaCheck className={styles.tickIcon} /> Skill Test</li>
              <li><FaCheck className={styles.tickIcon} /> Evaluation of Training</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePerforma;
