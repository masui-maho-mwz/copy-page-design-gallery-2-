import Link from 'next/link';
import styles from './styles.module.css';

type Item = { id: number; text: string; href: string };

type Props = {
  title: string;
  items: Array<Item[]>;
  width: number;
  showBorderRight?: boolean;
};

export const MenuListContainer = (props: Props) => {
  const { title, items, width, showBorderRight = true } = props;
  const rootClassName = `${styles.root} ${showBorderRight ? styles.withBorder : ''}`;

  return (
    <div className={rootClassName} style={{ width: `${width}px` }}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.items}>
        {items.map((itemList, index) => (
          <ul key={index} className={styles.list}>
            {itemList.map(({ id, href, text }) => (
              <li key={id} className={styles.link}>
                <Link href={href} className={styles.anchor}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};
