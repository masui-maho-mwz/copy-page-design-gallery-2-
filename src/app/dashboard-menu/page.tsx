import { articles } from '@/app/dashboard-menu/articles-data';
import { Articles } from '@/features/dashboard-menu/dashboard-and-main/main/articles';
import { ContentsHeader } from '@/features/dashboard-menu/dashboard-and-main/main/contents-header';
import styles from './styles.module.css';

export default function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.contents}>
        <ContentsHeader />
        <Articles articles={articles} />
      </div>
    </div>
  );
}
