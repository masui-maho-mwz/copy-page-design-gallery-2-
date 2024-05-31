import { navItems } from '@/features/normal-header/header/nav-items-data';
import { Navigation } from '@/features/normal-header/header/navigation';
import { UserActionBar } from '@/features/normal-header/header/user-action-bar';
import styles from './styles.module.css';

export const Header = () => {
  return (
    <header className={styles.root}>
      <UserActionBar />
      <Navigation items={navItems} />
    </header>
  );
};
