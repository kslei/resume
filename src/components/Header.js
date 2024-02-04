'use client'

import { Pacifico } from 'next/font/google';
import Menu from './Menu';
import SubMenu from './SubMenu';
import Image from 'next/image';
import { useState } from 'react';
import { menu } from '@/consts/const';
import Link from 'next/link';
import styles from '../styles/components/Header.module.scss';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['cyrillic'],
  size: '24px',
})

const Header = () => {
  const [id, setId] = useState(null)
    
  return (
  <div className={styles.header} >
    <div className={styles.hello}>
      <p className={pacifico.className}>Hello</p>
    </div>
    <div className={styles.nav}>
      <Link href='/' className={styles.nav__link}>
        <div className={styles.nav__image}>
          <Image
            className={styles.nav__img}
            fill
            src='/Me.jpg'
            alt='my photo'
            priority={true}
          />
        </div>
        
        <div className={styles.myName}>
          <p className={pacifico.className}>I'm Sergei</p>
        </div>
      </Link>
      
      <div className={styles.nav__menu}>
        <Menu menu={menu} setId={setId}/>
      </div>
    </div>
    {id && menu.filter(item=>item.id===id)[0].submenu.length!==0 &&
      <SubMenu menu={menu.filter((item) => item.id === id)[0]} setId={setId}/>      
    }
  </div>
  );
};
export default Header;