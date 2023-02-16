import Card from '../card/Card';
import './Cards.css';

export default function Cards(props: any) {
  const { productsShow } = props;

  return (
    <div className="container">
      {productsShow?.map((el: any) => (
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
