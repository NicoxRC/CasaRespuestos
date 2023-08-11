import Swal from 'sweetalert2';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { deleteProduct } from '../../services/deleteProduct';
import type { ProductInterface } from '../../types/productInterface';

export default function Card(props: ProductInterface): JSX.Element {
  const {
    id,
    nombre,
    linea,
    marca,
    categoria,
    descripcion,
    precio,
    referencia,
    cantidad,
  } = props;

  const navigate: NavigateFunction = useNavigate();

  const handleEliminate = async (): Promise<void> => {
    Swal.fire({
      title: 'Estas seguro?',
      text: 'No se puede revertir.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!',
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          deleteProduct(id);
          Swal.fire('Borrado!', 'Tu archivo ha sido borrado!!', 'success');
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salio mal!',
          });
        }
      }
    });
  };

  const handleClickEdit = async (): Promise<void> => {
    navigate('/editProduct', {
      state: {
        id,
        linea,
        categoria,
        descripcion,
        precio,
        referencia,
        cantidad,
      },
    });
  };

  return (
    <div className="card text-bg-dark" style={{ width: '18rem' }}>
      <div className="card-body">
        <h4 className="card-title fw-bolder" style={{ color: 'white' }}>
          {linea.toUpperCase()}
        </h4>
        <h6 className="card-subtitle mb-2 text-muted fw-bolder">{nombre}</h6>
        <p className="card-text" style={{ color: 'white' }}>
          <b>Categoria:</b> {categoria}
        </p>
        <p className="card-text" style={{ color: 'white' }}>
          <b>Marca:</b> {marca}
        </p>
        <p className="card-text" style={{ color: 'white' }}>
          <b>Descripcion:</b> {descripcion}
        </p>
        <p className="card-text" style={{ color: 'white' }}>
          <b>Precio:</b> {precio}
        </p>
        <p className="card-text" style={{ color: 'white' }}>
          <b>Referencia:</b> {referencia}
        </p>
        <p className="card-text" style={{ color: 'white' }}>
          <b>Cantidad:</b> {cantidad}
        </p>
        <button
          type="button"
          className="btn btn-outline-warning me-2"
          onClick={handleClickEdit}
        >
          Editar
        </button>
        <button
          onClick={handleEliminate}
          type="button"
          className="btn btn-outline-danger"
        >
          Borrar Producto
        </button>
      </div>
    </div>
  );
}
