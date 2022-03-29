import {CategoryAction, CategoryActionTypes, ICategoryState} from './types';

const initialState: ICategoryState = {
  categories: [],
};

function categoryReducer(state: ICategoryState = initialState, action: CategoryAction) {
  switch (action.type) {
    case CategoryActionTypes.SET_CATEGORY_DATA: {
      return {...state, categories: action.payload};
    }
    default: {
      return state;
    }
  }
}

export default categoryReducer;
