import axios from 'axios';

export const deleteProduct = async (id: string) => {
  try {
    const response = await axios.delete(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
