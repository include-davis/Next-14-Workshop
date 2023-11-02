import styles from '@styles/content/util/codeBlock.module.scss';

export default function CodeBlock({ children }) {
  return <div className={styles.container}>{children}</div>;
}
