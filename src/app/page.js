import Image from "next/image";
import source from '../../public/html-system-websites-collage-design.jpg';
import RightColumn from "@/components/RightColumn";
import styles from "./page.module.scss";
import './globals.scss';

export default function Home() {
  return (
    <main>
      <div className='left'>
        <div>
          <Image src={source} className={styles.image} alt="main image"/>
        </div>
        <div className='content'>
          <h1>Front-end developer resume</h1>
          <p className='content__description'>Presented for your consideration is the resume
           of a frontend developer who is searching for remote job.
           </p>
        </div>
      </div>
      <div className='right'>
        <RightColumn />
      </div>
    </main>
  );
}
