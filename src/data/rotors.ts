const rotorI = ['E', 'K', 'M', 'F', 'L', 'G', 'D', 'Q', 'V', 'Z', 'N', 'T', 'O', 'W', 'Y', 'H', 'X', 'U', 'S', 'P', 'A', 'I', 'B', 'R', 'C', 'J'];
const rotorII = ['A', 'J', 'D', 'K', 'S', 'I', 'R', 'U', 'X', 'B', 'L', 'H', 'W', 'T', 'M', 'C', 'Q', 'G', 'Z', 'N', 'P', 'Y', 'F', 'V', 'O', 'E'];
const rotorIII = ['B', 'D', 'F', 'H', 'J', 'L', 'C', 'P', 'R', 'T', 'X', 'V', 'Z', 'N', 'Y', 'E', 'I', 'W', 'G', 'A', 'K', 'M', 'U', 'S', 'Q', 'O'];
const rotorIV = ['E', 'S', 'O', 'V', 'P', 'Z', 'J', 'A', 'Y', 'Q', 'U', 'I', 'R', 'H', 'X', 'L', 'N', 'F', 'T', 'G', 'K', 'D', 'C', 'M', 'W', 'B'];
const rotorV = ['V', 'Z', 'B', 'R', 'G', 'I', 'T', 'Y', 'U', 'P', 'S', 'D', 'N', 'H', 'L', 'X', 'A', 'W', 'M', 'J', 'Q', 'O', 'F', 'E', 'C', 'K'];

const rotorINotch = ['Q'];
const rotorIINotch = ['E'];
const rotorIIINotch = ['V'];
const rotorIVNotch = ['J', 'Z'];
const rotorVNotch = ['Z', 'M'];

const rotors = [
  { id: 'RotorI', rotor: rotorI, notch: rotorINotch },
  { id: 'RotorII', rotor: rotorII, notch: rotorIINotch },
  { id: 'RotorIII', rotor: rotorIII, notch: rotorIIINotch },
  { id: 'RotorIV', rotor: rotorIV, notch: rotorIVNotch },
  { id: 'RotorV', rotor: rotorV, notch: rotorVNotch },
];

export { rotorI, rotorII, rotorIII, rotorIV, rotorV, rotorINotch, rotorIINotch, rotorIIINotch, rotorIVNotch, rotorVNotch, rotors };
