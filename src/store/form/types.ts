export interface IForm {
  [key: string] : string,
}

export interface IFormState {
  form: IForm;
}

export interface ISetFormPayload {
  key: string,
  value: string,
}

export enum FormActionTypes {
  SET_FORM_DATA = 'SET_FORM_DATA',
}

export interface SetFormDataAction {
  type: FormActionTypes.SET_FORM_DATA,
  payload: ISetFormPayload,
}


export type FormAction = SetFormDataAction;