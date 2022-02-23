import React, {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {useFormik} from 'formik';
import Navigation from '../Navigation/Navigation';
import styles from './Main.module.scss';
import Creator from '../Creator/Creator';
import Checkout from '../Checkout/Checkout';
import Container from '../../../../common/Container/Container';

const stages = [
  'Местоположение',
  'Модель',
  'Дополнительно',
  'Итого',
];

function Main() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [searchParams] = useSearchParams();

  function setClickIndex(id: number) {
    setActiveIndex(id);
  }
  function setKeyIndex(e:React.KeyboardEvent<HTMLLIElement>, id: number) {
    if (e.code === 'Enter') {
      setActiveIndex(id);
    }
  }

  const form = useFormik({
    initialValues: {
      city: searchParams.get('city') || '',
      pickPoint: searchParams.get('pickPoint') || '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  function getClick(e: React.MouseEvent<HTMLLIElement>) {
    form.values.city = e.currentTarget.innerText.toString();
  }

  useEffect(() => {
    form.values.city = searchParams.get('city') || '';
    form.values.pickPoint = searchParams.get('pickPoint') || '';
  }, []);

  return (
    <main className={styles.main}>
      <Navigation stages={stages} index={activeIndex} click={setClickIndex} keyDown={setKeyIndex} />
      <form className={styles.body} onSubmit={form.handleSubmit}>
        <Container className={styles.container}>
          <Creator
            index={activeIndex}
            city={form.values.city}
            pickPoint={form.values.pickPoint}
            change={form.handleChange}
            getClick={getClick}
          />
          <Checkout />
        </Container>
      </form>
    </main>
  );
}

export default Main;
