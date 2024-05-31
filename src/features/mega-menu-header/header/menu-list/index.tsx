import Link from 'next/link';
import styles from './styles.module.css';

type Props = {
  setIsHovering: (isHovering: string | null) => void;
};

export const MenuList = ({ setIsHovering }: Props) => {
  return (
    <ul className={styles.root}>
      <li className={styles.list}>
        <Link href="" className={styles.link}>
          リンク１
        </Link>
      </li>
      <li className={styles.list}>
        <Link href="" className={styles.link}>
          リンク２
        </Link>
      </li>
      <li
        className={styles.list}
        onMouseEnter={() => setIsHovering('megaMenu3')}
        onMouseLeave={() => setIsHovering(null)}
      >
        <Link href="" className={`${styles.link} ${styles.arrow}`}>
          リンク３
        </Link>
      </li>
      <li
        className={styles.list}
        onMouseEnter={() => setIsHovering('megaMenu4')}
        onMouseLeave={() => setIsHovering(null)}
      >
        <Link href="" className={`${styles.link} ${styles.arrow}`}>
          リンク４
        </Link>
      </li>
    </ul>
  );
};
