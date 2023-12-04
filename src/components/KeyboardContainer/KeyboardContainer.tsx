import { useEffect, useRef } from 'react';
import TypewriterButton from '../ui/TypewriterButton/TypewriterButton';
import styles from './styles.module.scss';
import typeSound from '../../assets/type-sound3.wav';
import { alphabet } from '../../data/alphabet';

type KeyboardContainerProps = {
  pressedKey: string;
  setPressedKey: React.Dispatch<React.SetStateAction<string>>;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

const KeyboardContainer = ({ pressedKey, setPressedKey, setText }: KeyboardContainerProps) => {
  const buttonsRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const audio = new Audio(typeSound);

  const playSound = () => {
    audio.currentTime = 0;
    audio.play();
  };

  const handleButtonClick = (symb: string) => {
    playSound();
    setText((prev) => prev.concat(symb));
  };

  useEffect(() => {
    if (alphabet.includes(pressedKey)) {
      const buttonIndex = alphabet.indexOf(pressedKey);
      const buttonRef = buttonsRefs.current[buttonIndex];
      if (!buttonRef) return;

      buttonRef.style.transform = 'scale(0.9)';
      playSound();
      setTimeout(() => {
        buttonRef.style.transform = 'scale(1)';
      }, 200);
      setPressedKey('');
    }
  }, [pressedKey]);

  return (
    <div className={styles.keyboardGrid}>
      {alphabet.map((symb, index) => (
        <TypewriterButton key={index} handleButtonClick={handleButtonClick} ref={(ref) => (buttonsRefs.current[index] = ref)}>
          {symb}
        </TypewriterButton>
      ))}
    </div>
  );
};

export default KeyboardContainer;
