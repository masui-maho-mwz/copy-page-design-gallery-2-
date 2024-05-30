import { AbstractLogo } from '@/app/mega-menu-header/components/icons/tech-quest-logo';
import Link from 'next/link';
import styles from './styles.module.css';

export const LogoAndTitle = () => {
  return (
    <h1 className={styles.root}>
      <Link href="" className={styles.logo}>
        <AbstractLogo />
      </Link>
      <Link href="" className={styles.text}>
        タイトル
      </Link>
    </h1>
  );
};
