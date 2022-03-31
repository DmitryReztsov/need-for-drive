import {useDispatch} from 'react-redux';
import setForm from '../store/form/actions';
import useTypedSelector from '../store/selectors';
import {IRadioItem} from '../components/common/inputs/RadioGroup/RadioGroup';
import {defaultCategory, defaultColor} from '../store/form/reducer';

function useDecodeParams() {
  const dispatch = useDispatch();
  const {cityId, carId} = useTypedSelector((state) => state.form);
  const {cities} = useTypedSelector((state) => state.city);
  const {points} = useTypedSelector((state) => state.point);
  const {cars} = useTypedSelector((state) => state.car);
  const {categories} = useTypedSelector((state) => state.category);
  const {rates} = useTypedSelector((state) => state.rate);

  function dispatchById(array: any [], key: string, value: string, defaultElem?: IRadioItem) {
    const elem = array.find((elem) => elem.id === value);
    dispatch(setForm(key, elem || defaultElem));
  }

  function getColors() {
    const colors: IRadioItem [] = [];
    carId?.colors.forEach((color, i) => colors.push({id: i.toString(), name: color}));
    return colors;
  }

  return function (key: string, value: string) {
    switch (key) {
      case ('cityId'): {
        return dispatch(setForm(key, cities.find((city) => city.name === value)));
      }
      case ('pointId'): {
        return dispatch(setForm(key, points.find((point) => {
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
        return dispatch(setForm(key, +value));
      }
      case ('dateTo'): {
        return dispatch(setForm(key, +value));
      }
      case ('color'): {
        return dispatchById(getColors(), key, value, defaultColor);
      }
      case ('rateId'): {
        return dispatchById(rates, key, value);
      }
      default: {
        return dispatch(setForm(key, value));
      }
    }
  };
}

export default useDecodeParams;
