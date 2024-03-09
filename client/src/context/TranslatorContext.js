import React, { createContext, useContext, useState, useEffect } from "react";

const TranslatorContext = createContext();

export const TranslatorProvider = ({ children }) => {
  const [translatedVal, setTranslatedVal] = useState({});

  const storeTranslatedData = (data) => {
    setTranslatedVal(data);
  };

  const getTranslatedData = () => {
    return translatedVal;
  };

  useEffect(() => {
    console.log(`${JSON.stringify(translatedVal)} has been updated`);
  }, [translatedVal]);

  const translatorContextValue = {
    translatedVal,
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
