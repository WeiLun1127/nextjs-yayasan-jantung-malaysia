import styles from './styles.module.css';

const CoursePerforma = () => {
  return (
    <div>
      <h1 className={styles.title}> Course Proforma</h1>
      <p className={styles.description}>
        <ol>
          <li>
            <b>Background</b>
            <ul>
              <li>
                This course is named as the Basic Life Support Cardiopulmonary
                resuscitation (CPR).
              </li>
              <li>
                This certificate course is accredited and certified by the
                Yayasan Jantung Malaysia (The Heart Foundation of Malaysia).
              </li>
              <li>The target participants do not need any prerequisites.</li>
            </ul>
          </li>
          <li>
            <b>Aim of the Course</b>
            <ul>
              <li>
                To assess and manage an emergency life-threatening situation
                until medical aid arrives.
              </li>
            </ul>
          </li>
          <li>
            <b>Training Strategies</b>
            <ul>
              <li>
                Predominantly learner-centered and skills-based. These include
                knowledge, video presentations, skills, and assessments.
              </li>
            </ul>
          </li>
          <li>
            <b>Trainers</b>
            <ul>
              <li>
                Accredited and registered with The Heart Foundation of Malaysia.
              </li>
            </ul>
          </li>
          <li>
            <b>Assessment</b>
            <ul>
              <li>
                To be eligible for assessment, participants MUST attend a
                minimum of 85% of the sessions. Assessment will consist of a
                written paper (MCQ) and all skill stations as stated in the
                course syllabus.
              </li>
            </ul>
          </li>
          <li>
            <b>Examiners</b>
            <ul>
              <li>Appointed by The Heart Foundation of Malaysia.</li>
            </ul>
          </li>
          <li>
            <b>Award</b>
            <ul>
              <li>
                Participants who qualify in the assessments will be awarded with
                a CPR CERTIFICATE. This certificate is ONLY valid for TWO YEARS
                from the date of assessment. To renew, participants must undergo
                reassessment.
              </li>
            </ul>
          </li>
          <li>
            <b>Programme</b>
            <ul>
              <li>Why Should I Learn CPR?</li>
              <li>Chain of Survivor</li>
              <li>Normal Heart and Lung Anatomy and Function</li>
              <li>Coronary Artery Disease</li>
              <li>Risk Factors for Heart Attack</li>
              <li>Prudent Heart Living</li>
              <li>How to Recognise a Heart Attack</li>
              <li>Stroke; Warning Signs and Risk Factors</li>
              <li>Foreign Body Airway Obstruction (Choking)</li>
              <li>Video Presentation - CPR Techniques:</li>
              <li>Recovery Position</li>
              <li>One-Man Rescuer CPR (Adult)</li>
              <li>Airway Obstruction (Conscious Adult)</li>
              <li>Airway Obstruction (Unconscious Adult)</li>
              <li>CPR & Airway Obstruction in Child</li>
              <li>CPR & Airway Obstruction in Infant</li>
              <li>Skill Stations to Practice</li>
              <li>Theory Paper Test</li>
              <li>Skill Test</li>
              <li>Evaluation of Training</li>
            </ul>
          </li>
        </ol>
        <br />
        <br />
      </p>
    </div>
  );
};

export default CoursePerforma;
