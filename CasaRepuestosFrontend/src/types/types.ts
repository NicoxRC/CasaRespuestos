import type { ProductInterface, UserInterface } from './Interfaces';
import type { DefaultValuesFormInterface } from './Interfaces';

export type NavBarPropsType = Omit<
  DefaultValuesFormInterface,
  'handleSelectName' | 'handleSelectLine'
>;
export type CardsPropsType = { productsShow: ProductInterface[] };
export type HandleProductChangeType = { value: string };
export type UserFormType = Omit<UserInterface, 'id'>;
export type ProductFormType = Omit<ProductInterface, 'id'>;
export type ProductEditType = Omit<ProductInterface, 'id' | 'nombre'>;
export type MarcaType = { value: string; label: string };
