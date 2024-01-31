import Link from 'next/link';
import styles from '../styles/components/SubMenuItem.module.scss';

const SubMenuItem = ({id, item, setId, setClick}) => {
  
  return (
    <div className={styles.submenuitem} id={id} onMouseEnter={e => setId(Number(e.target.id))} onClick={()=>setClick()}>
      <Link href={item.path}>{item.value}</Link>
    </div>
  );
};
export default SubMenuItem;