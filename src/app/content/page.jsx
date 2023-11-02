import Link from 'next/link';

import styles from '@styles/content/page.module.scss';
import plan from '@data/content/pages.json';

export default function Content() {
  return (
    <main className={styles.container}>
      <h1>Lesson Plan</h1>
      <section className={styles.lesson_list}>
        {plan.map((section, index) => {
          return (
            <article key={section.title} className={styles.lesson}>
              <Link href={`content/${index + 1}`}>
                <h4>{section.title}</h4>
              </Link>
            </article>
          );
        })}
      </section>
    </main>
  );
}
