'use client';

import Link from 'next/link';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import styles from '@/styles/content/examples/dropDownMenu1.module.scss';
import { useState } from 'react';

export default function DropDownMenu({ name, links }) {
  const [active, setActive] = useState(false);
  const toggleActive = () => setActive(!active);

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={toggleActive}>
        <h3>{name}</h3>
        {active ? (
          <AiFillCaretUp className={styles.arrow} />
        ) : (
          <AiFillCaretDown className={styles.arrow} />
        )}
      </button>
      <div className={`${styles.links} ${active ? styles.active : null}`}>
        {links.map((link) => (
          <Link key={link.text} href={link.slug}>
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
}
