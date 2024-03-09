import axios from '../api/axios';

const textToSpeech = async (text, textLanguage, textToLanguage) => {
  try {
    const response = await axios.post('https://wlsrr6nxdtxbrryyca6abxbnw40zmugq.lambda-url.eu-west-1.on.aws/', {
      text: 'Tohle mi preloz',
      textLanguage: 'cs',
      textToLanguage: 'en',
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    )
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { textToSpeech };