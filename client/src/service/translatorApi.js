import axios from '../api/axios';
import config from '../config/config';

const api="http://100.100.137.86:3000/api/v1/workWT"

const textToSpeech = async (text, textLanguage, textToLanguage) => {
  try {
    const response = await axios.post(`${api}/TextToSpeech`, {
      text,
      textLanguage,
      textToLanguage,
    });

    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};

const speechToText = async (speech, speechLanguage, speechToLanguage) => {
  try {
    console.log(config.apiUrl)
    const response = await axios.post(`${api}/SpeechToText`, {
      speech,
      speechLanguage,
      speechToLanguage,
    });

    return response.data;
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
