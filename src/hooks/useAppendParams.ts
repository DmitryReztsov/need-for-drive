import {useDispatch} from 'react-redux';
import {useSearchParams} from 'react-router-dom';
import setForm from '../store/form/actions';

function useAppendParams(field: string, value: string) {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  dispatch(setForm(field, value));
  searchParams.set(field, value);
  setSearchParams(searchParams);
}

export default useAppendParams;
