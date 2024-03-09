import axios from '../api/axios';
import config from '../config/config';

const textToSpeech = async (text, textLanguage, textToLanguage) => {
  try {
    const response = await axios.post(`${config.apiUrl}/TextToSpeech`, {
      text,
      textLanguage,
      textToLanguage,
    });

    return response.data.speech;
  } catch (error) {
    throw error;
  }
};

const speechToText = async (speech, speechLanguage, speechToLanguage) => {
  try {
    const response = await axios.post(`${config.apiUrl}/SpeachToText`, {
      speech,
      speechLanguage,
      speechToLanguage,
    });

    return response.data.text;
  } catch (error) {
    throw error;
  }
};

const symbolsToText = async (image) => {
  try {
    const response = await axios.post(`${config.apiUrl}/SymbolsToText`, {
      image,
    });

    return response.data.text;
  } catch (error) {
    throw error;
  }
};

const textToSymbols = async (text, textLanguage, textToLanguage) => {
  try {
    const response = await axios.post(`${config.apiUrl}/TextToSymbols`, {
      text,
      textLanguage,
      textToLanguage,
    });

    return response.data.image;
  } catch (error) {
    throw error;
  }
};

export { textToSpeech, speechToText, symbolsToText, textToSymbols };
