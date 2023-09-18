import axios from 'axios';
import type { ProductFormType } from '../types/types';
import type { ProductInterface } from '../types/Interfaces';

export const postProduct = async (
  values: ProductFormType
): Promise<ProductInterface> => {
  try {
    const { data } = await axios.post<ProductInterface>('/products', values);
    return data;
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      throw new Error(error.message);
    } else {
      throw new Error('Unknown error');
    }
  }
};
