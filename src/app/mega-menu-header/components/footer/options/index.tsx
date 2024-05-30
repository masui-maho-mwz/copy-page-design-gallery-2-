import { AbstractLogo } from '@/app/mega-menu-header/components/icons/tech-quest-logo';
import Link from 'next/link';
import styles from './styles.module.css';

type Link = {
  id: number;
  url: string;
  text: string;
};

type Props = {
  links: Link[];
};

export const Options = ({ links }: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.logo}>
          <AbstractLogo />
        </div>
        <small className={styles.text}>Copyright ©xxxxx Corporation. All rights reserved.</small>
      </div>
      <ul className={styles.list}>
        {links.map(({ id, url, text }) => (
          <li key={id} className={styles.item}>
            <Link href={url} className={styles.link}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
