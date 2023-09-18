import MySelect from '../select/MySelect';
import { Dropdown } from 'react-bootstrap';
import type { SearchBarInterface } from '../../types/Interfaces';

export default function SearchBar(props: SearchBarInterface): JSX.Element {
  const {
    valueProduct,
    handleFilterByMarca,
    handleFilterByDescripcion,
    handleProductChange,
  } = props;

  return (
    <div className="m-2">
      <Dropdown className="d-inline mx-2" autoClose="outside">
        <Dropdown.Toggle
          id="dropdown-autoclose-outside"
          variant="secondary"
          size="lg"
          style={{ width: '85%' }}
        >
          Buscar
        </Dropdown.Toggle>

        <Dropdown.Menu className="w-100">
          <Dropdown.Item href="#">
            <input
              className="form-control me-2 "
              type="search"
              placeholder="Referencia..."
              onChange={handleFilterByMarca}
            />
          </Dropdown.Item>
          <Dropdown.Item href="#">
            <input
              className="form-control me-2 w-100"
              type="search"
              placeholder="Descripcion..."
              onChange={handleFilterByDescripcion}
            />
          </Dropdown.Item>
          {/* <Dropdown.Item href="#">
            <MySelect value={valueProduct} onChange={handleProductChange} />
          </Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
