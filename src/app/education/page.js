import styles from '@/styles/pages/Pages.module.scss';
import '../globals.scss';

const Education = () => {

  return (
    <main>
      <div className='left' style={{ width: '100%' }}>
        <div className='content'>
          <h1>Education</h1>
          <h2 id='ancor1'>University education</h2>
          <div className={styles.data}>
            <div className={styles.data__title}>Name of the educational institution:</div>
            <div className={styles.data__description}>Zaporizhzhya Industrial Institute</div>
          </div>
          <div className={styles.data}>
            <div className={styles.data__title}>Specialty</div>
            <div className={styles.data__description}>Industrial electronics</div>
          </div>
          <div className={styles.data}>
            <div className={styles.data__title}>Educational level:</div>
            <div className={styles.data__description}>Higher education, electronic engineer</div>
          </div>
          <div className={styles.data}>
            <div className={styles.data__title}>Years of study:</div>
            <div className={styles.data__description}>1989 - 1994</div>
          </div> 
          <h2 id='ancor2'>Additional education</h2>
          <div className={styles.data}>
            <div className={styles.data__title}>Name of the educational institution:</div>
            <div className={styles.data__description}>Brain academy, Zaporizhzhya</div>
          </div>
          <div className={styles.data}>
            <div className={styles.data__title}>Specialty</div>
            <div className={styles.data__description}>Frontend developer</div>
          </div>
          <div className={styles.data}>
            <div className={styles.data__title}>Educational level:</div>
            <div className={styles.data__description}>Additional education courses</div>
          </div>
          <div className={styles.data}>
            <div className={styles.data__title}>Years of study:</div>
            <div className={styles.data__description}>2020 - 2021</div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Education;