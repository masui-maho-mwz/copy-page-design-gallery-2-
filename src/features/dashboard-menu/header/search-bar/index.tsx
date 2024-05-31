'use client';

import { Button } from '@/components/dashboard-menu/buttons/button';
import { Loupe } from '@/components/dashboard-menu/icons/loupe';
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
      // MEMO: 以下のエラーの原因と考えている箇所。
      // スタイルの修正がキリ良くなったら対応したい。
      // Unhandled Runtime Error
      // TypeError: Cannot read properties of null (reading 'removeChild')
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
      {/* <button className={styles.searchButton}>Search</button> */}
      <Button type="button" value="Search" />
    </div>
  );
};
