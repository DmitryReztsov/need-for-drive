import {
  FormAction, FormActionTypes, IFormState,
} from './types';

export const defaultCategory = {
  id: '-1',
  name: 'Все модели',
};

export const defaultColor = {
  id: '-1',
  name: 'Любой',
};

export const initialState: IFormState = {
  cityId: null,
  pointId: null,
  carId: null,
  categoryId: defaultCategory,
  color: defaultColor,
  dateFrom: Date.now(),
  dateTo: 0,
  rateId: null,
  isFullTank: false,
  isNeedChildChair: false,
  isRightWheel: false,
};

function formReducer(state: IFormState = initialState, action: FormAction) {
  switch (action.type) {
    case FormActionTypes.SET_FORM_DATA: {
      return {...state, [action.payload.key]: action.payload.value};
    }
    default: {
      return state;
    }
  }
}

export default formReducer;
