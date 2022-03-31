import {IRate} from '../rate/types';
import {ICar} from '../car/types';
import {ICity} from '../city/types';

export enum ORDERSTATUSID {
  FULFILLED = '5e26a1f0099b810b946c5d8b',
  DECLINED = '5e26a1f5099b810b946c5d8c',
}

export interface IOrderStatus {
  name: string,
  id: string,
}

export interface IOrder {
  orderStatusId: IOrderStatus | null;
  cityId: ICity | null,
  pointId: {
    address: string,
    id: string,
    name: string,
  } | null;
  carId: ICar | null,
  color: string,
  dateFrom: number,
  dateTo: number,
  rateId: IRate | null,
  price: number,
  isFullTank: boolean,
  isNeedChildChair: boolean,
  isRightWheel: boolean,
  id: string;
}

export interface IOrderState {
  order: IOrder,
  loading: boolean,
  error: string,
}

export enum OrderActionTypes {
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

export type OrderAction = GetOrderSuccessAction
  | PostOrderSuccessAction
  | OrderLoadingAction
  | OrderErrorAction
  | ClearOrderAction;
