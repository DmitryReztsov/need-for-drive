import React, {useState} from 'react';
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
      city: '',
      pickPoint: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
          />
          <Checkout />
        </Container>
      </form>
    </main>
  );
}

export default Main;
