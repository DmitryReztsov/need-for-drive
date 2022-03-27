import {ICar} from '../api/car/types';

export interface IFormState {
  city: string,
  pickPoint: string,
  carId: ICar | null,
  category: string,
  color: string,
  dateFrom: number,
  dateTo: number,
  tariff: string,
  fuel: boolean,
  babySeat: boolean,
  rightHandDrive: boolean,
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
