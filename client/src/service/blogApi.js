import axios from '../api/axios';
import config from '../config/config';

const publishBlog = async (blog) => {
  try {
    const response = await axios.post(`${config.apiUrl}/v1/workWT/publishBlog`, {
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