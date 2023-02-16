import axios from 'axios';

export const postProduct = async (values: object) => {
  try {
    const response = axios.post('/products', values);
    return response;
  } catch (error) {
    console.log(error);
  }
};
