import React from 'react';
import styles from './CarCard.module.scss';
import useTypedSelector from '../../../../../../../../../store/selectors';
import useAppendParams from '../../../../../../../../../hooks/useAppendParams';
import {ICar} from '../../../../../../../../../store/api/car/types';

interface ICarCardProps {
  car: ICar,
}

function CarCard(props: ICarCardProps) {
  const {car} = props;
  const {model} = useTypedSelector((state) => state.form);
  const appendParams = useAppendParams();

  function handleCLickCard(car: ICar) {
    appendParams('model', car.name);
    appendParams('priceMin', car.priceMin);
    appendParams('priceMax', car.priceMax);
  }
  function handleKeyCard(e:React.KeyboardEvent<HTMLDivElement>, car: ICar) {
    if (e.code === 'Enter') {
      appendParams('model', car.name);
      appendParams('priceMin', car.priceMin);
      appendParams('priceMax', car.priceMax);
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      className={`${styles.card} ${model === car.name ? styles.active : ''}`}
      style={{backgroundImage: `url(${car.path})`}}
      onClick={() => handleCLickCard(car)}
      onKeyDown={(e) => handleKeyCard(e, car)}
    >
      <p>{car.name}</p>
      <p>{`${car.priceMin.toLocaleString()} - ${car.priceMax.toLocaleString()} ₽`}</p>
    </div>
  );
}

export default CarCard;
