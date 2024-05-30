'use client';

import { SearchBar } from '@/app/dashboard-menu/components/header/search-bar';
import { Bell } from '@/app/dashboard-menu/components/icons/bell';
import { Loupe } from '@/app/dashboard-menu/components/icons/loupe';
import { UnionJack } from '@/app/dashboard-menu/components/icons/union-jack';
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
