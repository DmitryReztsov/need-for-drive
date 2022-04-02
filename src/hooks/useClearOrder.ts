import {useDispatch} from 'react-redux';
import {useSearchParams} from 'react-router-dom';
import useTypedSelector from '../store/selectors';
import {setOrderField} from '../store/api/order/actionCreators';
import {initialState} from '../store/api/order/reducer';

function useClearOrder() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const order = useTypedSelector((state) => state.order);

  return function (index: number) {
    Object.entries(order).forEach((field, i) => {
      if (i < index) return;
      dispatch(setOrderField(field[0], Object.values(initialState)[i]));
      searchParams.delete(field[0]);
    });
    setSearchParams(searchParams);
  };
}

export default useClearOrder;
