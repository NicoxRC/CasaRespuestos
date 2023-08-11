import Card from '../card/Card';
import type { ProductInterface } from '../../types/productInterface';
import type { CardsProps } from '../../types/cardsProps';
import './Cards.css';

export default function Cards(props: CardsProps): JSX.Element {
  const { productsShow } = props;

  return (
    <div className="container">
      {productsShow?.map((el: ProductInterface) => (
        <Card
          key={el.id}
          id={el.id}
          nombre={el.nombre}
          linea={el.linea}
          categoria={el.categoria}
          marca={el.marca}
          descripcion={el.descripcion}
          precio={el.precio}
          referencia={el.referencia}
          cantidad={el.cantidad}
        />
      ))}
    </div>
  );
}
