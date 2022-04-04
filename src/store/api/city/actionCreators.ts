import {CityActionTypes, ICity} from './types';

export function getCitySuccess(cities: ICity []) {
  return {type: CityActionTypes.GET_CITY_SUCCESS, payload: cities};
}

export function getCityLoading() {
  return {type: CityActionTypes.GET_CITY_LOADING};
}

export function getCityError(message: string) {
  return {type: CityActionTypes.GET_CITY_ERROR, payload: message};
}
