import styles from './styles.module.scss';
import { forwardRef } from 'react';

export interface ButtonProps {
  children: string;
  handleButtonClick: (symb: string) => void;
}

const TypewriterButton = forwardRef(({ children, handleButtonClick }: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
  return (
    <button onClick={() => handleButtonClick(children)} className={styles.typewriterButton} ref={ref}>
      {children}
    </button>
  );
});

export default TypewriterButton;
