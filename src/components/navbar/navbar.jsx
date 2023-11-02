import Link from 'next/link';
import styles from '@/styles/navbar/navbar.module.scss';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <div className={styles.logo}>LOGO</div>
      </Link>
      <div className={styles.links}>
        <Link href="/content">content</Link>
        <Link href="/projects">projects</Link>
      </div>
    </div>
  );
}
