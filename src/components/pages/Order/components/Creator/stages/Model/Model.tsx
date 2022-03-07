import React from 'react';
import styles from './Model.module.scss';
import RadioGroup from '../../../../../../common/inputs/RadioGroup/RadioGroup';
import CardList from './CardList/CardList';
import {models} from '../../../../mocks';

function Model() {
  function getCategories() {
    const categories = new Set<string>();
    models.forEach((model) => {
      categories.add(model.category);
    });
    return Array.from(categories);
  }

  return (
    <div className={styles.model}>
      <RadioGroup list={getCategories()} field="category" allTypes="Все модели" className={styles.radio} />
      <CardList />
    </div>
  );
}

export default Model;
