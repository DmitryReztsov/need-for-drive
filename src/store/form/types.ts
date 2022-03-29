import {ICar} from '../api/car/types';
import {ICity} from '../api/city/types';
import {IPoint} from '../api/point/types';
import {IRate} from '../api/rate/types';
import {ICategory} from '../Groups/category/types';
import {IRadioItem} from '../../components/common/inputs/RadioGroup/RadioGroup';

export interface IFormState {
  cityId: ICity | null,
  pointId: IPoint | null,
  carId: ICar | null,
  categoryId: ICategory | null,
  color: IRadioItem | null,
  dateFrom: number,
  dateTo: number,
  rateId: IRate | null,
  fuel: boolean,
  babySeat: boolean,
  rightHandDrive: boolean,
}

export interface ISetFormPayload {
  key: string,
  value: any,
}

export enum FormActionTypes {
  SET_FORM_DATA = 'SET_FORM_DATA',
}

export interface SetFormDataAction {
  type: FormActionTypes.SET_FORM_DATA,
  payload: ISetFormPayload,
}

export type FormAction = SetFormDataAction;
