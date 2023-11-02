import styles from '@/styles/content/layout.module.scss';
import Sidebar from '@/components/content/sidebar/sidebar';

export default function ContentLayout({ children }) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.page_content}>{children}</div>
    </div>
  );
}
