import React from 'react';
import styles from './CarCard.module.scss';
import useTypedSelector from '../../../../../../../../../store/selectors';
import useAppendParams from '../../../../../../../../../hooks/useAppendParams';
import {ICar} from '../../../../../../../../../store/api/car/types';
import noImage from '../../../../../../../../../content/error/no_image_available.png';

interface ICarCardProps {
  car: ICar,
}

function CarCard(props: ICarCardProps) {
  const {car} = props;
  const {carId} = useTypedSelector((state) => state.form);
  const appendParams = useAppendParams();

  function handleCLickCard(car: ICar) {
    appendParams('carId', car);
  }
  function handleKeyCard(e:React.KeyboardEvent<HTMLDivElement>, car: ICar) {
    if (e.code === 'Enter') {
      appendParams('carId', car);
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      className={`${styles.card} ${carId?.id === car.id ? styles.active : ''}`}
      style={{backgroundImage: `url(${car.path.includes('data:') ? car.path : noImage})`}}
      onClick={() => handleCLickCard(car)}
      onKeyDown={(e) => handleKeyCard(e, car)}
    >
      <p>{car.name}</p>
      <p>{`${car.priceMin.toLocaleString()} - ${car.priceMax.toLocaleString()} ₽`}</p>
    </div>
  );
}

export default CarCard;
