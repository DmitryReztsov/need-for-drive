import parking from '../content/slider-img/parking.png';
import insurance from '../content/slider-img/insurance.png';
import fuel from '../content/slider-img/fuel.png';
import service from '../content/slider-img/service.png';
import {Slide} from './types';

export const slides: Slide [] = [
  {src: parking, title: 'Бесплатная парковка', text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.'},
  {src: insurance, title: 'Страховка', text: 'Полная страховка страховка автомобиля'},
  {src: fuel, title: 'Бензин', text: 'Полный бак на любой заправке города за наш счёт'},
  {src: service, title: 'Обслуживание', text: 'Автомобиль проходит еженедельное ТО'},
];
