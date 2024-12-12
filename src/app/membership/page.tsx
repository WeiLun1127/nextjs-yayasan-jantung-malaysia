import styles from './styles.module.css';

const AboutYJM = () => {
  return (
    <div>
      <h1 className={styles.title}>Membership</h1>

       {/* Add the image here */}
       <div className={styles.imageContainer}>
       <a href="http://www.yjm.org.my/view_file.cfm?fileid=4" target="_blank" rel="noopener noreferrer">
        <img 
            src="/images/membership/membership-form.jpg" 
            alt="Membership" 
            className={styles.membershipImage} 
          />
        </a>
      </div>

      <p className={styles.description}>
        <b>Membership Form:</b> PDF
      </p>
    </div>
  );
};

export default AboutYJM;
