import React from 'react';
import styles from '@/styles/pages/Pages.module.scss';
import '../globals.scss';

const About = () => {
  
  return (
  <main>
    <div className='left' style={{width: '100%'}}>
      <div className='content'>
        <h1>About Me</h1>
        <h2 id='ancor1'>Personal details</h2>
          <div className={styles.data}>
            <div className={styles.data__title}>Surname, first name:</div>
            <div className={styles.data__description}>Kulchitskyi Sergei</div>
          </div>
          <div className={styles.data}>
            <div className={styles.data__title}>Age:</div>
            <div className={styles.data__description}>51</div>
          </div>
          <div className={styles.data}>
            <div className={styles.data__title}>Residence:</div>
            <div className={styles.data__description}>Zaporizhzhia city</div>
          </div>
        <h2 id='ancor2'>Contact info</h2>
          <div className={styles.data}>
            <div className={styles.data__title}>Phone:</div>
            <div className={styles.data__description}>
              <a href='tel:+380688632760' style={{ textDecoration: 'underline'}}>+380688632760</a>
            </div>
          </div>
          <div className={styles.data}>
            <div className={styles.data__title}>Email:</div>
            <div className={styles.data__description}>
              <a href='mailto:koolchitsky@gmail.com' style={{ textDecoration: 'underline' }}>koolchitsky@gmail.com</a>
            </div>
          </div>
          <div className={styles.data}>
            <div className={styles.data__title}>Viber:</div>
            <div className={styles.data__description}>
              <a href='viber://chat?number=%2B380688632760' style={{ textDecoration: 'underline' }}>+380688632760</a>
            </div>
          </div>
        <h2 id='ancor3'>What I want to be</h2>
          <div className={styles.data}>
            <div className={styles.data__description} style={{width: '100%'}}>Frontend developer (remote work format)</div>
          </div>
          <div className={styles.data}>
            <div className={styles.data__title}>Possible variations:</div>
            <div className={styles.data__description}>HTML layout engineer with the possibility of further growth</div>
          </div>
          <div className={styles.data}>
            <div className={styles.data__title}>and also:</div>
            <div className={styles.data__description}>React - developer, JS - developer</div>
          </div>
        <h2 id='ancor4'>Work experience</h2>
          <div className={styles.data}>
            <div className={styles.data__description} style={{ width: '100%' }}>No commercial work experience</div>
          </div>
          <div className={styles.data}>
            <div className={styles.data__title}>Previous employment:</div>
            <div className={styles.data__description}>Telecommunications and information protection in the public sector: 23 years</div>
          </div>
      </div>
      
    </div>
    
  </main>
  );
};
export default About;