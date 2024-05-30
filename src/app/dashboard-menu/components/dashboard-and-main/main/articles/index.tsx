import { Info } from '@/app/dashboard-menu/components/dashboard-and-main/main/articles/info';
import styles from './styles.module.css';

type Articles = {
  id: number;
  date: string;
  title: string;
};

type Props = {
  articles: Articles[];
};

export const Articles = ({ articles }: Props) => {
  return (
    <div className={styles.root}>
      {articles.map(({ id, date, title }) => (
        <div key={id} className={styles.wrap}>
          <div className={styles.card}>
            <div className={styles.images}>
              <span></span>
              <div className={styles.icon}>icon</div>
              <img src="" alt="" />
            </div>
            <div className={styles.article}>
              <div className={styles.date}>{date}</div>
              <div className={styles.title}>{title}</div>
              <Info />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
