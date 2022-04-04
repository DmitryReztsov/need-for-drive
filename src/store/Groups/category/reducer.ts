import {CategoryAction, CategoryActionTypes, ICategoryState} from './types';
import {IRadioItem} from '../../../components/common/inputs/RadioGroup/RadioGroup';

export const defaultCategory: IRadioItem = {
  id: '-1',
  name: 'Все модели',
};

const initialState: ICategoryState = {
  categories: [],
  categoryId: defaultCategory,
};

function categoryReducer(state: ICategoryState = initialState, action: CategoryAction) {
  switch (action.type) {
    case CategoryActionTypes.SET_CATEGORY_DATA: {
      return {...state, categories: action.payload};
    }
    case CategoryActionTypes.SET_CATEGORY_ID: {
      return {...state, categoryId: action.payload};
    }
    default: {
      return state;
    }
  }
}

export default categoryReducer;
