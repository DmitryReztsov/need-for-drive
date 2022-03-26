import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate, useParams, useSearchParams} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import styles from './Main.module.scss';
import Creator from '../Creator/Creator';
import Checkout from '../Checkout/Checkout';
import Container from '../../../../common/Container/Container';
import setForm from '../../../../../store/form/actions';
import Confirm from '../../../../common/modals/Confirm/Confirm';
import useClearForm from '../../../../../hooks/useClearForm';
import useStages from '../../../../../hooks/useStages';

export interface IStage {
  name: string,
  vars: any [],
  buttonLabel: string,
}

function Main() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const clearForm = useClearForm();
  const navigate = useNavigate();
  const {id} = useParams();
  const stages = useStages();

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [availableIndex, setAvailableIndex] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);

  function acceptOrder() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/order/123456', {replace: true});
      setModal(!modal);
    }, 1000);
  }

  // проверяем заполненность данных
  function setClickIndex(id: number) {
    id <= availableIndex && setActiveIndex(id);
  }

  // проверяем заполненность данных по клавише
  function setKeyIndex(e: React.KeyboardEvent<HTMLLIElement>, id: number) {
    (e.code === 'Enter' && (id <= availableIndex)) && setActiveIndex(id);
  }

  // обработчик нажатия кнопки
  function incrementIndex() {
    if (id) {
      navigate('/', {replace: true});
    } else if (activeIndex === 3) {
      setModal(!modal);
    } else if (activeIndex < availableIndex) {
      setActiveIndex((state) => state + 1);
    }
  }

  // при загрузке страницы читаем URL, заполняем redux найденными полями
  useEffect(() => {
    if (id) {
      setActiveIndex(3);
    } else {
      searchParams.forEach((value, key) => {
        dispatch(setForm(key, value));
      });
      // ставим таймаут чтобы при изменение редакса не коснулись последних двух useEffect
      setTimeout(() => setIsLoaded(true));
    }
    // при обновлении страницы считываем все параметры строки
  }, []);

  // нужен для возможности перехода на доступные шаги
  useEffect(() => {
    if (id) return;
    stages.forEach((stage, i, arr) => {
      if (i === 0 || !arr[i - 1].vars.includes('')) {
        setAvailableIndex(i);
      }
    });
  }, stages.map((stage) => stage.vars));

  // Последние два useEffect для сброса шагов при изменении данных
  // доступно только после загрузки данных из URL
  useEffect(() => {
    !id && isLoaded && clearForm(2);
  }, stages[0].vars);

  useEffect(() => {
    !id && isLoaded && clearForm(6);
  }, stages[1].vars);
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
                availableIndex={availableIndex}
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
          />
        </Container>
      </form>
      {modal && <Confirm accept={acceptOrder} deny={() => setModal(!modal)} loading={loading} />}
    </main>
  );
}

export default Main;
