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

const navItems = [
  { id: 1, name: 'ナビ１', href: '#' },
  { id: 2, name: 'ナビ２', href: '#' },
  { id: 3, name: 'ナビ３', href: '#' },
  { id: 4, name: 'ナビ４', href: '#' },
  { id: 5, name: 'ナビ５', href: '#', isNew: true },
  { id: 6, name: 'ナビ６', href: '#' },
];
