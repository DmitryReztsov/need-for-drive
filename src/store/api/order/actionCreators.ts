import {IOrder, OrderActionTypes} from './types';
import {initialState} from './reducer';

export function setOrderField(key: string, value: any) {
  return {type: OrderActionTypes.SET_ORDER_FIELD, payload: {key, value}};
}

export function getOrderSuccess(data: IOrder) {
  return {type: OrderActionTypes.GET_ORDER_SUCCESS, payload: data};
}

export function postOrderSuccess(data: IOrder) {
  return {type: OrderActionTypes.POST_ORDER_SUCCESS, payload: data};
}

export function clearOrder() {
  return {type: OrderActionTypes.CLEAR_ORDER, payload: initialState};
}

export function orderLoading() {
  return {type: OrderActionTypes.ORDER_LOADING};
}

export function orderError(message: string) {
  return {type: OrderActionTypes.ORDER_ERROR, payload: message};
}
