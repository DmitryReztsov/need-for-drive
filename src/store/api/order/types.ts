import {ICity} from '../city/types';
import {IRate} from '../rate/types';
import {ICategory} from '../../Groups/category/types';
import {ICar} from '../car/types';
import {IPoint} from '../point/types';
import {IRadioItem} from '../../../components/common/inputs/RadioGroup/RadioGroup';

export enum ORDERSTATUSID {
  FULFILLED = '5e26a1f0099b810b946c5d8b',
  DECLINED = '5e26a1f5099b810b946c5d8c',
}

export interface IOrderStatus {
  name: string,
  id: string,
}

export interface IOrder {
  cityId: ICity | null,
  pointId: IPoint | null,
  carId: ICar | null,
  categoryId?: ICategory,
  price: string,
  color: IRadioItem,
  dateFrom: number,
  dateTo: number,
  rateId: IRate | null,
  isFullTank: boolean,
  isNeedChildChair: boolean,
  isRightWheel: boolean,
  orderStatusId: IOrderStatus | null,
  id: string,
}

export interface IOrderState {
  order: IOrder,
  loading: boolean,
  error: string,
}

export enum OrderActionTypes {
  SET_ORDER_FIELD = 'SET_ORDER_FIELD',
  GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS',
  POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS',
  CLEAR_ORDER = 'CLEAR_ORDER',
  ORDER_LOADING = 'GET_ORDER_LOADING',
  ORDER_ERROR = 'GET_ORDER_ERROR',
}

export interface GetOrderSuccessAction {
  type: OrderActionTypes.GET_ORDER_SUCCESS,
  payload: IOrder,
}

export interface PostOrderSuccessAction {
  type: OrderActionTypes.POST_ORDER_SUCCESS,
  payload: IOrder,
}

export interface ClearOrderAction {
  type: OrderActionTypes.CLEAR_ORDER,
  payload: IOrderState,
}

export interface OrderLoadingAction {
  type: OrderActionTypes.ORDER_LOADING,
}

export interface OrderErrorAction {
  type: OrderActionTypes.ORDER_ERROR,
  payload: string,
}

export interface ISetOrderFieldPayload {
  key: string,
  value: any,
}

export interface SetOrderFieldAction {
  type: OrderActionTypes.SET_ORDER_FIELD,
  payload: ISetOrderFieldPayload,
}

export type OrderAction = SetOrderFieldAction
  | GetOrderSuccessAction
  | PostOrderSuccessAction
  | OrderLoadingAction
  | OrderErrorAction
  | ClearOrderAction;
