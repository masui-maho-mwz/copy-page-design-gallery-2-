import { navItems1, navItems2 } from '@/features/mega-menu-header/footer/items-data';
import { links } from '@/features/mega-menu-header/footer/links-data';
import { NavAndSearch } from '@/features/mega-menu-header/footer/nav-and-search';
import { Options } from '@/features/mega-menu-header/footer/options';

export const Footer = () => {
  return (
    // TODO: ここで余白や高さの設定していない。あとで確認する。
    <footer>
      <NavAndSearch items={[navItems1, navItems2]} />
      <Options links={links} />
    </footer>
  );
};
