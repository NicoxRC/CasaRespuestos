import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';
import { Formik, Form, Field } from 'formik';
import { useEffect } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { getUser } from '../../services/getUser';
import type { UserInterface } from '../../types/Interfaces';
import type { UserFormType } from '../../types/types';
import './Login.css';

export default function Login(): JSX.Element {
  const cookies: Cookies = new Cookies();
  const navigate: NavigateFunction = useNavigate();
  const initialValues: UserFormType = { user: '', password: '' };

  const handleSubmit = async (values: UserFormType): Promise<void> => {
    try {
      const response: UserInterface[] = await getUser(values);
      if (response?.length > 0) {
        const res: UserInterface = response[0];
        cookies.set('id', res.id, { path: '/' });
        cookies.set('user', res.user, {
          path: '/',
        });
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Bienvenido ${res.user}`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/home');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario incorrecto',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (cookies.get('user')) {
      navigate('/home');
    }
  }, []);

  return (
    <div className="containerPrincipal">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="d-flex justify-content-center align-items-center p-5 w-100 m-5 h-100">
          <div className="container_form bg-dark">
            <label className="form-label mt-3">Usuario:</label>
            <Field
              type="text"
              name="user"
              placeholder="Respuesta..."
              className="form-control mt-3"
            />
            <label className="form-label mt-3">Contraseña:</label>
            <Field
              type="password"
              name="password"
              placeholder="Respuesta..."
              className="form-control mt-3"
            />
            <button type="submit" className="btn btn-success mt-3 mb-3">
              Iniciar Sesion
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
