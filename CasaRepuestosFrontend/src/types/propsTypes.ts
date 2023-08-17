import type { ProductInterface } from './Interfaces';
import type { DefaultValuesFormInterface } from './Interfaces';
import type { handleProductChange } from './functionTypes';

export type CardsProps = { productsShow: ProductInterface[] };

export type NavBarProps = Omit<
  DefaultValuesFormInterface,
  'handleSelectName' | 'handleSelectLine'
>;
