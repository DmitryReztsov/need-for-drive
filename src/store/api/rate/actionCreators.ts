import {RateActionTypes, IRate} from './types';

export function getRateSuccess(rates: IRate []) {
  return {type: RateActionTypes.GET_RATE_SUCCESS, payload: rates};
}

export function getRateLoading() {
  return {type: RateActionTypes.GET_RATE_LOADING};
}

export function getRateError(message: string) {
  return {type: RateActionTypes.GET_RATE_ERROR, payload: message};
}
