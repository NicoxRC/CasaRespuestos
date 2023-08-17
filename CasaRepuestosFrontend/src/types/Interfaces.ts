import type { handleProductChange } from './functionTypes';

export interface ProductInterface {
  id: string;
  nombre: string;
  linea: string;
  categoria: string;
  marca: string;
  descripcion: string;
  precio: number;
  referencia: string;
  cantidad: number;
}

export interface DefaultValuesFormInterface {
  name: string;
  line: string;
  handleSelectName: React.ChangeEventHandler<HTMLSelectElement>;
  handleSelectLine: React.ChangeEventHandler<HTMLSelectElement>;
}

export interface PaginationInterface {
  products: ProductInterface[];
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export interface SearchBarInterface {
  valueProduct: handleProductChange;
  handleFilterByMarca: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFilterByDescripcion: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleProductChange: (value: handleProductChange) => void;
}
