import Swal from 'sweetalert2';
import Cookies from 'universal-cookie';
import MySelect from '../../components/select/MySelect';
import { useEffect } from 'react';
import { Formik, Field } from 'formik';
import {
  Location,
  NavigateFunction,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { postProduct } from '../../services/postProducts';
import { categories } from '../../utils/categories';
import type { ProductFormType } from '../../types/types';
import './NewProduct.css';

export default function NewProduct(): JSX.Element {
  const cookies: Cookies = new Cookies();
  const location: Location = useLocation();
  const navigate: NavigateFunction = useNavigate();
  const initialValues: ProductFormType = {
    nombre: '',
    linea: '',
    categoria: '',
    marca: '',
    descripcion: '',
    precio: 0,
    referencia: '',
    cantidad: 0,
  };

  const { name, line } = location.state;

  const handleClickBack = (): void => {
    navigate('/');
  };

  const handleSubmit = async (values: ProductFormType): Promise<void> => {
    try {
      values.nombre = name;
      values.linea = line;
      await postProduct(values);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El producto a sido creado',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/home');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se puedo crear el producto, faltan campos o ya existe la referencia.',
      });
    }
  };

  useEffect(() => {
    if (!cookies.get('user')) {
      navigate('/');
    }
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vw-100">
      <div className="mt-5">
        <button onClick={handleClickBack} className="btn btn-outline-dark">
          Volver
        </button>
      </div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ handleSubmit, values, setFieldValue }) => (
          <form
            className="d-flex justify-content-center p-5 vw-100 h-100"
            onSubmit={handleSubmit}
          >
            <div className="container_form bg-dark wh-100">
              <label className="form-label mt-3">Categoria:</label>
              <Field
                component="select"
                id="categoria"
                name="categoria"
                className="form-select mt-3"
              >
                <option hidden>Respuesta...</option>
                {categories.map((el: string) => (
                  <option value={el} key={el}>
                    {el}
                  </option>
                ))}
              </Field>
              <label className="form-label mt-3">Marca:</label>
              <MySelect value={values.marca} onChange={setFieldValue} />
              <label className="form-label mt-3">Descripcion:</label>
              <Field
                type="text"
                name="descripcion"
                placeholder="Respuesta..."
                className="form-control mt-3"
              />
              <label className="form-label mt-3">Precio:</label>
              <Field
                type="number"
                name="precio"
                placeholder="Respuesta..."
                className="form-control mt-3"
              />
              <label className="form-label mt-3">Referencia:</label>
              <Field
                type="text"
                name="referencia"
                placeholder="Respuesta..."
                className="form-control mt-3"
              />
              <label className="form-label mt-3">Cantidad:</label>
              <Field
                type="number"
                name="cantidad"
                placeholder="Respuesta..."
                className="form-control mt-3"
              />
              <button type="submit" className="btn btn-success mt-3 mb-3">
                Crear Producto
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
