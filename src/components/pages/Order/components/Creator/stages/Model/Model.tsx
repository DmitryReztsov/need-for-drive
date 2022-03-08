import React, {useState} from 'react';
import styles from './Model.module.scss';
import RadioGroup from '../../../../../../common/inputs/RadioGroup/RadioGroup';
import CardList from './CardList/CardList';
import {models} from '../../../../mocks';

function Model() {
  const [category, setCategory] = useState<string>('');

  function getCategories() {
    const categories = new Set<string>();
    models.forEach((model) => {
      categories.add(model.category);
    });
    return Array.from(categories);
  }

  function clickCategory(e: React.MouseEvent<HTMLInputElement>) {
    setCategory(e.currentTarget.value);
  }

  function enterCategory(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.code === 'Enter') {
      setCategory(e.currentTarget.value);
    }
  }

  return (
    <div className={styles.model}>
      <RadioGroup
        list={getCategories()}
        field="category"
        allTypes="Все модели"
        className={styles.radio}
        click={clickCategory}
        keyDown={enterCategory}
      />
      <CardList list={models} filter={category} />
    </div>
  );
}

export default Model;
