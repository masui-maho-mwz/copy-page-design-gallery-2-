import { AbstractLogo } from '@/components/dashboard-menu/icons/tech-quest-logo';
import { Navitems } from '@/features/dashboard-menu/dashboard-and-main/dashboard/items-data';
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
