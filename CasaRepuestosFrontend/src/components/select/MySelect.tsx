import Select from 'react-select';
import { marca } from '../../utils/marca';
export default function MySelect(props: any) {
  const handleChange = (value: string) => {
    props.onChange('marca', value);
  };

  return (
    <div className="w-100">
      <Select
        id="marca"
        options={marca}
        onChange={handleChange}
        value={props.value}
        placeholder="Marca"
      />
    </div>
  );
}
