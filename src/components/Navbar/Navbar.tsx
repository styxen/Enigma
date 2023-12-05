import Button from '../ui/Button/Button';
import styles from './styles.module.scss';

type NavBarProps = {
  openSettings: () => void;
  openDictionary: () => void;
};

const Navbar = ({ openSettings, openDictionary }: NavBarProps) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.elementGroup}>
        <Button handleClick={openSettings}>Settings</Button>
        <Button handleClick={openDictionary}>Dictionary</Button>
      </div>
      <div className={styles.elementGroup}>
        <Button handleClick={() => {}}>Save file</Button>
        <Button handleClick={() => {}}>Load file</Button>
      </div>
    </nav>
  );
};

export default Navbar;
