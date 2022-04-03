import {useDispatch} from 'react-redux';
import {useSearchParams} from 'react-router-dom';
import useTypedSelector from '../store/selectors';
import {setOrderField} from '../store/api/order/actionCreators';
import {ICity} from '../store/api/city/types';
import {IPoint} from '../store/api/point/types';
import {setCategoryId} from '../store/Groups/category/actions';

function useAppendParams() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const {order: {cityId}} = useTypedSelector((state) => state.order);
  const {cities} = useTypedSelector((state) => state.city);
  const {points} = useTypedSelector((state) => state.point);

  return function (field: string, value: any) {
    switch (field) {
      case ('cityId'): {
        dispatch(setOrderField(field, value ? cities
          .find((city: ICity) => city.name === value) : {name: value, id: ''}));
        break;
      }
      case ('pointId'): {
        dispatch(setOrderField(field, value ? points.find((point: IPoint) => {
          return (point.address === value) && (!cityId?.id || point.cityId.id === cityId?.id);
        }) : {address: value, id: '', name: ''}));
        break;
      }
      case ('categoryId'): {
        dispatch(setCategoryId(value));
        break;
      }
      default: {
        dispatch(setOrderField(field, value));
      }
    }
    searchParams.set(field, value?.id || value);
    setSearchParams(searchParams);
  };
}

export default useAppendParams;
