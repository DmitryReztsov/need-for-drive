import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import styles from './Model.module.scss';
import RadioGroup from '../../../../../../common/inputs/RadioGroup/RadioGroup';
import CardList from './CardList/CardList';
import useAppendParams from '../../../../../../../hooks/useAppendParams';
import useTypedSelector from '../../../../../../../store/selectors';
import getCar from '../../../../../../../store/api/car/actions';

function Model() {
  const appendParams = useAppendParams();
  const {category} = useTypedSelector((state) => state.form);
  const {cars} = useTypedSelector((state) => state.car);
  const dispatch = useDispatch();

  function getCategories() {
    const categories = new Set<string>();
    cars.forEach((car) => {
      categories.add(car.categoryId.name);
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

  useEffect(() => {
    dispatch(getCar());
  }, []);
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
      <CardList list={cars} filter={category} />
    </div>
  );
}

export default Model;
