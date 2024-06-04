import styles from './styles.module.css';

export const MainContents = () => {
  return (
    <div className={styles.root}>
      {/* MEMO: スタイルで高さを固定していますが、実際は文字数によって高さは変更します。 */}
      <div className={styles.text}></div>
    </div>
  );
};
