import React from 'react';
import styles from './CardList.module.scss';
import CarCard from './CarCard/CarCard';
import {IModels} from '../../../../../mocks';

interface ICardListProps {
  list: IModels [],
}

function CardList(props: ICardListProps) {
  const {list} = props;
  return (
    <div className={styles.cardList}>
      {list.map((car) => {
        return <CarCard key={car.name} car={car} />;
      })}
    </div>
  );
}

export default CardList;
