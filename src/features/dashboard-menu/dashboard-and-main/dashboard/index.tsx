import { AbstractLogo } from '@/components/dashboard-menu/icons/tech-quest-logo';
import { Nav } from '@/features/dashboard-menu/dashboard-and-main/dashboard/nav';
import { Profile } from '@/features/dashboard-menu/dashboard-and-main/dashboard/profile';
import styles from './styles.module.css';

export const DashBord = () => {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <AbstractLogo />
      </div>
      <Profile />
      <Nav items={Navitems} />
    </div>
  );
};

const Navitems = [
  { id: 1, name: 'ナビ１', href: '#' },
  { id: 2, name: 'ナビ２', href: '#' },
  { id: 3, name: 'ナビ３', href: '#' },
  { id: 4, name: 'ナビ４', href: '#' },
  { id: 5, name: 'ナビ５', href: '#' },
  { id: 6, name: 'ナビ６', href: '#' },
];
