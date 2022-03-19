import React from 'react';
import styles from './CarCard.module.scss';
import {IModels} from '../../../../../../mocks';
import useTypedSelector from '../../../../../../../../../store/selectors';
import useAppendParams from '../../../../../../../../../hooks/useAppendParams';

interface ICarCardProps {
  car: IModels,
}

function CarCard(props: ICarCardProps) {
  const {car} = props;
  const {model} = useTypedSelector((state) => state.form);
  const appendParams = useAppendParams();

  function handleCLickCard(car: IModels) {
    appendParams('model', car.name);
    appendParams('priceMin', car.priceMin);
    appendParams('priceMax', car.priceMax);
  }
  function handleKeyCard(e:React.KeyboardEvent<HTMLDivElement>, car: IModels) {
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
      style={{backgroundImage: `url(${car.picture})`}}
      onClick={() => handleCLickCard(car)}
      onKeyDown={(e) => handleKeyCard(e, car)}
    >
      <p>{car.name}</p>
      <p>{`${car.priceMin.toLocaleString()} - ${car.priceMax.toLocaleString()} ₽`}</p>
    </div>
  );
}

export default CarCard;
