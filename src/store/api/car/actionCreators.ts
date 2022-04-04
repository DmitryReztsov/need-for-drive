import {CarActionTypes, ICar} from './types';

export function getCarSuccess(cars: ICar []) {
  return {type: CarActionTypes.GET_CAR_SUCCESS, payload: cars};
}

export function getCarLoading() {
  return {type: CarActionTypes.GET_CAR_LOADING};
}

export function getCarError(message: string) {
  return {type: CarActionTypes.GET_CAR_ERROR, payload: message};
}
