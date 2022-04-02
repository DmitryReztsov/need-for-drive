import React from 'react';
import styles from './CardList.module.scss';
import CarCard from './CarCard/CarCard';
import {ICar} from '../../../../../../../../store/api/car/types';
import {ICategory} from '../../../../../../../../store/Groups/category/types';
import {defaultCategory} from '../../../../../../../../store/api/order/reducer';

interface ICardListProps {
  list: ICar [],
  filter?: ICategory | null,
}

function CardList(props: ICardListProps) {
  const {list, filter} = props;
  return (
    <div className={styles.cardList}>
      {list
        .filter((car) => car.categoryId.name.includes(filter?.id === defaultCategory.id ? '' : filter?.name as string))
        .map((car) => <CarCard key={car.id} car={car} />)}
    </div>
  );
}

export default CardList;
