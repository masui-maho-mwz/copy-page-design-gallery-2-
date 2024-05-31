import { navItems1, navItems2 } from '@/app/mega-menu-header/components/footer/items-data';
import { links } from '@/app/mega-menu-header/components/footer/links-data';
import { NavAndSearch } from '@/app/mega-menu-header/components/footer/nav-and-search';
import { Options } from '@/app/mega-menu-header/components/footer/options';

export const Footer = () => {
  return (
    // TODO: ここで余白や高さの設定していない。あとで確認する。
    <footer>
      <NavAndSearch items={[navItems1, navItems2]} />
      <Options links={links} />
    </footer>
  );
};
