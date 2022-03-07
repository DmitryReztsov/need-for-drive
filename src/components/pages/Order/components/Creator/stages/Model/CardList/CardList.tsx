import React from 'react';
import styles from './CardList.module.scss';

interface ICardListProps {
  list: any [],
}

function CardList(props: ICardListProps) {
  return (
    <div className={styles.cardList}>

    </div>
  );
}

export default CardList;
