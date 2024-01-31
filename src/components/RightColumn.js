import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { rightColumn } from '@/consts/const';
import styles from '../styles/components/RightColumn.module.scss';

const RightColumn = () => {
    
  return (
  <div className={styles.rightColumn}>
    {rightColumn.map(item => (
      <div className={styles.rightColumn__img} key={item.id}>
        <Link href={item.path}>
          <Image src={item.src} alt={item.alt} width={450} height={280} className={styles.image} />
        </Link>
      </div>
    ))}
    
  </div>
  );
};
export default RightColumn;