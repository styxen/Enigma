import { useState } from 'react';
import RotorElement from '../RotorElement/RotorElement';
import styles from './styles.module.scss';
import { rotors } from '../../data/rotors';

export type Rotor = {
  id: string;
  rotor: string[];
  notch: string[];
};

const RotorBoard = () => {
  const [remainedRotors, setRemainedRotors] = useState<Rotor[]>(rotors.slice(3, 5));

  return (
    <div className={styles.rotorBoard}>
      <RotorElement rotorData={rotors[0]} remainedRotors={remainedRotors} setRemainedRotors={setRemainedRotors} />
      <RotorElement rotorData={rotors[1]} remainedRotors={remainedRotors} setRemainedRotors={setRemainedRotors} />
      <RotorElement rotorData={rotors[2]} remainedRotors={remainedRotors} setRemainedRotors={setRemainedRotors} />
    </div>
  );
};

export default RotorBoard;
