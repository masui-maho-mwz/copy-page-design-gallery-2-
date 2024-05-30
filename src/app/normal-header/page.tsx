import { MainContents } from '@/app/normal-header/components/main/main-contents';
import { RightSidePanel } from '@/app/normal-header/components/main/right-side-panel';
import { sections } from '@/app/normal-header/sections-data';
import styles from './styles.module.css';

export default function NormalHeaderHome() {
  return (
    <main className={styles.root}>
      <MainContents />
      <RightSidePanel sections={sections} />
    </main>
  );
}
