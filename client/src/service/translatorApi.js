// import axios from '../api/axios';
// import config from '../config/config';

// const textToSpeech = async (text, textLanguage, textToLanguage) => {
//   try {
//     const response = await axios.post(`https://wlsrr6nxdtxbrryyca6abxbnw40zmugq.lambda-url.eu-west-1.on.aws`, {
//       text:"ahoj",
//       textLanguage:"cs",
//       textToLanguage:"en"
//     });
//     baseURL: BASE_URL,
//     headers: { 'Content-Type': 'application/json' },

//     console.log(response.data)
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
import axios from "../api/axios";

const textToSpeech = async (text, textLanguage, textToLanguage) => {
  const { response } = await axios.post('http://wlsrr6nxdtxbrryyca6abxbnw40zmugq.lambda-url.eu-west-1.on.aws/', {
    text: text,
    textLanguage: textLanguage,
    textToLanguage: textToLanguage,
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  )

  console.log(response.data);
  return response.data;
};


const {data} = await axios.post('http://wlsrr6nxdtxbrryyca6abxbnw40zmugq.lambda-url.eu-west-1.on.aws', {
    text: 'Tohle mi preloz',
    textLanguage: 'cs',
    textToLanguage: 'en',
   }, {
    headers: {
      'Content-Type': 'application/json'
    }
  }
)

console.log(data)


export { textToSpeech };