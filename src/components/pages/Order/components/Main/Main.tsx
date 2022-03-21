import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate, useParams, useSearchParams} from 'react-router-dom';
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
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const {
    city, pickPoint, model, dateFrom, dateTo, tariff,
  } = useTypedSelector((state) => state.form);

  // Здесь храним название для навигации, переменные страниц заказа и текст кнопки
  const stages: IStage [] = [
    // Первое поле отвечает за название шага
    // Второе - за переменные типа required
    // Третье - за название кнопки
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
      vars: [dateFrom, dateTo, tariff],
      buttonLabel: 'Итого',
    },
    {
      name: 'Итого',
      vars: [],
      buttonLabel: 'Заказать',
    },
  ];

  // проверяем заполненность данных
  function setClickIndex(id: number) {
    if (id === 0 || !stages[id - 1].vars.includes('')) {
      setActiveIndex(id);
    }
  }

  // проверяем заполненность данных по клавише
  function setKeyIndex(e: React.KeyboardEvent<HTMLLIElement>, id: number) {
    if (e.code === 'Enter' && (id === 0 || !stages[id - 1].vars.includes(''))) {
      setActiveIndex(id);
    }
  }

  // обработчик нажатия кнопки
  function incrementIndex() {
    if (id) {
      navigate('/', {replace: true});
    } else if (activeIndex === 3) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate('/order/123456', {replace: true});
      }, 1000);
    } else if (!stages[activeIndex].vars.includes('')) {
      setActiveIndex((state) => state + 1);
    }
  }

  // при загрузке страницы смотрим на url, если есть - заполняем redux
  useEffect(() => {
    // при обновлении страницы считываем все параметры строки
    searchParams.forEach((value, key) => {
      dispatch(setForm(key, (key === 'dateFrom' || key === 'dateTo') ? +value : value));
    });
  }, []);

  return (
    <main className={styles.main}>
      <nav className={styles.navigation}>
        <Container className={styles.container}>
          {id
            ? <div className={styles.number}>{`Заказ номер ${id}`}</div>
            : (
              <Navigation
                stages={stages}
                activeIndex={activeIndex}
                click={setClickIndex}
                keyDown={setKeyIndex}
              />
            )}
        </Container>
      </nav>
      <form className={styles.body}>
        <Container className={styles.container}>
          <Creator
            index={activeIndex}
          />
          <Checkout
            click={incrementIndex}
            activeIndex={activeIndex}
            stages={stages}
            loading={loading}
          />
        </Container>
      </form>
    </main>
  );
}

export default Main;
