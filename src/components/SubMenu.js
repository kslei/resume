'use client'
import React, { useState, useEffect } from 'react';
import SubMenuItem from './SubMenuItem';
import styles from '../styles/components/SubMenu.module.scss';

const SubMenu = ({menu, setId}) => {
  const [left, setLeft] = useState(0)
  const [width, setWidth] = useState(null);
  const [padding, setPadding] = useState(0)

  useEffect(() => {
    if (width === null) setWidth(window.innerWidth)
    window.onresize = () => { setWidth(window.innerWidth) }
    return () => { window.onresize = false }
  }, [width])

  if (menu.submenu.length!==0)
  setTimeout(()=>{
    if(width > 992) {
      setLeft(240)
      setPadding(276 + menu.id*64)
    } else {
      setLeft(68)
      setPadding(136 + menu.id * 64)
    }
  }, 10)
  const setClick = () => {
    setId(null)
  }

  return (
    <div id={menu.id} className={styles.submenu} style={{ left: left, paddingTop: padding }} onMouseEnter={e => setId(Number(e.target.id))} onMouseLeave={() => setId(null)}>
      {menu.submenu.map(item=>(
        <SubMenuItem key={item.id} id={menu.id} item={item} setId={setId} setClick={setClick}/>
      ))}
    </div>
  );
};
export default SubMenu;