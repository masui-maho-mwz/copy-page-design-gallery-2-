'use client';

import { Loupe } from '@/app/dashboard-menu/components/icons/loupe';
import { useEffect, useRef } from 'react';
import styles from './styles.module.css';

type Props = {
  isVisible: boolean;
  onClose: () => void;
};

export const SearchBar = ({ isVisible, onClose }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && event.target instanceof Node && !ref.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (!isVisible) return;

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className={styles.root} ref={ref}>
      <div className={styles.wrap}>
        <Loupe />
        <input type="text" placeholder="Search…" className={styles.input} />
      </div>
      <button className={styles.searchButton}>Search</button>
    </div>
  );
};
