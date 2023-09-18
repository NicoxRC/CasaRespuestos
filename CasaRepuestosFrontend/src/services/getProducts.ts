import axios from 'axios';
import type { ProductInterface } from '../types/Interfaces';

export const getProducts = async (): Promise<ProductInterface[]> => {
  try {
    const { data } = await axios.get<ProductInterface[]>(`/products`);
    return data;
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      throw new Error(error.message);
    } else {
      throw new Error('Unknown error');
    }
  }
};
