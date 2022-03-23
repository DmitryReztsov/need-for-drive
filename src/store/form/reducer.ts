import {
  FormAction, FormActionTypes, IFormState,
} from './types';

const initialState: IFormState = {
  city: '',
  pickPoint: '',
  model: '',
  color: 'Любой',
  dateFrom: Date.now(),
  dateTo: 0,
  priceMin: 0,
  priceMax: 0,
  tariff: '',
  fuel: false,
  babySeat: false,
  rightHandDrive: false,
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
