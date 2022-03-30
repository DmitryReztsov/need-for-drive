import React from 'react';
import styles from './Model.module.scss';
import RadioGroup from '../../../../../../common/inputs/RadioGroup/RadioGroup';
import CardList from './CardList/CardList';
import useTypedSelector from '../../../../../../../store/selectors';
import {defaultCategory} from '../../../../../../../store/form/reducer';

function Model() {
  const {categoryId} = useTypedSelector((state) => state.form);
  const {categories} = useTypedSelector((state) => state.category);
  const {cars} = useTypedSelector((state) => state.car);

  return (
    <div className={styles.model}>
      <RadioGroup
        list={categories}
        field="categoryId"
        allTypes={defaultCategory}
        defaultValue={categoryId}
        className={styles.radio}
      />
      <CardList list={cars} filter={categoryId} />
    </div>
  );
}

export default Model;
