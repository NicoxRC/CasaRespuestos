import axios from 'axios';
import type { ProductInterface } from '../types/Interfaces';

export const getProducts = async (): Promise<ProductInterface[]> => {
  try {
    const { data } = await axios.get<ProductInterface[]>(`/products`);
    return data;
  } catch (error: any) {
    return error;
  }
};
