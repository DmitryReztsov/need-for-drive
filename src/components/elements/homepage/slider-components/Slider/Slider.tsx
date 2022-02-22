import React, {useEffect, useRef, useState} from 'react';
import styles from './Slider.module.scss';
import Slide from '../Slide/Slide';
import {ReactComponent as LeftArrow} from '../../../../../content/svg/left-arrow.svg';
import {ReactComponent as RightArrow} from '../../../../../content/svg/right-arrow.svg';
import Dots from '../Dots/Dots';
import {ISlide} from '../../../../pages/Homepage/slides';

interface ContentProps {
  activeIndex: number,
  translate: string | number,
  width: number
}

interface ISliderProps {
  slides: ISlide [],
}

function Slider({slides}: ISliderProps): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<ContentProps>({
    activeIndex: 0,
    translate: 0,
    width: 0,
  });

  const {activeIndex, translate, width} = state;

  // использовался гайд по слайдеру из песочницы с адаптацией по стилям sass:
  // https://betterprogramming.pub/build-an-image-slider-with-react-es6-264368de68e4

  function prevSlide() {
    const condition = activeIndex === 0;
    return setState({
      ...state,
      activeIndex: condition ? slides.length - 1 : activeIndex - 1,
      translate: condition ? (slides.length - 1) * width : (activeIndex - 1) * width,
    });
  }

  function prevSlideEnter(e: React.KeyboardEvent<HTMLDivElement>) {
    const condition = activeIndex === 0;
    if (e.code === 'Enter') {
      return setState({
        ...state,
        activeIndex: condition ? slides.length - 1 : activeIndex - 1,
        translate: condition ? (slides.length - 1) * width : (activeIndex - 1) * width,
      });
    }
    return setState({...state});
  }

  function nextSlide() {
    const condition = activeIndex === slides.length - 1;

    return setState({
      ...state,
      activeIndex: condition ? 0 : activeIndex + 1,
      translate: condition ? 0 : (activeIndex + 1) * width,
    });
  }

  function nextSlideEnter(e: React.KeyboardEvent<HTMLDivElement>) {
    const condition = activeIndex === slides.length - 1;
    if (e.code === 'Enter') {
      return setState({
        ...state,
        activeIndex: condition ? 0 : activeIndex + 1,
        translate: condition ? 0 : (activeIndex + 1) * width,
      });
    }
    return setState({...state});
  }

  function dotClickHandler(i: number) {
    return setState({
      ...state,
      activeIndex: i,
      translate: i * width,
    });
  }

  function dotTapHandler(e: React.KeyboardEvent<HTMLSpanElement>, i: number) {
    if (e.code === 'Enter') {
      return setState({
        ...state,
        activeIndex: i,
        translate: i * width,
      });
    }
    return setState({...state});
  }

  function handleResize() {
    return setState({
      ...state,
      width: ref?.current?.clientWidth || 0,
    });
  }

  function autoPlay(tick: number) {
    return setInterval(nextSlide, tick);
  }

  // При первом запуске берем ширину слайдера и вешаем обработчик события изменения ширины
  // (пока без троттлера)
  useEffect(() => {
    setState({
      ...state,
      width: ref?.current?.clientWidth || 0,
    });

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    let timerId: any;
    if (width) {
      timerId = autoPlay(3000);
    }
    return () => clearInterval(timerId);
  }, [width, activeIndex]);
  return (
    <div ref={ref} className={styles.slider}>
      <div className={styles.content} style={{transform: `translateX(-${translate}px)`, width}}>
        {slides.map((slide, i) => <Slide key={slides[i].src} slide={slides[i]} />)}
      </div>
      <div
        role="button"
        tabIndex={0}
        className={`${styles.arrow} ${styles.arrow_left}`}
        onClick={prevSlide}
        onKeyDown={prevSlideEnter}
      >
        <LeftArrow />
      </div>
      <div
        role="button"
        tabIndex={0}
        className={`${styles.arrow} ${styles.arrow_right}`}
        onClick={nextSlide}
        onKeyDown={nextSlideEnter}
      >
        <RightArrow />
      </div>
      <Dots
        slides={slides}
        activeIndex={activeIndex}
        click={dotClickHandler}
        tap={dotTapHandler}
      />
    </div>
  );
}

export default Slider;
