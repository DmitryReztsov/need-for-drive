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

const stages = [
  'Местоположение',
  'Модель',
  'Дополнительно',
  'Итого',
];

function Main() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const {city, pickPoint} = useTypedSelector((state) => state.form);

  function setClickIndex(id: number) {
    setActiveIndex(id);
  }

  function setKeyIndex(e:React.KeyboardEvent<HTMLLIElement>, id: number) {
    if (e.code === 'Enter') {
      setActiveIndex(id);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(JSON.stringify({city, pickPoint}, null, 2));
  }

  useEffect(() => {
    // при обновлении страницы считываем все параметры строки
    searchParams.forEach((value, key) => dispatch(setForm(key, value)));
  }, []);

  return (
    <main className={styles.main}>
      <Navigation stages={stages} index={activeIndex} click={setClickIndex} keyDown={setKeyIndex} />
      <form className={styles.body} onSubmit={handleSubmit}>
        <Container className={styles.container}>
          <Creator
            index={activeIndex}
          />
          <Checkout />
        </Container>
      </form>
    </main>
  );
}

export default Main;
