'use client'

import React, { useState } from 'react';
import LoadAnimate from '@/components/LoadAnimate';
import styles from '@/styles/pages/Pages.module.scss';
import '../globals.scss';

async function fetchFile () {
  const response = await fetch('https://newshops.ksl-ei.pp.ua/api/file')
  const res = await response.blob()
  return res
} 

const Page = () => {
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const fileName = 'newshop'

  const downloadFile = () => {
    setMessage('Loading')
    fetchFile().then(res => {
      let link = document.createElement("a");
      link.href = window.URL.createObjectURL(res);
      link.download = fileName;
      link.click();
      setMessage('')
    }).catch(e => {
      setError(e.message);
      setMessage('')
    })
  }

  return (
    <main>
      <div className='left' style={{ width: '100%' }}>
        <div className='content'>
          <h1>Download page</h1>
          <div className={styles.data__description} style={{width: '100%'}}>You can download the .apk file of newshop website mobile app for android</div>
          <div className={styles.data}>
            <button className={styles.button} onClick={() => downloadFile()}>Download</button>
            {message&& 
              <LoadAnimate message={message} />
            }
          </div>
          {error && <div className={styles.data} style={{flexDirection: 'row-reverse'}}>
            <div className={styles.data__title}>
              <button className={styles.button} onClick={() => setError('')}>Reset</button>
            </div>
            <div className={styles.data__description}>{error}</div>
          </div>}
        </div>
      </div>
    </main>
  );
};
export default Page;