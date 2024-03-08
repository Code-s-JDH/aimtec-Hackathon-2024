import React, { useState } from 'react';
import TranslationResult from './TranslationResult';
import 'translator.css'

const Translator = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = () => {
    
  };

  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleTranslate}>Přeložit</button>
      <TranslationResult translatedText={translatedText} />
    </div>
  );
};

export default Translator;
