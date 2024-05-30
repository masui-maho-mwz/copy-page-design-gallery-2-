import { Loupe } from '@/app/dashboard-menu/components/icons/loupe';
import styles from './styles.module.css';

export const ContentsHeader = () => {
  return (
    <div>
      <div className={styles.wrap}>
        <h4 className={styles.title}>Blog</h4>
        <button className={styles.button}>+ New Post</button>
      </div>
      <div className={styles.wrap}>
        <div className={styles.seach}>
          <div className={styles.icon}>
            <Loupe />
          </div>
          <input type="text" className={styles.input} placeholder="Search post..." />
        </div>
        <div>
          <select name="" id="" className={styles.select}>
            <option value="Latest">Latest</option>
            <option value="Popular">Popular</option>
            <option value="Oldest">Oldest</option>
          </select>
        </div>
      </div>
    </div>
  );
};
