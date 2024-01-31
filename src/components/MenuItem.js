
import React from 'react';
import SubMenuItem from './SubMenuItem';
import styles from '../styles/components/MenuItem.module.scss'
import { useRouter } from 'next/navigation';

const MenuItem = ({item, setId, setClick}) => {
  let style = {
    WebkitMaskImage: `url(${item.icon})`,
    maskImage: `url(${item.icon})`,
  }
  const router = useRouter()
  const click = (path) => {
    router.push(path)
    setClick()
  }

  return (
    <>
      <div id={item.id} 
        key={item.id} 
        className={styles.menuitem}
        onMouseEnter={e=>setId(Number(e.target.id))} 
        onMouseLeave={()=>setId(null)}
        onClick={()=>click(item.path)}
      >
        <div className={styles.menuitem__icon} style={style}></div>
        <div className={styles.menuitem__text}>{item.value}</div>
      </div>
      <div className={styles.submenu}>
        {item.submenu.map(i => (
          <SubMenuItem key={i.id} id={item.id} item={i} setId={setId} setClick={setClick}/>
        ))}
      </div>
    </>
  
  );
};
export default MenuItem;