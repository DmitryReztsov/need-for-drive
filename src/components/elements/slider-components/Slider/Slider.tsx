import React, {useEffect, useRef, useState} from 'react';
import styles from './Slider.module.scss';
import Slide from '../Slide/Slide';
import {ReactComponent as LeftArrow} from '../../../../content/svg/left-arrow.svg';
import {ReactComponent as RightArrow} from '../../../../content/svg/right-arrow.svg';
import Dots from '../Dots/Dots';
import {Slide as ISlide} from '../../../../utils/types';

interface ContentProps {
  activeIndex: number,
  translate: string | number,
  width: number
}

interface SliderProps {
  slides: ISlide [],
}

function Slider({slides}: SliderProps): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<ContentProps>({
    activeIndex: 0,
    translate: 0,
    width: 0,
  });

  const {activeIndex, translate, width} = state;

  function prevSlide() {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (slides.length - 1) * width,
        activeIndex: slides.length - 1,
      });
    }

    return setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * width,
    });
  }

  function prevSlideEnter(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.code === 'Enter') {
      if (activeIndex === 0) {
        return setState({
          ...state,
          translate: (slides.length - 1) * width,
          activeIndex: slides.length - 1,
        });
      }

      return setState({
        ...state,
        activeIndex: activeIndex - 1,
        translate: (activeIndex - 1) * width,
      });
    }
    return setState({...state});
  }

  function nextSlide() {
    if (activeIndex === slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }

    return setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * width,
    });
  }

  function nextSlideEnter(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.code === 'Enter') {
      if (activeIndex === slides.length - 1) {
        return setState({
          ...state,
          translate: 0,
          activeIndex: 0,
        });
      }

      return setState({
        ...state,
        activeIndex: activeIndex + 1,
        translate: (activeIndex + 1) * width,
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

  useEffect(() => {
    console.log(ref?.current?.clientWidth);
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
