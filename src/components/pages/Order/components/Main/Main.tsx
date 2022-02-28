import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useSearchParams} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import styles from './Main.module.scss';
import Creator from '../Creator/Creator';
import Checkout from '../Checkout/Checkout';
import Container from '../../../../common/Container/Container';
import setForm from '../../../../../store/form/actions';
import useTypedSelector from '../../../../../store/selectors';

export interface IStage {
  name: string,
  vars: any [],
  buttonLabel: string,
}

function Main() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const {
    city, pickPoint, model, color, rentTime, tariff,
  } = useTypedSelector((state) => state.form);

  // Здесь храним название для навигации, возможность навигации и текст кнопки
  const stages: IStage [] = [
    {
      name: 'Местоположение',
      vars: [city, pickPoint],
      buttonLabel: 'Выбрать модель',
    },
    {
      name: 'Модель',
      vars: [model],
      buttonLabel: 'Дополнительно',
    },
    {
      name: 'Дополнительно',
      vars: [color, rentTime, tariff],
      buttonLabel: 'Итого',
    },
    {
      name: 'Итого',
      vars: [],
      buttonLabel: 'Заказать',
    },
  ];

  function setClickIndex(id: number) {
    if (id === 0 || !stages[id - 1].vars.includes('')) {
      setActiveIndex(id);
    }
  }

  function setKeyIndex(e: React.KeyboardEvent<HTMLLIElement>, id: number) {
    if (e.code === 'Enter' && (id === 0 || !stages[id - 1].vars.includes(''))) {
      setActiveIndex(id);
    }
  }

  function incrementIndex() {
    if (!stages[activeIndex].vars.includes('')) {
      setActiveIndex((state) => state + 1);
    }
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
            stages={stages}
          />
        </Container>
      </form>
    </main>
  );
}

export default Main;
