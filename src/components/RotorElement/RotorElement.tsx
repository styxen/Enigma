import styles from './styles.module.scss';
import { useState } from 'react';
import { Rotor } from '../RotorBoard/RotorBoard';

type RotorElementProps = {
  rotorData: Rotor;
  remainedRotors: Rotor[];
  setRemainedRotors: React.Dispatch<React.SetStateAction<Rotor[]>>;
};

type TurnProps = {
  rotorElement: Rotor;
  setRotorElement: React.Dispatch<React.SetStateAction<Rotor>>;
};

const RotorElement = ({ rotorData, remainedRotors, setRemainedRotors }: RotorElementProps) => {
  const [rotorElement, setRotorElement] = useState(rotorData);
  const { id, rotor, notch } = rotorElement;
  const defaultIndex = rotor.indexOf(notch[0]) + 1 > 25 ? 0 : rotor.indexOf(notch[0]) + 1;
  const [currentLetter, setCurrentLetter] = useState(rotor[defaultIndex]);

  const turnLeft = () => {
    const nextLetterIndex = rotor.indexOf(currentLetter) - 1 < 0 ? 25 : rotor.indexOf(currentLetter) - 1;
    setCurrentLetter(rotor[nextLetterIndex]);
  };

  const turnRight = () => {
    const nextLetterIndex = rotor.indexOf(currentLetter) + 1 > 25 ? 0 : rotor.indexOf(currentLetter) + 1;
    setCurrentLetter(rotor[nextLetterIndex]);
  };

  const turnUp = ({ rotorElement, setRotorElement }: TurnProps) => {
    const prevRotor = rotorElement;
    setRotorElement(remainedRotors.shift()!);
    setRemainedRotors((prev) => [...prev, prevRotor]);
  };

  const turnDown = ({ rotorElement, setRotorElement }: TurnProps) => {
    const prevRotor = rotorElement;
    setRotorElement(remainedRotors.pop()!);
    setRemainedRotors((prev) => [prevRotor, ...prev]);
  };

  return (
    <div className={styles.rotor}>
      <div className={styles.rotorId}>{id}</div>
      <button onClick={() => turnUp({ rotorElement, setRotorElement })}>▲</button>
      <div className={styles.centralElement}>
        <button onClick={turnLeft}>◄</button>
        {rotor.map((letter, index) => {
          return (
            <div key={index} className={currentLetter === letter ? styles.currentElement : ''}>
              {letter}
            </div>
          );
        })}
        <button onClick={turnRight}>►</button>
      </div>
      <button onClick={() => turnDown({ rotorElement, setRotorElement })}>▼</button>
    </div>
  );
};

export default RotorElement;
