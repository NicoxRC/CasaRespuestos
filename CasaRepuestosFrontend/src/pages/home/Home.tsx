import Cards from '../../components/cards/Cards';
import NavBar from '../../components/navBar/NavBar';
import SearchBar from '../../components/searchBar/SearchBar';
import Pagination from '../../components/pagination/Pagination';
import Cookies from 'universal-cookie';
import DefaultValuesForm from '../../components/defaultValuesForm/DefaultValuesForm';
import { useState, useEffect } from 'react';
import { getProducts } from '../../services/getProducts';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'react-use-storage';
import type { HandleProductChangeType } from '../../types/types';
import type { ProductInterface } from '../../types/Interfaces';

export default function Home(): JSX.Element {
  const cookies: Cookies = new Cookies();
  const navigate: NavigateFunction = useNavigate();
  const pageSize: number = 10;

  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [productsFilter, setProductsFilter] = useState<ProductInterface[]>([]);
  const [productsShow, setProductsShow] = useState<ProductInterface[]>([]);
  const [valueProduct, setValueProduct] = useState<HandleProductChangeType>({
    value: '',
  });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [name, setName] = useLocalStorage<string>('name');
  const [line, setLine] = useLocalStorage<string>('line');

  const handleFilterByMarca = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const productsFiltered: ProductInterface[] = products.filter(
      (el: ProductInterface) =>
        el.referencia
          .trim()
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase())
    );
    if (productsFiltered.length) {
      setProductsFilter(productsFiltered);
      setCurrentPage(1);
    } else {
      setProductsFilter(products);
      setCurrentPage(1);
    }
  };

  const handleFilterByDescripcion = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const productsFiltered: ProductInterface[] = products.filter(
      (el: ProductInterface) =>
        el.descripcion
          .trim()
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase())
    );
    if (productsFiltered.length) {
      setProductsFilter(productsFiltered);
      setCurrentPage(1);
    } else {
      setProductsFilter(products);
      setCurrentPage(1);
    }
  };

  const handleProductChange = (value: HandleProductChangeType): void => {
    setValueProduct(value);

    if (value.value === 'Todos') {
      setProductsFilter(products);
      setCurrentPage(1);
    } else {
      const productsFiltered: ProductInterface[] = products?.filter(
        (el: ProductInterface) => el.marca === value.value
      );
      setProductsFilter(productsFiltered);
      setCurrentPage(1);
    }
  };

  const handleSelectName = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setName(e.target.value);
  };

  const handleSelectLine = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setLine(e.target.value);
  };

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setProductsShow(
      productsFilter?.slice(
        currentPage * pageSize - pageSize,
        currentPage * pageSize
      )
    );
  }, [currentPage, pageSize, productsFilter]);

  useEffect(() => {
    (async () => {
      const response: ProductInterface[] = await getProducts();
      setProducts(response);
      setProductsFilter(response);
      setCurrentPage(1);
    })();
  }, []);

  useEffect(() => {
    if (!cookies.get('user')) {
      navigate('/');
    }
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center w-100">
      <div
        className="d-flex flex-column justify-content-center pb-3"
        style={{ backgroundColor: '#212529' }}
      >
        <NavBar name={name} line={line} />
        <div className="align-self-center w-50">
          <SearchBar
            valueProduct={valueProduct}
            handleFilterByMarca={handleFilterByMarca}
            handleFilterByDescripcion={handleFilterByDescripcion}
            handleProductChange={handleProductChange}
          />
        </div>
        <DefaultValuesForm
          name={name}
          line={line}
          handleSelectName={handleSelectName}
          handleSelectLine={handleSelectLine}
        />
      </div>
      <Pagination
        products={productsFilter}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <Cards productsShow={productsShow} />
    </div>
  );
}
