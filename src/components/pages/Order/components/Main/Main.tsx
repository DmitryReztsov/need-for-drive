import React, {useState} from 'react';
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

  return (
    <main className={styles.main}>
      <Navigation stages={stages} click={setClickIndex} keyDown={setKeyIndex} />
      <div className={styles.body}>
        <Container className={styles.container}>
          <Creator index={activeIndex} />
          <Checkout />
        </Container>
      </div>
    </main>
  );
}

export default Main;
