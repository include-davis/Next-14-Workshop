'use client';

import { useState } from 'react';

import Link from 'next/link';

import styles from '@styles/content/sidebar/sidebar.module.scss';
import plan from '@data/content/content.json';

export default function Sidebar() {
  const [active, setActive] = useState(1);

  return (
    <div className={styles.container}>
      <section className={styles.lesson_list}>
        {plan.map((section, index) => {
          return (
            <article
              key={section.title}
              className={`${styles.lesson} ${
                active == index + 1 ? styles.active : null
              }`}
              onClick={() => setActive(index + 1)}
            >
              <Link
                className={styles.link}
                href={`/content/section${index + 1}`}
              >
                <h4 className={styles.section_title}>{section.title}</h4>
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
}
