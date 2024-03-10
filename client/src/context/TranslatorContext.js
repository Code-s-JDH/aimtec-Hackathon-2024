import React, { createContext, useContext, useState, useEffect } from "react";

const TranslatorContext = createContext();

export const TranslatorProvider = ({ children }) => {
  const [translatedVal, setTranslatedVal] = useState({});
  const [textLang, setTextLang] = useState('cs');
  const [textToLang, setTextToLang] = useState('en-US');

  const storeTranslatedData = (data, lang, toLang) => {
    setTranslatedVal(data);
    setTextLang(lang);
    setTextToLang(toLang);
  };

  const getTranslatedData = () => {
    return {
      translatedVal,
      textLang,
      textToLang,
    };
  };

  useEffect(() => {
    console.log(`${JSON.stringify(translatedVal)} has been updated`);
  }, [translatedVal]);

  const translatorContextValue = {
    translatedVal,
    textLang,
    setTextLang,
    setTextToLang,
    textToLang,
    storeTranslatedData,
    getTranslatedData,
  };

  return (
    <TranslatorContext.Provider value={translatorContextValue}>
      {children}
    </TranslatorContext.Provider>
  );
};

export const useTranslator = () => {
  const context = useContext(TranslatorContext);
  if (!context) {
    throw new Error("useTranslator must be used within a TranslatorProvider");
  }
  return context;
};
