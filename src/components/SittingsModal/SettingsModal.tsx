import PlugBoard from '../PlugBoard/PlugBoard';
import RotorBoard from '../RotorBoard/RotorBoard';
import Button from '../ui/Button/Button';
import styles from './styles.module.scss';

type SettingsModalProps = {
  isOpen: boolean;
  onConfirm: () => void;
  onClose: () => void;
};

const SettingsModal = ({ isOpen, onConfirm, onClose }: SettingsModalProps) => {
  return (
    <div className={`${styles.settings} ${isOpen ? styles.openSettings : styles.closeSettings}`}>
      <div className={styles.window}>
        <h1>Settings</h1>
        <div className={styles.panel}>
          <PlugBoard />
          <RotorBoard />
        </div>
        <div className={styles.control}>
          <Button handleClick={onConfirm}>Save Settings</Button>
          <Button handleClick={onClose}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
