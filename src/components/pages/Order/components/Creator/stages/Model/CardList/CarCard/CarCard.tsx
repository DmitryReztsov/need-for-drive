import React from 'react';
import styles from './CarCard.module.scss';
import {IModels} from '../../../../../../mocks';

interface ICarCardProps {
  car: IModels,
}

function CarCard(props: ICarCardProps) {
  const {car} = props;
  return (
    <div className={styles.card} style={{backgroundImage: `url(${car.picture})`}}>
      <p>{car.name}</p>
      <p>{`${car.priceMin.toLocaleString()} - ${car.priceMax.toLocaleString()} ₽`}</p>
    </div>
  );
}

export default CarCard;
