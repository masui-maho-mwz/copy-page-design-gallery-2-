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

const navItems1 = [
  { id: 1, name: 'ナビ1-1', href: '#' },
  { id: 2, name: 'ナビ1-2', href: '#' },
  { id: 3, name: 'ナビ1-3', href: '#' },
  { id: 4, name: 'ナビ1-4', href: '#' },
  { id: 5, name: 'ナビ1-5', href: '#' },
  { id: 6, name: 'ナビ1-6', href: '#' },
  { id: 7, name: 'ナビ1-7', href: '#' },
  { id: 8, name: 'ナビ1-8', href: '#' },
  { id: 9, name: 'ナビ1-9', href: '#' },
];

const navItems2 = [
  { id: 1, name: 'ナビ2-1', href: '#' },
  { id: 2, name: 'ナビ2-2', href: '#' },
  { id: 3, name: 'ナビ2-3', href: '#' },
  { id: 4, name: 'ナビ2-4', href: '#' },
  { id: 5, name: 'ナビ2-5', href: '#' },
  { id: 6, name: 'ナビ2-6', href: '#' },
  { id: 7, name: 'ナビ2-7', href: '#' },
  { id: 8, name: 'ナビ2-8', href: '#' },
];
