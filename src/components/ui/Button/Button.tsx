import styles from './styles.module.scss';

type NavButtonProps = {
  children: string;
  handleClick: () => void;
};

const Button = ({ children, handleClick }: NavButtonProps) => {
  return (
    <button onClick={handleClick} className={styles.customButton}>
      {children}
    </button>
  );
};

export default Button;
