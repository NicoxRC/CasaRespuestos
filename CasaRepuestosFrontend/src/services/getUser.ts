import axios from 'axios';
import md5 from 'md5';
import type { UserInterface } from '../types/Interfaces';
import type { UserFormType } from '../types/types';

export const getUser = async (
  values: UserFormType
): Promise<UserInterface[]> => {
  try {
    const { data } = await axios.get<UserInterface[]>(
      `/user?user=${values.user}&password=${md5(values.password)}`
    );
    return data;
  } catch (error: any) {
    return error;
  }
};
