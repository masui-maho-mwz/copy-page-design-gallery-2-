import { Button } from '@/components/mega-menu-header/elements/buttons/button';
import { Loupe } from '@/components/mega-menu-header/icons/loupe';
import Link from 'next/link';
import styles from './styles.module.css';

type NavItem = {
  id: number;
  name: string;
  href: string;
};

type Props = {
  items: Array<NavItem[]>;
};

const NavList = ({ items }: { items: NavItem[] }) => (
  <ul className={styles.list}>
    {items.map(({ id, name, href }) => (
      <li key={id} className={styles.item}>
        <Link href={href} className={styles.link}>
          {name}
        </Link>
      </li>
    ))}
  </ul>
);

const SearchForm = () => (
  <form className={styles.form}>
    <input type="text" placeholder="何かお探しですか？" className={styles.input} />
    <div className={styles.loupe}>
      <Loupe />
    </div>
    <div className={styles.button}>
      <Button type="button" value="検索" />
    </div>
  </form>
);

export const NavAndSearch = ({ items }: Props) => (
  <nav className={styles.root}>
    <div className={styles.lists}>
      {items.map((navItems, index) => (
        <NavList key={index} items={navItems} />
      ))}
    </div>
    <SearchForm />
  </nav>
);
