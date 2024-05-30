import { articles } from '@/app/dashboard-menu/articles-data';
import { Articles } from '@/app/dashboard-menu/components/dashboard-and-main/main/articles';
import { ContentsHeader } from '@/app/dashboard-menu/components/dashboard-and-main/main/contents-header';
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
