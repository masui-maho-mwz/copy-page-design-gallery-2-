import { sections } from '@/app/normal-header/sections-data';
import { MainContents } from '@/features/normal-header/main/main-contents';
import { RightSidePanel } from '@/features/normal-header/main/right-side-panel';
import styles from './styles.module.css';

export default function NormalHeaderHome() {
  return (
    <main className={styles.root}>
      <MainContents />
      <RightSidePanel sections={sections} />
    </main>
  );
}
