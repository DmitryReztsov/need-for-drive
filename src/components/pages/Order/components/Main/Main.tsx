import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useSearchParams} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import styles from './Main.module.scss';
import Creator from '../Creator/Creator';
import Checkout from '../Checkout/Checkout';
import Container from '../../../../common/Container/Container';
import useTypedSelector from '../../../../../store/selectors';
import setForm from '../../../../../store/form/actions';

export interface IFields {
  [key: string]: string,
}

function Main() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const {city, pickPoint, model} = useTypedSelector((state) => state.form);

  const stages = [
    'Местоположение',
    'Модель',
    'Дополнительно',
    'Итого',
  ];

  // массив внутри, так как хук можно вызвать только внутри компонентов
  const fields : IFields [] = [
    {
      label: 'Пункт выдачи',
      value: (city && pickPoint) ? `${city}, ${pickPoint}` : '',
      stage: 'Местоположение',
      next: 'Выбрать модель',
    },
    {
      label: 'Модель',
      value: (model) ? `${model}` : '',
      stage: 'Модель',
      next: 'Дополнительно',
    },
    {
      label: 'Полный бак',
      value: '',
      stage: 'Дополнительно',
      next: 'Итого',
    },
    {
      label: '...',
      value: '',
      stage: 'Итого',
      next: 'Заказать',
    },
  ];

  function setClickIndex(id: number) {
    setActiveIndex(id);
  }

  function setKeyIndex(e: React.KeyboardEvent<HTMLLIElement>, id: number) {
    if (e.code === 'Enter') {
      setActiveIndex(id);
    }
  }

  function incrementIndex() {
    setActiveIndex((state) => state + 1);
  }

  useEffect(() => {
    // при обновлении страницы считываем все параметры строки
    searchParams.forEach((value, key) => {
      dispatch(setForm(key, value));
    });
  }, []);

  return (
    <main className={styles.main}>
      <Navigation
        stages={stages}
        activeIndex={activeIndex}
        click={setClickIndex}
        keyDown={setKeyIndex}
      />
      <form className={styles.body}>
        <Container className={styles.container}>
          <Creator
            index={activeIndex}
          />
          <Checkout
            click={incrementIndex}
            activeIndex={activeIndex}
            fields={fields}
          />
        </Container>
      </form>
    </main>
  );
}

export default Main;
