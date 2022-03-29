import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import styles from './Model.module.scss';
import RadioGroup from '../../../../../../common/inputs/RadioGroup/RadioGroup';
import CardList from './CardList/CardList';
import useTypedSelector from '../../../../../../../store/selectors';
import setCategory from '../../../../../../../store/Groups/category/actions';
import {ICategory} from '../../../../../../../store/Groups/category/types';

function Model() {
  const {categoryId} = useTypedSelector((state) => state.form);
  const {categories} = useTypedSelector((state) => state.category);
  const {cars} = useTypedSelector((state) => state.car);
  const dispatch = useDispatch();

  function getCategories() {
    const array: ICategory [] = [];
    cars.forEach((car) => {
      if (!array.some((category) => category.id === car.categoryId.id)) {
        array.push({id: car.categoryId.id, name: car.categoryId.name});
      }
    });
    dispatch(setCategory(array));
  }

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className={styles.model}>
      <RadioGroup
        list={categories}
        field="categoryId"
        allTypes={{id: '-1', name: 'Все модели'}}
        defaultValue={categoryId}
        className={styles.radio}
      />
      <CardList list={cars} filter={categoryId} />
    </div>
  );
}

export default Model;
