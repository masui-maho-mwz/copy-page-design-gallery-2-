import React from 'react';
import styles from './styles.module.css';

type Props = {
  icon: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

export const IconButton = ({ icon, onClick, disabled = false }: Props) => {
  return (
    <button className={styles.root} onClick={onClick} disabled={disabled}>
      {icon}
    </button>
  );
};

export default IconButton;
