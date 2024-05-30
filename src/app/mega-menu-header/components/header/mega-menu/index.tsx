import { Menu3 } from '@/app/mega-menu-header/components/header/mega-menu/menu3';
import { Menu4 } from '@/app/mega-menu-header/components/header/mega-menu/menu4';
import styles from './styles.module.css';

type Props = {
  isHovering: string | null;
  setIsHovering: (hoverState: string | null) => void;
};

export const MegaMenu = ({ isHovering, setIsHovering }: Props) => {
  if (!isHovering) return null;

  return (
    <nav
      className={styles.root}
      onMouseEnter={() => setIsHovering(isHovering)}
      onMouseLeave={() => setIsHovering(null)}
    >
      {isHovering === 'megaMenu3' ? <Menu3 /> : <Menu4 />}
    </nav>
  );
};
