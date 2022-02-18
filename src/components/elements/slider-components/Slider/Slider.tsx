import React, {useState} from 'react';
import styles from './Slider.module.scss';
import Slide from '../Slide/Slide';
import parking from '../../../../content/slider-img/parking.png';
import insurance from '../../../../content/slider-img/insurance.png';
import fuel from '../../../../content/slider-img/fuel.png';
import service from '../../../../content/slider-img/service.png';

const images = [
  parking,
  insurance,
  fuel,
  service,
];

interface ContentProps {
  translate: string | number,
}

function Slider() {
  const getWidth = () => images[0].innerWidth;

  const [state] = useState<ContentProps>({
    translate: 0,
  });

  const {translate} = state;

  return (
    <div className={styles.slider}>
      <div className={styles.content} style={{transform: `translateX(${translate})`, width: getWidth()}}>
        <Slide src={images[0]} />
      </div>
    </div>
  );
}

export default Slider;
