import {Dispatch} from 'redux';
import setForm from '../store/form/actions';

function useAppendParams(
  dispatch: Dispatch,
  searchParams: URLSearchParams,
  setSearchParams: (params: URLSearchParams) => void,
) {
  return function (field: string, value: string) {
    dispatch(setForm(field, value));
    searchParams.set(field, value);
    setSearchParams(searchParams);
  };
}

export default useAppendParams;
