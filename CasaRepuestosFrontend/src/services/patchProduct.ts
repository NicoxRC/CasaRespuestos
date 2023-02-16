import axios from 'axios';

export async function patchProduct(id: string, values: any) {
  try {
    const response = await axios.patch(`/products/${id}`, values);
    return response.data;
  } catch (error) {
    return error;
  }
}
