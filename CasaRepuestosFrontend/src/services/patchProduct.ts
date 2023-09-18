import axios from 'axios';
import type { ProductEditType } from '../types/types';
import type { ProductInterface } from '../types/Interfaces';

export const patchProduct = async (
  id: string,
  values: ProductEditType
): Promise<ProductInterface> => {
  try {
    const { data } = await axios.patch<ProductInterface>(
      `/products/${id}`,
      values
    );
    return data;
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      throw new Error(error.message);
    } else {
      throw new Error('Unknown error');
    }
  }
};
