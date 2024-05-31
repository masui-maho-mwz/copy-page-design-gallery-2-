'use client';

import Link from 'next/link';
import styles from './styles.module.css';

type Section = {
  id: number;
  name: string;
  href: string;
  subSections?: { id: number; name: string; href: string }[];
};

type Props = {
  sections: Section[];
};

export const RightSidePanel = ({ sections }: Props) => {
  return (
    <div className={styles.root}>
      <ul>
        {sections.map(({ id, name, href, subSections }) => (
          <li key={id} className={styles.item}>
            <Link href={href} className={styles.link}>
              {name}
            </Link>
            {subSections && (
              <ul className={styles.index}>
                {subSections.map(({ id, name, href }) => (
                  <li key={id} className={styles.item}>
                    <Link href={href} className={styles.link}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
