import axios from 'axios';

export const getProducts = async () => {
  try {
    const response = await axios.get(`/products`);
    return response.data;
  } catch (error) {
    return console.log(error);
  }
};
