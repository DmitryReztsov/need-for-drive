import {useDispatch} from 'react-redux';
import {useSearchParams} from 'react-router-dom';
import setForm from '../store/form/actions';
import useTypedSelector from '../store/selectors';

function useClearForm() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const form = useTypedSelector((state) => state.form);

  return function (index: number) {
    Object.entries(form).forEach((field, i) => {
      if (i < index) return;
      dispatch(setForm(field[0], ''));
      searchParams.delete(field[0]);
    });
    setSearchParams(searchParams);
  };
}

export default useClearForm;
