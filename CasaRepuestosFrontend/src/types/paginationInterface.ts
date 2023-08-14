import { ProductInterface } from './productInterface';

export interface PaginationInterface {
  products: ProductInterface[];
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}
