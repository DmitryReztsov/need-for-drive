import React, {useEffect, useRef, useState} from 'react';
import styles from './Slider.module.scss';
import Slide from '../Slide/Slide';
import {ReactComponent as LeftArrow} from '../../../../content/svg/left-arrow.svg';
import {ReactComponent as RightArrow} from '../../../../content/svg/right-arrow.svg';
import Dots from '../Dots/Dots';

interface ContentProps {
  activeIndex: number,
  translate: string | number,
  width: number
}

interface SliderProps {
  slides: string [],
}

function Slider({slides}: SliderProps): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<ContentProps>({
    activeIndex: 0,
    translate: 0,
    width: ref?.current?.clientWidth || 0,
  });

  const {activeIndex, translate, width} = state;

  function handleResize() {
    setState({
      ...state,
      width: ref?.current?.clientWidth || 0,
    });
  }

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

  useEffect(() => {
    setState({
      ...state,
      width: ref?.current?.clientWidth || 0,
    });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div ref={ref} className={styles.slider}>
      <div className={styles.content} style={{transform: `translateX(-${translate}px)`, width}}>
        {slides.map((slide, i) => <Slide key={slides[i]} src={slides[i]} />)}
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
      <Dots slides={slides} activeIndex={activeIndex} />
    </div>
  );
}

export default Slider;
