import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../../services/getProducts';
import Cookies from 'universal-cookie';
import ExportExcel from 'react-export-excel';
import Swal from 'sweetalert2';

export default function NavBar(props: any) {
  const { name, line } = props;

  const [products, setProducts] = useState([]);
  const cookies = new Cookies();
  const navigate = useNavigate();

  const ExcelFile = ExportExcel.ExcelFile;
  const ExcelSheet = ExportExcel.ExcelSheet;
  const ExcelColumn = ExportExcel.ExcelColumn;

  const handleClickCreate = () => {
    if (name && line) {
      navigate('/newProduct', { state: { name, line } });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Falta nombre y linea',
      });
    }
  };

  const handleClickSession = () => {
    cookies.remove('id', { path: '/' });
    cookies.remove('user', { path: '/' });
    navigate('/');
  };

  useEffect(() => {
    (async () => {
      const response = await getProducts();
      setProducts(response);
    })();
  }, []);

  return (
    <nav className="navbar bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <h1 style={{ color: 'white', fontWeight: 'bolder' }}>
          Casa de los respuestos
        </h1>
        <h3 style={{ color: 'white', fontWeight: 'bolder' }}>inventario</h3>
        <div className="d-flex">
          <ExcelFile
            element={
              <button className="btn btn-outline-warning m-2 p-2" type="button">
                Generar excel
              </button>
            }
            filename="Inventario Casa de los Repuestos"
          >
            <ExcelSheet data={products} name="Inventario">
              <ExcelColumn label="CODIGO_SICAF" value="" />
              <ExcelColumn label="REFERENCIA" value="referencia" />
              <ExcelColumn label="CLASE" value="" />
              <ExcelColumn label="BARRAS" value="" />
              <ExcelColumn label="DESCRIPCION" value="descripcion" />
              <ExcelColumn label="COSTO" value="precio" />
              <ExcelColumn label="PRECIO" value="precio" />
              <ExcelColumn label="DEPTO" value="" />
              <ExcelColumn label="NOMBRE_DEPTO" value="linea" />
              <ExcelColumn label="GRUPO" value="" />
              <ExcelColumn label="NOMBRE_GRUPO" value="categoria" />
              <ExcelColumn label="LINEA" value="" />
              <ExcelColumn label="NOMBRE_LINEA" value="categoria" />
              <ExcelColumn label="MARCA" value="" />
              <ExcelColumn label="NOM_MARCA" value="marca" />
              <ExcelColumn label="TALLA" value="" />
              <ExcelColumn label="IVA" value="" />
              <ExcelColumn label="Unidad" value="unidad" />
              <ExcelColumn label="DCTOMAX" value="" />
              <ExcelColumn label="STOCKMIN" value="" />
              <ExcelColumn label="STOCKMAX" value="" />
              <ExcelColumn label="COLOR" value="" />
              <ExcelColumn label="PROVEEDOR" value="" />
              <ExcelColumn label="CONTEO" value="cantidad" />
              <ExcelColumn label="UBICACION" value="" />
              <ExcelColumn label="CUM" value="" />
              <ExcelColumn label="REGISTRO" value="" />
              <ExcelColumn label="LOTE" value="" />
              <ExcelColumn label="VENCIMIENTO" value="" />
            </ExcelSheet>
          </ExcelFile>
          <button
            className="btn btn-outline-success m-2 p-2"
            type="button"
            onClick={handleClickCreate}
          >
            Crear Producto
          </button>
          <button
            className="btn btn-outline-danger m-2 p-2"
            type="button"
            onClick={handleClickSession}
          >
            Cerrar sesion
          </button>
        </div>
      </div>
    </nav>
  );
}
