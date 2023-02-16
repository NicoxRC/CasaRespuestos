import { useState, useEffect } from 'react';
import { getProducts } from '../../services/getProducts';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'react-use-storage';
import Cards from '../../components/cards/Cards';
import NavBar from '../../components/navBar/NavBar';
import SearchBar from '../../components/searchBar/SearchBar';
import Pagination from '../../components/pagination/Pagination';
import Cookies from 'universal-cookie';
import DefaultValuesForm from '../../components/defaultValuesForm/DefaultValuesForm';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [productsFilter, setProductsFilter] = useState([]);
  const [productsShow, setProductsShow] = useState([]);
  const [valueProduct, setValueProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useLocalStorage('name');
  const [line, setLine] = useLocalStorage('line');
  const navigate = useNavigate();
  const cookies = new Cookies();
  const pageSize = 10;

  const handleFilterByMarca = (e: any) => {
    const productsFiltered: any = products.filter((el: any) =>
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

  const handleFilterByDescripcion = (e: any) => {
    const productsFiltered: any = products.filter((el: any) =>
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

  const handleProductChange = (tipe: any, value: any) => {
    setValueProduct(value);
    if (value.value === 'Todos') {
      setProductsFilter(products);
      setCurrentPage(1);
    } else {
      const productsFiltered = products?.filter(
        (el: any) => el.marca === value.value
      );
      setProductsFilter(productsFiltered);
      setCurrentPage(1);
    }
  };

  const handleSelectName = (e: any) => {
    setName(e.target.value);
  };

  const handleSelectLine = (e: any) => {
    setLine(e.target.value);
  };

  const handlePageChange = (page: any): any => {
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
      const response = await getProducts();
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
