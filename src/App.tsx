import { useState } from 'react';
import styles from './App.module.scss';
import KeyboardContainer from './components/KeyboardContainer/KeyboardContainer';

function App() {
  const [text, setText] = useState('');
  const [pressedKey, setPressedKey] = useState('');

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const keyValue = event.key;
    setPressedKey(keyValue);
  };

  return (
    <main>
      <div className={styles.container}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value.toUpperCase())}
          onKeyDown={handleKeyDown}
          type="text"
          className={styles.inputText}
        />
        <KeyboardContainer pressedKey={pressedKey.toUpperCase()} setPressedKey={setPressedKey} setText={setText} />
      </div>
    </main>
  );
}

export default App;
