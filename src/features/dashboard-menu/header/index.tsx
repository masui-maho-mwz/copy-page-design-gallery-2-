'use client';

import { Bell } from '@/components/dashboard-menu/icons/bell';
import { Loupe } from '@/components/dashboard-menu/icons/loupe';
import { UnionJack } from '@/components/dashboard-menu/icons/union-jack';
import { SearchBar } from '@/features/dashboard-menu/header/search-bar';
import { useState } from 'react';
import styles from './styles.module.css';

export const Header = () => {
  const [isSearch, setIsSearch] = useState(false);

  const toggleSearch = () => {
    setIsSearch((prev) => !prev);
  };

  const closeSearch = () => {
    setIsSearch(false);
  };

  return (
    <header className={styles.root}>
      <div className={styles.wrap}>
        <button className={styles.searchIcon} onClick={toggleSearch}>
          <Loupe />
        </button>
        <SearchBar isVisible={isSearch} onClose={closeSearch} />
        <div className={styles.buttons}>
          <button className={styles.button}>
            <UnionJack />
          </button>
          <button className={styles.button}>
            <Bell />
          </button>
          <button className={styles.button}>
            <div className={styles.icon}>icon</div>
          </button>
        </div>
      </div>
    </header>
  );
};
