import {useDispatch} from 'react-redux';
import {useSearchParams} from 'react-router-dom';
import setForm from '../store/form/actions';

function useAppendParams() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  return function (field: string, value: string | number) {
    dispatch(setForm(field, value));
    searchParams.set(field, value.toString());
    setSearchParams(searchParams);
  };
}

export default useAppendParams;
