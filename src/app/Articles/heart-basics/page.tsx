import { FaHeartbeat, FaFileMedicalAlt, FaStethoscope, FaChartLine, FaPlus, FaBrain, FaCrosshairs, FaExternalLinkAlt, FaFlask, FaHospitalAlt, FaShieldAlt } from 'react-icons/fa';
import styles from './styles.module.css';

const HeartBasics = () => {
  return (
    <div>
      <h1 className={styles.title}>Heart Basics</h1>

      <div className={styles.cardContainer}>
        {/* Card for Heart Attack */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaHeartbeat className={styles.icon} />
          </div>
          <h2 className={styles.subtitle}>What is heart attack?</h2>
          <p className={styles.description}>
            Heart attacks result from blood vessel disease in the heart. Coronary
            heart disease (CHD), sometimes referred to as coronary artery disease
            (CAD), are general names for heart attack (and angina).
            <br />
            <br />
            A heart attack, or myocardial infarction, occurs when the blood supply
            to part of the heart muscle itself (the myocardium) is severely reduced
            or stopped. This occurs when one of the coronary arteries (the arteries
            that supply blood to the heart muscle) is blocked by an obstruction,
            such as a blood clot that has formed on plaque due to atherosclerosis.
            Such an event is sometimes called a coronary thrombosis or coronary
            occlusion.
          </p>
        </div>

        {/* Card for Angina */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaFileMedicalAlt className={styles.icon} />
          </div>
          <h2 className={styles.subtitle}>What is angina?</h2>
          <p className={styles.description}>
            Chest pain called angina pectoris is another result of coronary artery
            disease. Angina is a symptom of a condition called myocardial schema,
            which occurs when the heart muscle (myocardium) doesn't get as much
            blood (hence as much oxygen) as it needs for a given level of work. Lack
            of blood supply is called ischemia.
          </p>
        </div>

        {/* Card for Silent Ischemia */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaStethoscope className={styles.icon} />
          </div>
          <h2 className={styles.subtitle}>What is silent ischemia?</h2>
          <p className={styles.description}>
            Some people have ischemia, which means not enough blood flows to a part
            of the body's tissue. This occurs when spasm or disease narrows the
            arteries bringing blood to the heart. As many as three to four million
            Americans may have ischemia episodes without knowing it. These people
            have silent ischemia. They may have a heart attack with no prior
            warning.
          </p>
        </div>

        {/* Card for Collateral Circulation */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaChartLine className={styles.icon} />
          </div>
          <h2 className={styles.subtitle}>What is the heart's collateral circulation?</h2>
          <p className={styles.description}>
            Collateral circulation involves small arteries that connect two larger
            coronary arteries of different segments of the same artery. They provide
            an alternate route for blood flow to the heart muscle. Everyone has
            collateral vessels, at least in microscopic form. These vessels aren't
            open under normal conditions but grow and enlarge in some people with
            coronary heart disease. When a collateral vessel enlarges, it lets blood
            flow from an open artery to either adjacent artery or further downstream
            on the same artery. Myocardial ischemia stimulates the growth of
            collateral vessels, so they can form a kind of "detour" around a blockage
            and provide alternate routes of blood flow.
            <br />
            <br />
            Research has shown that while everyone has collateral vessels, they
            don't open and become available in all people. People who have open
            collateral vessels can benefit, because collateral vessels help protect
            heart muscle from tissue death if the normal blood supply is cut off.
          </p>
        </div>

        {/* Card for Arrhythmias */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaHeartbeat className={styles.icon} />
          </div>
          <h2 className={styles.subtitle}>What are arrhythmias?</h2>
          <p className={styles.description}>
            Normal cardiac rhythm results from electrical impulses that start in the
            sinoatrial (SA or sinus) node. They spread in a timely way through the
            atria to the atrioventricular (AV) node. From there each impulse travels
            over the many specialized fibers of the His-Purkinje system, distributing
            the electrical "ignition signal" to the ventricular muscle cells.
            <br />
            <br />
            The transmission of impulses is delayed a fraction within the AV node.
            This allows time for the atrial contraction that helps fill the ventricles
            with blood.
            <br />
            <br />
            The term arrhythmias refers to any change from this normal sequence of
            beginning and conducting impulses. Some arrhythmias are so brief (for
            example, a temporary pause or premature beat) that the overall heart rate
            isn't greatly affected. However, if arrhythmias last for some time, they
            may cause the heart rate to be too slow or too fast.
          </p>
        </div>

        {/* Card for Sudden Cardiac Death */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaPlus className={styles.icon} />
          </div>
          <h2 className={styles.subtitle}>What is sudden cardiac death (SCD)?</h2>
          <p className={styles.description}>
            It's the sudden, abrupt loss of heart function (i.e., cardiac arrest) in
            a person who may or may not have diagnosed heart disease, but in whom
            the time and mode of death occur unexpectedly. The unexpected nature of
            the event is the key point in the definition.
          </p>
        </div>

        {/* Card for Stroke */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaBrain className={styles.icon} />
          </div>
          <h2 className={styles.subtitle}>What is a stroke?</h2>
          <p className={styles.description}>
            Stroke is a form of cardiovascular disease that affects the arteries of
            the central nervous system. A stroke (or "brain attack") occurs when a
            blood vessel bringing oxygen and nutrients to the brain bursts or is
            clogged by a blood clot or some other particle. Because of this rupture
            or blockage, part of the brain doesn't get the flow of blood it needs.
            Deprived of oxygen, nerve cells in the affected area of the brain can't
            function and die within minutes. And when nerve cells can't function,
            the part of the body controlled by these cells can't function either.
            The devastating effects of stroke are often permanent because dead brain
            cells aren't replaced.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaShieldAlt className={styles.icon} />
          </div>
          <h2 className={styles.subtitle}>What is rheumatic heart disease?</h2>
          <p className={styles.description}>
            Rheumatic heart disease is a condition in which the heart valves are
            damaged by a disease process that begins with a strep throat
            (streptococcal infection). If it's not treated, the streptoccocal
            infection can develop into acute rheumatic fever. Rheumatic fever is an
            inflammatory disease that can affect many connective tissues of the
            body, especially those of the heart, the joints, the brain or the skin.
            When rheumatic fever permanently damages the heart, the damage is called
            rheumatic heart disease.
            <br />
            <br />
            People of all ages can develop acute rheumatic fever, but it usually
            occurs in children 5 years to 15 years old. The resulting rheumatic
            heart disease can last for life.
          </p>
        </div>

        {/* Card for Congestive Heart Failure */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaHospitalAlt className={styles.icon} />
          </div>
          <h2 className={styles.subtitle}>What is congestive heart failure?</h2>
          <p className={styles.description}>
            Congestive heart failure is a condition that occurs because the heart
            muscle is damaged or overworked. This damage can result from high blood
            pressure, a heart attack, atherosclerosis, a congenital heart defect,
            heart muscle disease (called cardiomyopathy), rheumatic fever or high
            blood pressure in the lungs resulting from lung disease. Because it's
            damaged, the heart lacks the strength to keep blood circulating normally
            throughout the body. The "failing" heart keeps working but doesn't work
            as efficiently as it should.
          </p>
        </div>

        {/* Card for Kawasaki Disease */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaCrosshairs className={styles.icon} />
          </div>
          <h2 className={styles.subtitle}>What is Kawasaki Disease?</h2>
          <p className={styles.description}>
            Kawasaki disease (also known as Kawasaki syndrome or mucocutaneous lymph
            node syndrome) is a children's illness. It tends to strike most often
            under the age of 8. Boys are almost twice as likely to get it as girls;
            the disease also tends to appear more often among those of Asian
            ancestry.
            <br />
            <br />
            Fever, rash, swollen hands and feet, redness of the whites of the eyes,
            swollen lymph glands in the neck, and irritation and inflammation of the
            mouth, lips and throat all characterize Kawasaki disease.
          </p>
        </div>

        {/* Card for Bacterial Endocarditis */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaFlask className={styles.icon} />
          </div>
          <h2 className={styles.subtitle}>What is bacterial endocarditis?</h2>
          <p className={styles.description}>
            Bacterial endocarditis is a serious infection of the heart valves or the
            tissues lining the heart. It rarely occurs but is a real threat to
            people with structural abnormalities of heart, artificial (prosthetic)
            heart valves or people with rheumatic or other acquired heart valve
            dysfunction. Also, people who've previously had bacterial endocarditis
            are at risk for getting it again, even when they don't have heart
            disease.
          </p>
        </div>

        {/* Card for Excerpts */}
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FaExternalLinkAlt className={styles.icon} />
          </div>
          <h2 className={styles.subtitle}>Excerpts and Additional Information</h2>
          <p className={styles.description}>
            For more detailed information, visit authoritative health sources
            or consult with a cardiologist for professional advice and treatment
            regarding heart conditions.
          </p>
        </div>

      </div>
    </div>
  );
};

export default HeartBasics;
