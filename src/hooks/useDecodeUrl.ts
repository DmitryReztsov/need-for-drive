import {useDispatch} from 'react-redux';
import setForm from '../store/form/actions';
import useTypedSelector from '../store/selectors';

function useDecodeUrl() {
  const dispatch = useDispatch();
  // const {cities} = useTypedSelector((state) => state.city);
  // const {points} = useTypedSelector((state) => state.point);
  const {cars} = useTypedSelector((state) => state.car);
  return function (key: string, value: string) {
    switch (key) {
      // case ('city'): {
      //   return dispatch(setForm(key, cars.find((car) => car.id === value)));
      // }
      // case ('pickPoint'): {
      //   return dispatch(setForm(key, cars.find((car) => car.id === value)));
      // }
      case ('carId'): {
        return dispatch(setForm(key, cars.find((car) => car.id === value)));
      }
      case ('dateFrom' || 'dateTo'): {
        return dispatch(setForm(key, +value));
      }
      default: {
        return dispatch(setForm(key, value));
      }
    }
  };
}

export default useDecodeUrl;
