import { useState } from 'react';
import styles from './App.module.scss';
import KeyboardContainer from './components/KeyboardContainer/KeyboardContainer';
import { alphabet } from './data/alphabet';
import useSpecialSymbols from './hooks/useSpecialSymbols';
import Navbar from './components/Navbar/Navbar';
import SettingsModal from './components/SittingsModal/SettingsModal';
import DictionaryModal from './components/DictionaryModal/DictionaryModal';

function App() {
  const [text, setText] = useState('');
  const [pressedKey, setPressedKey] = useState('');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isDictionaryOpen, setIsDictionaryOpen] = useState(false);
  const { checkSpecialSymbol } = useSpecialSymbols();

  const openSettings = () => setIsSettingsOpen(true);
  const closeSettings = () => setIsSettingsOpen(false);

  const openDictionary = () => setIsDictionaryOpen(true);
  const closeDictionary = () => setIsDictionaryOpen(false);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const keyValue = event.key;
    setPressedKey(keyValue.toUpperCase());
  };

  const changeTextValue = (textValue: string) => {
    const lastChar = textValue.charAt(textValue.length - 1);
    if (textValue !== text.concat(lastChar) && textValue !== text.slice(0, -1)) {
      textValue = text + pressedKey.toUpperCase();
    }

    if (alphabet.includes(pressedKey) || textValue.length < text.length) {
      setText(textValue);
      return;
    }

    checkSpecialSymbol({ textValue, lastChar: pressedKey, setText, setPressedKey });
  };

  return (
    <main>
      <div className={styles.container}>
        <Navbar openSettings={openSettings} openDictionary={openDictionary} />
        <input
          value={text}
          onChange={(e) => changeTextValue(e.target.value.toUpperCase())}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Type here..."
          onFocus={(e) => e.target.setSelectionRange(text.length, text.length)}
          className={styles.inputText}
        />
        <KeyboardContainer pressedKey={pressedKey} setPressedKey={setPressedKey} setText={setText} />
      </div>
      <SettingsModal onConfirm={() => {}} onClose={closeSettings} isOpen={isSettingsOpen} />
      <DictionaryModal onClose={closeDictionary} isOpen={isDictionaryOpen} />
    </main>
  );
}

export default App;
