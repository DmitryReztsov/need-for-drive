import React from 'react';
import styles from './CardList.module.scss';
import CarCard from './CarCard/CarCard';
import {ICar} from '../../../../../../../../store/api/car/types';

interface ICardListProps {
  list: ICar [],
  filter?: string,
}

function CardList(props: ICardListProps) {
  const {list, filter} = props;
  return (
    <div className={styles.cardList}>
      {list
        .filter((car) => car.categoryId.name.includes(filter as string))
        .map((car) => <CarCard key={car.id} car={car} />)}
    </div>
  );
}

export default CardList;
