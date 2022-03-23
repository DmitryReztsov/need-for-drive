import React from 'react';
import styles from './Model.module.scss';
import RadioGroup from '../../../../../../common/inputs/RadioGroup/RadioGroup';
import CardList from './CardList/CardList';
import {models} from '../../../../mocks';
import useAppendParams from '../../../../../../../hooks/useAppendParams';
import useTypedSelector from '../../../../../../../store/selectors';

function Model() {
  const appendParams = useAppendParams();
  const {category} = useTypedSelector((state) => state.form);

  function getCategories() {
    const categories = new Set<string>();
    models.forEach((model) => {
      categories.add(model.category);
    });
    return Array.from(categories);
  }

  function clickCategory(e: React.MouseEvent<HTMLInputElement>) {
    appendParams('category', e.currentTarget.value);
  }

  function enterCategory(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.code === 'Enter') {
      appendParams('category', e.currentTarget.value);
    }
  }

  return (
    <div className={styles.model}>
      <RadioGroup
        list={getCategories()}
        field="category"
        allTypes="Все модели"
        defaultValue={category}
        className={styles.radio}
        click={clickCategory}
        keyDown={enterCategory}
      />
      <CardList list={models} filter={category} />
    </div>
  );
}

export default Model;
