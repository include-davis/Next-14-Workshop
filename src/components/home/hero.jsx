import Image from 'next/image';
import styles from '@styles/home/hero.module.scss';
export default function Hero() {
  return (
    <div className={styles.container}>
      <Image
        src="/home/city.jpg"
        alt="serene forest scene in the night"
        fill
        style={{ objectFit: 'cover', opacity: '0.6', zIndex: 0 }}
      />
      <h1>WELCOME TO INTRO TO NEXT.JS</h1>
    </div>
  );
}
