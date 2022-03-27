import {useDispatch} from 'react-redux';
import {useSearchParams} from 'react-router-dom';
import setForm from '../store/form/actions';
import useTypedSelector from '../store/selectors';

function useAppendParams() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const {cityId} = useTypedSelector((state) => state.form);
  const {cities} = useTypedSelector((state) => state.city);
  const {points} = useTypedSelector((state) => state.point);

  return function (field: string, value: any) {
    switch (field) {
      case ('cityId'): {
        dispatch(setForm(field, value ? cities.find((city) => city.name === value) : null));
        break;
      }
      case ('pointId'): {
        dispatch(setForm(field, value ? points.find((point) => {
          return (point.address === value) && (!cityId?.id || point.cityId.id === cityId?.id);
        }) : null));
        break;
      }
      case ('carId'): {
        dispatch(setForm(field, value));
        break;
      }
      default: {
        dispatch(setForm(field, value));
      }
    }
    searchParams.set(field, value?.id || value);
    setSearchParams(searchParams);
  };
}

export default useAppendParams;
