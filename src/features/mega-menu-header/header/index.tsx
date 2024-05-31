'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { LogoAndTitle } from '@/features/mega-menu-header/header/logo-and-title';
import { MegaMenu } from '@/features/mega-menu-header/header/mega-menu';
import { MenuList } from '@/features/mega-menu-header/header/menu-list';
import { useState } from 'react';
import styles from './styles.module.css';

export const Header = () => {
  const [isHovering, setIsHovering] = useState<string | null>(null);

  return (
    <div className={styles.root}>
      <LogoAndTitle />
      <MegaMenu isHovering={isHovering} setIsHovering={setIsHovering} />
      <MenuList setIsHovering={setIsHovering} />
    </div>
  );
};
