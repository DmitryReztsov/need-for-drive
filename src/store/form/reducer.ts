import {
  FormAction, FormActionTypes, IFormState,
} from './types';

const initialState : IFormState = {
  city: '',
  pickPoint: '',
  model: '',
  price: '',
  color: '',
  rentTime: '',
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