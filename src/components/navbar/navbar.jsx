'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';

import navlinks from '@data/navbar/navlinks.json';
import styles from '@/styles/navbar/navbar.module.scss';

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleActive = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className={styles.relative_wrapper}>
      <div className={styles.shape}>
        <div className={styles.container}>
          <Link className={styles.logo} href="/">
            <Image
              src="/navbar/full_logo.svg"
              alt="Include Full Logo"
              fill
              style={{ objectFit: 'cover' }}
            />
          </Link>
          <div className={styles.right}>
            <div
              className={`${styles.links} ${menuActive ? styles.active : null}`}
            >
              {navlinks.map((link) => (
                <Link key={link.title} href={link.slug} onClick={toggleActive}>
                  {link.title}
                </Link>
              ))}
            </div>
            <button className={styles.hamburger} onClick={toggleActive}>
              {menuActive ? <RxCross2 /> : <RxHamburgerMenu />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
