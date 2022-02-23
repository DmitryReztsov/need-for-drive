import {FormActionTypes} from './types';

export const setForm = (key: string, value: string) => ({type: FormActionTypes.SET_FORM_DATA, payload: {key, value}})