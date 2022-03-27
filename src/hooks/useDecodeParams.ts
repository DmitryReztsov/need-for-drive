import {useDispatch} from 'react-redux';
import setForm from '../store/form/actions';
import useTypedSelector from '../store/selectors';

function useDecodeParams() {
  const dispatch = useDispatch();
  const {cityId} = useTypedSelector((state) => state.form);
  const {cities} = useTypedSelector((state) => state.city);
  const {points} = useTypedSelector((state) => state.point);
  const {cars} = useTypedSelector((state) => state.car);
  return function (key: string, value: string) {
    console.log(key, value);
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

export default useDecodeParams;
