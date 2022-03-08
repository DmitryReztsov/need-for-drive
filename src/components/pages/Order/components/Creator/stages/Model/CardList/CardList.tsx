import React from 'react';
import styles from './CardList.module.scss';
import CarCard from './CarCard/CarCard';
import {IModels} from '../../../../../mocks';

interface ICardListProps {
  list: IModels [],
  filter?: string,
}

function CardList(props: ICardListProps) {
  const {list, filter} = props;
  return (
    <div className={styles.cardList}>
      {list
        .filter((car) => car.category.includes(filter as string))
        .map((car) => <CarCard key={car.name} car={car}/>)}
    </div>
  );
}

export default CardList;
