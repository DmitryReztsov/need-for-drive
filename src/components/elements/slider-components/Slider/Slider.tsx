import React, {useEffect, useRef, useState} from 'react';
import styles from './Slider.module.scss';
import Slide from '../Slide/Slide';

interface ContentProps {
  translate: string | number
}

interface SliderProps {
  slides: string [],
}

function Slider({slides}: SliderProps): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  const [state] = useState<ContentProps>({
    translate: 0,
  });

  const {translate} = state;
  useEffect(() => {
    console.log(ref?.current?.clientWidth);
  });
  return (
    <div className={styles.slider}>
      <div className={styles.content} style={{transform: `translateX(-${translate}px)`, width: ref?.current?.clientWidth}}>
        {slides.map((slide, i) => <Slide refProp={ref} key={slides[i]} src={slides[i]} />)}
      </div>
    </div>
  );
}

export default Slider;
