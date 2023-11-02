import Image from 'next/image';
import Link from 'next/link';

import { BsArrowRight } from 'react-icons/bs';

import styles from '@styles/home/hero.module.scss';
export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <Image
          src="/home/city.jpg"
          alt="serene forest scene in the night"
          fill
          style={{ objectFit: 'cover', opacity: '0.6' }}
        />
      </div>
      <div className={styles.welcome}>
        <h1>WELCOME TO INTRO TO NEXT.JS</h1>
      </div>
      <div className={styles.vert_links}>
        <Link href="/content/section1">
          <div className={styles.large_link}>
            <h3>
              content <BsArrowRight />
            </h3>
          </div>
        </Link>
        <Link href="/practice">
          <div className={styles.large_link}>
            <h3>
              practice <BsArrowRight />
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
}
