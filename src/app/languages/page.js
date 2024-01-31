import styles from '@/styles/pages/Pages.module.scss';
import '../globals.scss';

const Languages = () => {

  return (
    <main>
      <div className='left' style={{ width: '100%' }}>
        <div className='content'>
          <h1>Languages</h1>
          <h2>Russian</h2>
          <div className={styles.data}>
            <div className={styles.data__title}>Level:</div>
            <div className={styles.data__description}>Proficiency. Native language.</div>
          </div>
          <h2>Ukrainian</h2>
          <div className={styles.data}>
            <div className={styles.data__title}>Level:</div>
            <div className={styles.data__description}>Advanced. I can communicate in this language</div>
          </div>
          <h2>English</h2>
          <div className={styles.data}>
            <div className={styles.data__title}>Level:</div>
            <div className={styles.data__description}>Elementary. Started learning the language</div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Languages;