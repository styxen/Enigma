import { symbolMap } from '../data/dictionary';
import { numberMap } from '../data/numberDictionary';

type CheckSpecialSymbolProps = {
  textValue: string;
  lastChar: string;
  setPressedKey: React.Dispatch<React.SetStateAction<string>>;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

const useSpecialSymbols = () => {
  const checkSpecialSymbol = ({ textValue, lastChar, setText, setPressedKey }: CheckSpecialSymbolProps) => {
    let replacement = symbolMap.has(lastChar) ? symbolMap.get(lastChar)! : numberMap.get(lastChar)!;
    if (textValue.length === 1 || textValue.charAt(textValue.length - 2) === ' ') replacement = replacement.trimStart();
    let i = -1;

    setInterval(() => {
      if (i > replacement.length) return;

      setPressedKey(replacement.charAt(i));
      setText((prev) => prev.concat(replacement.charAt(i)));
      i++;
    }, 200);
  };

  return { checkSpecialSymbol };
};

export default useSpecialSymbols;
