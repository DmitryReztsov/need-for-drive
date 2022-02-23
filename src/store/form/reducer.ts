import {FormAction, FormActionTypes, IForm, IFormState, ISetFormPayload} from './types';

const initialState : IFormState = {
  form: {
    city: '',
    pickPoint: '',
  }
}

export function formReducer(state: IFormState = initialState, action: FormAction) {
  switch (action.type) {
    case FormActionTypes.SET_FORM_DATA: {
      return {...state, form: getNewForm(state.form, action.payload)}
    }
    default: {
      return state
    }
  }
}

function getNewForm(form: IForm, {key, value}: ISetFormPayload) {
  form[key] = value;
  return form;
}