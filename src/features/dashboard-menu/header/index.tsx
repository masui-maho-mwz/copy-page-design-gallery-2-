'use client';

import { IconButton } from '@/components/dashboard-menu/elements/buttons/icon-button';
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
          <IconButton icon={<UnionJack />} />
          <IconButton icon={<Bell />} />
          <IconButton icon={<div className={styles.icon}>icon</div>} />
        </div>
      </div>
    </header>
  );
};
