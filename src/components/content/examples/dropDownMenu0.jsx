import Link from 'next/link';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import styles from '@/styles/content/examples/dropDownMenu0.module.scss';

export default function DropDownMenu({ name, links }) {
  return (
    <div className={styles.container}>
      <button className={styles.btn}>
        <h3>{name}</h3>
        <AiFillCaretUp className={styles.arrow} />
      </button>
      <div className={styles.links}>
        <Link href="/">home</Link>
        <Link href="/content">content</Link>
        <Link href="/projects">projects</Link>
      </div>
    </div>
  );
}
