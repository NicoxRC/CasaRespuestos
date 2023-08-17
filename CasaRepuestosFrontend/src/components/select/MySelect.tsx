import Select from 'react-select';
import { marca } from '../../utils/marca';

export default function MySelect(props: any): JSX.Element {
  const { onChange, value } = props;

  const handleChange = (value: string): void => {
    onChange('marca', value);
  };

  return (
    <div className="w-100">
      <Select
        id="marca"
        options={marca}
        onChange={handleChange}
        value={value}
        placeholder="Marca"
      />
    </div>
  );
}
