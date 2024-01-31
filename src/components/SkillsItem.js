import Link from 'next/link';
import styles from '../styles/components/SkillsItem.module.scss';

const SkillsItem = ({item}) => {
  
  return (
  <div className={styles.item}>
    <Link href={item.path}>
      <img src={item.src} className={styles.item__img} alt={item.alt}/>
    </Link>
    <div className={styles.content}>
      <div className={styles.content__title}>Technology:</div>
      <div className={styles.content__description}>{item.technology}</div>
    </div>
    <div className={styles.content}>
      <div className={styles.content__title}>GitHub:</div>
      <div className={styles.content__description} style={{textDecoration: 'underline'}}>
        <Link href={item.git}>{item.git}</Link>
      </div>
    </div>
  </div>
  );
};
export default SkillsItem;