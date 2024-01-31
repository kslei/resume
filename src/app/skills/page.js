import { rightColumn } from '@/consts/const';
import SkillsItem from '@/components/SkillsItem';
import styles from '@/styles/pages/Pages.module.scss';
import '../globals.scss';

const Skills = () => {

  return (
    <main>
      <div className='left' style={{ width: '100%' }}>
        <div className='content'>
          <h1>Skills</h1>
          <h2 id='ancor1'>Knowledge</h2>
          <div className={styles.data}>
            <div className={styles.data__title}>My knowledge:</div>
            <div className={styles.data__description}>HTML, CSS, JS</div>
          </div>
          <div className={styles.data}>
            <div className={styles.data__title}>Preprocessors:</div>
            <div className={styles.data__description}>SASS/SCSS</div>
          </div>
          <div className={styles.data}>
            <div className={styles.data__title}>External interface toolkit:</div>
            <div className={styles.data__description}>Bootstrap</div>
          </div>
          <div className={styles.data}>
            <div className={styles.data__title}>Libraries:</div>
            <div className={styles.data__description}>React, Redux</div>
          </div>
          <div className={styles.data}>
            <div className={styles.data__title}>Internationalization-framework:</div>
            <div className={styles.data__description}>I18next</div>
          </div>
          <div className={styles.data}>
            <div className={styles.data__title}>Version control system:</div>
            <div className={styles.data__description}>Git</div>
          </div>
          <div className={styles.data}>
            <div className={styles.data__title}>I have an understanding:</div>
            <div className={styles.data__description}>Axios, nodeJs, Express, Sequelize</div>
          </div>
          <div className={styles.data}>
            <div className={styles.data__title}>and also:</div>
            <div className={styles.data__description}>Figma, Adobe Photoshop, Avocode</div>
          </div>

          <h2 id='ancor2'>Work samples</h2>
          <div className={styles.skills}>
            {rightColumn.map(item => (
              <SkillsItem key={item.id} item={item}/>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Skills;