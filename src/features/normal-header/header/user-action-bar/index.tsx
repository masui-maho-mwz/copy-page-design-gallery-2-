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
          <Button type="link" href="#" value="ログイン" color="#357a00" />
          <Button type="link" href="#" value="新規登録" backgroundColor="#357a00" color="rgb(255 255 255 / 92%)" />
        </div>
      </div>
    </div>
  );
};
