import { useState } from 'react';
import styles from './styles.module.scss';

type PlugboardElementProps = {
  firstLetter: string;
  secondLetter: string;
  remainedLetters: string[];
  setRemainedLetters: React.Dispatch<React.SetStateAction<string[]>>;
};

type TurnProps = {
  char: string;
  setChar: React.Dispatch<React.SetStateAction<string>>;
};

const PlugboardElement = ({ firstLetter, secondLetter, remainedLetters, setRemainedLetters }: PlugboardElementProps) => {
  const [firstChar, setFirstChar] = useState(firstLetter);
  const [secondChar, setSecondChar] = useState(secondLetter);

  const turnUp = ({ char, setChar }: TurnProps) => {
    const prevChar = char;
    setChar(remainedLetters.shift()!);
    setRemainedLetters((prev) => [...prev, prevChar]);
  };

  const turnDown = ({ char, setChar }: TurnProps) => {
    const prevChar = char;
    setChar(remainedLetters.pop()!);
    setRemainedLetters((prev) => [prevChar, ...prev]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.element}>
        <button onClick={() => turnUp({ char: firstChar, setChar: setFirstChar })}>▲</button>
        <span>{firstChar}</span>
        <button onClick={() => turnDown({ char: firstChar, setChar: setFirstChar })}>▼</button>
      </div>
      <div className={styles.centralElement}>=</div>
      <div className={styles.element}>
        <button onClick={() => turnUp({ char: secondChar, setChar: setSecondChar })}>▲</button>
        <span>{secondChar}</span>
        <button onClick={() => turnDown({ char: secondChar, setChar: setSecondChar })}>▼</button>
      </div>
    </div>
  );
};

export default PlugboardElement;
