import {useDispatch} from 'react-redux';
import useTypedSelector from '../store/selectors';
import {IRadioItem} from '../components/common/inputs/RadioGroup/RadioGroup';
import {defaultCategory, defaultColor} from '../store/api/order/reducer';
import {setOrderField} from '../store/api/order/actionCreators';
import {ICity} from '../store/api/city/types';
import {IPoint} from '../store/api/point/types';

function useDecodeParams() {
  const dispatch = useDispatch();
  const {order: {cityId, carId}} = useTypedSelector((state) => state.order);
  const {cities} = useTypedSelector((state) => state.city);
  const {points} = useTypedSelector((state) => state.point);
  const {cars} = useTypedSelector((state) => state.car);
  const {categories} = useTypedSelector((state) => state.category);
  const {rates} = useTypedSelector((state) => state.rate);

  function dispatchById(array: any [], key: string, value: string, defaultElem?: IRadioItem) {
    const elem = array.find((elem) => elem.id === value);
    dispatch(setOrderField(key, elem || defaultElem));
  }

  function getColors() {
    const colors: IRadioItem [] = [];
    if (!carId) return colors;
    carId.colors
      .forEach((color: any, i: number) => colors.push({id: i.toString(), name: color}));
    return colors;
  }

  return function (key: string, value: string) {
    switch (key) {
      case ('cityId'): {
        return dispatch(setOrderField(key, cities.find((city: ICity) => city.name === value)));
      }
      case ('pointId'): {
        return dispatch(setOrderField(key, points.find((point: IPoint) => {
          return (point.address === value) && (!cityId?.id || point.cityId.id === cityId?.id);
        })));
      }
      case ('carId'): {
        return dispatchById(cars, key, value);
      }
      case ('categoryId'): {
        return dispatchById(categories, key, value, defaultCategory);
      }
      case ('dateFrom'): {
        return dispatch(setOrderField(key, +value));
      }
      case ('dateTo'): {
        return dispatch(setOrderField(key, +value));
      }
      case ('color'): {
        return dispatchById(getColors(), key, value, defaultColor);
      }
      case ('rateId'): {
        return dispatchById(rates, key, value);
      }
      default: {
        return dispatch(setOrderField(key, value));
      }
    }
  };
}

export default useDecodeParams;
