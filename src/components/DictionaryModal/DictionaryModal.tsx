import Button from '../ui/Button/Button';
import styles from './styles.module.scss';
import { symbolMap } from '../../data/dictionary';
import { numberMap } from '../../data/numberDictionary';

type SettingsModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const DictionaryModal = ({ isOpen, onClose }: SettingsModalProps) => {
  return (
    <div className={`${styles.dictinary} ${isOpen ? styles.openDictinary : styles.closeDictinary}`}>
      <div className={styles.window}>
        <h1>Dictionary</h1>
        <div className={styles.content}>
          <h3>Numbers: </h3>
          {[...numberMap.entries()].map((element) => {
            return (
              <div>
                {element[0]} is {element[1]}
              </div>
            );
          })}
          <h3>Special Characters: </h3>
          {[...symbolMap.entries()].map((element) => {
            return (
              <div>
                {element[0]} is {element[1]}
              </div>
            );
          })}
        </div>
        <div className={styles.control}>
          <Button handleClick={onClose}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default DictionaryModal;
