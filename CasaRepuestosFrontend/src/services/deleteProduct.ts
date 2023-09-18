import axios from 'axios';
import type { ProductInterface } from '../types/Interfaces';

export const deleteProduct = async (id: string): Promise<ProductInterface> => {
  try {
    const { data } = await axios.delete<ProductInterface>(`/products/${id}`);
    return data;
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      throw new Error(error.message);
    } else {
      throw new Error('Unknown error');
    }
  }
};
