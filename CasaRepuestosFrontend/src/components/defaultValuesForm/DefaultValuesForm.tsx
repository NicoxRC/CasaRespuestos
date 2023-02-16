import { lines } from '../../utils/lines';
import { names } from '../../utils/names';

export default function DefaultValuesForm(props: any) {
  const { name, line, handleSelectName, handleSelectLine } = props;

  return (
    <div>
      <div className="d-flex align-items-center mt-2 ms-1 me-2">
        <select
          className="form-select ms-2 me-3 w-50"
          onChange={handleSelectName}
          value={name}
        >
          <option hidden>Nombre</option>
          {names.map((el: string) => (
            <option value={el} key={el}>
              {el}
            </option>
          ))}
        </select>
        <div className="w-50">
          <select
            className="form-select me-1"
            onChange={handleSelectLine}
            value={line}
          >
            <option hidden>Linea</option>
            {lines.map((el: string) => (
              <option value={el} key={el}>
                {el}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
