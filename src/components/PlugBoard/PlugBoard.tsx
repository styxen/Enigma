import styles from './styles.module.scss';
import { alphabet } from '../../data/alphabet';
import PlugboardElement from '../PlugboardElement/PlugboardElement';
import { useState } from 'react';

const PlugBoard = () => {
  const chars1 = alphabet.filter((char) => char !== ' ').slice(0, 10);
  const chars2 = alphabet.filter((char) => char !== ' ').slice(10, 20);
  const [remainedLetters, setRemainedLetters] = useState(alphabet.filter((char) => char !== ' ').slice(20, 26));

  return (
    <div className={styles.plugboard}>
      {chars1.map((char, index) => {
        return (
          <PlugboardElement
            key={index}
            firstLetter={char}
            secondLetter={chars2[index]}
            remainedLetters={remainedLetters}
            setRemainedLetters={setRemainedLetters}
          />
        );
      })}
    </div>
  );
};

export default PlugBoard;
