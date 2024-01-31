'use client'

import React, { useEffect, useState } from 'react';
import styles from '../styles/components/Menu.module.scss';
import MenuItem from './MenuItem';

const Menu = ({menu, setId}) => {
  const [vis, setVis] = useState(true);
  const [width, setWidth] = useState(null);

  useEffect(()=>{
    if (width === null) setWidth(window.innerWidth)
    window.onresize = () => {setWidth(window.innerWidth)}
    width > 768? setVis(true) : setVis(false)
    return () => {window.onresize = false}
  }, [width])
  
  const setClick = () => {
    if(width <= 768) setVis(false)
  }
  
  return (
  <div className={styles.menu} onBlur={() => setVis(false)}>
    <div className={styles.menu__btn} onClick={() => setVis(!vis)}></div>
    {vis && 
      <div className={styles.menu__items}>
        {menu && menu.map(item => (
          <MenuItem key={item.id} item={item} setId={setId} setClick={setClick}/>
        ))}
      </div>
    }
  </div>
  );
};
export default Menu;