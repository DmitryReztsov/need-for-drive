import {FormActionTypes} from './types';

function setForm(key: string, value: string) {
  return {type: FormActionTypes.SET_FORM_DATA, payload: {key, value}};
}

export default setForm;
