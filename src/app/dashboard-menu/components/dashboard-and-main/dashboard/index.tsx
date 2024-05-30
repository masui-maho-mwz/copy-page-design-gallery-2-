import { Navitems } from '@/app/dashboard-menu/components/dashboard-and-main/dashboard/items-data';
import { Nav } from '@/app/dashboard-menu/components/dashboard-and-main/dashboard/nav';
import { Profile } from '@/app/dashboard-menu/components/dashboard-and-main/dashboard/profile';
import { AbstractLogo } from '@/app/dashboard-menu/components/icons/tech-quest-logo';
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
