import axios from '../api/axios';
import config from '../config/config';

const textToSpeech = async () => {
  try {
    const response = await axios.get(`${config.apiUrl}/api/category/colors`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const speechToText = async () => {
  try {
    const response = await axios.get(`${config.apiUrl}/api/category/categories`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const symbolsToText = async () => {
  try {
    const response = await axios.get(`${config.apiUrl}/api/category/categories`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { textToSpeech, speechToText, symbolsToText };
