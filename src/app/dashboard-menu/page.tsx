import { Articles } from '@/features/dashboard-menu/dashboard-and-main/main/articles';
import styles from './styles.module.css';

export default function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.contents}>
        <Articles />
      </div>
    </div>
  );
}
