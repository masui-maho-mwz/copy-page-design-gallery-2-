'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './styles.module.css';

type Items = {
  id: number;
  name: string;
  href: string;
};

type Props = {
  items: Items[];
};

export const Nav = ({ items }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <nav className={styles.root}>
      {items.map(({ id, name, href }) => (
        <Link
          key={id}
          href={href}
          className={`${styles.link} ${id === activeIndex ? styles.active : ''}`}
          onClick={() => handleClick(id)}
        >
          <div className={styles.label}>{name}</div>
        </Link>
      ))}
    </nav>
  );
};
