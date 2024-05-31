import { Slider } from '@/app/mega-menu-header/components/slider';

import styles from './styles.module.css';

export default function Home() {
  return (
    <div>
      <Slider />
      {/* MEMO: スタイルで高さを固定していますが、実際はMainのコンテンツによって高さは変更します。 */}
      <div className={styles.main}>main</div>
    </div>
  );
}
