import { Button } from '@/components/normal-header/elements/buttons/button';
import { AbstractLogo } from '@/components/normal-header/icons/tech-quest-logo';
import styles from './styles.module.css';

export const UserActionBar = () => {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <AbstractLogo />
      </div>
      <div className={styles.menu}>
        <form action="" aria-label="検索" className={styles.form}>
          <input type="search" placeholder="検索" className={styles.input}></input>
        </form>
        <div className={styles.buttons}>
          <Button type="link" href="#" value="ログイン" />
          <Button type="link" href="#" value="新規登録" />
        </div>
      </div>
    </div>
  );
};
