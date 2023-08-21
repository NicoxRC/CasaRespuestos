import axios from 'axios';
import type { ProductInterface } from '../types/Interfaces';

export const deleteProduct = async (id: string): Promise<ProductInterface> => {
  try {
    const { data } = await axios.delete<ProductInterface>(`/products/${id}`);
    return data;
  } catch (error: any) {
    return error;
  }
};
