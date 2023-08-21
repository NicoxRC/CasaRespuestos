import axios from 'axios';
import type { ProductFormType } from '../types/types';
import type { ProductInterface } from '../types/Interfaces';

export const postProduct = async (values: ProductFormType): Promise<void> => {
  try {
    axios.post<ProductInterface>('/products', values);
  } catch (error: any) {
    return error;
  }
};
