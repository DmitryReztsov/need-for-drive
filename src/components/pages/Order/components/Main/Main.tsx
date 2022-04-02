import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate, useParams, useSearchParams} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import styles from './Main.module.scss';
import Creator from '../Creator/Creator';
import Checkout from '../Checkout/Checkout';
import Container from '../../../../common/Container/Container';
import Confirm from '../../../../common/modals/Confirm/Confirm';
import useStages from '../../../../../hooks/useStages';
import useDecodeParams from '../../../../../hooks/useDecodeParams';
import useTypedSelector from '../../../../../store/selectors';
import {ICategory} from '../../../../../store/Groups/category/types';
import setCategory from '../../../../../store/Groups/category/actions';
import useClearOrder from '../../../../../hooks/useClearOrder';
import {getOrder, postOrder} from '../../../../../store/api/order/actions';
import {ORDERSTATUSID} from '../../../../../store/api/order/types';
import {defaultCategory, defaultColor} from '../../../../../store/api/order/reducer';

export interface IStage {
  name: string,
  vars: any [],
  buttonLabel: string,
}

function Main() {
  const [searchParams] = useSearchParams();
  const {categories} = useTypedSelector((state) => state.category);
  const {cars} = useTypedSelector((state) => state.car);
  const {order, loading} = useTypedSelector((state) => state.order);
  const clearOrder = useClearOrder();
  const navigate = useNavigate();
  const {id} = useParams();
  const stages = useStages();
  const decodeParams = useDecodeParams();
  const dispatch = useDispatch();

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [availableIndex, setAvailableIndex] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);

  function acceptOrder() {
    dispatch(postOrder(order, ORDERSTATUSID.FULFILLED));
    setTimeout(() => setModal(!modal), 1000);
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
      dispatch(postOrder(order, ORDERSTATUSID.DECLINED));
      setActiveIndex(3);
    } else if (activeIndex === 3) {
      setModal(!modal);
    } else if (activeIndex < availableIndex) {
      setActiveIndex((state) => state + 1);
    }
  }

  function getCategories() {
    const array: ICategory [] = [];
    cars.forEach((car: any) => {
      if (!array.some((category) => category.id === car.categoryId.id)) {
        array.push({id: car.categoryId.id, name: car.categoryId.name});
      }
    });
    dispatch(setCategory(array));
  }

  // при загрузке страницы читаем URL, заполняем redux найденными полями
  useEffect(() => {
    if (id) {
      dispatch(getOrder(id));
      setActiveIndex(3);
    } else {
      searchParams.forEach((value, key) => {
        key && decodeParams(key, value);
      });
      // ставим таймаут чтобы при изменение редакса не коснулись последних двух useEffect
      setTimeout(() => setIsLoaded(true));
    }
  }, []);

  useEffect(() => {
    getCategories();
  }, []);
  useEffect(() => {
    decodeParams('color', searchParams.get('color') || defaultColor.id);
  }, [order.carId]);
  useEffect(() => {
    decodeParams('categoryId', searchParams.get('categoryId') || defaultCategory.id);
  }, [categories]);
  // нужен для возможности перехода на доступные шаги
  useEffect(() => {
    if (id) return;
    stages.forEach((stage, i, arr) => {
      if (i === 0 || !arr[i - 1].vars.some((elem) => !elem)) {
        setAvailableIndex(i);
      }
    });
  }, stages.map((stage) => stage.vars));

  // Последние два useEffect для сброса шагов при изменении данных
  // применяется только после загрузки данных из URL
  useEffect(() => {
    !id && isLoaded && !stages[0].vars[1] && clearOrder(2);
  }, [order.pointId]);
  useEffect(() => {
    !id && isLoaded && clearOrder(5);
  }, [order.carId]);
  useEffect(() => {
    if (!order.id) return;
    setTimeout(() => navigate(`/order/${order.id}`, {replace: true}));
  }, [order.id]);
  return (
    <main className={styles.main}>
      <nav className={styles.navigation}>
        <Container className={styles.container}>
          {id
            ? <div className={styles.number}>{`Заказ номер ${order.id}`}</div>
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
