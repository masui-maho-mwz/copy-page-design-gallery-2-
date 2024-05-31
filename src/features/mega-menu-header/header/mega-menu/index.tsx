import { Menu3 } from '@/features/mega-menu-header/header/mega-menu/menu3';
import { Menu4 } from '@/features/mega-menu-header/header/mega-menu/menu4';
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
