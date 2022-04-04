export interface ICity {
  name: string,
  id: string,
}

export interface ICityState {
  cities: ICity [],
  loading: boolean,
  error: string,
}

export enum CityActionTypes {
  GET_CITY_SUCCESS = 'GET_CITY_SUCCESS',
  GET_CITY_LOADING = 'GET_CITY_LOADING',
  GET_CITY_ERROR = 'GET_CITY_ERROR',
}

export interface GetCitySuccessAction {
  type: CityActionTypes.GET_CITY_SUCCESS,
  payload: ICity [],
}

export interface GetCityLoadingAction {
  type: CityActionTypes.GET_CITY_LOADING,
}

export interface GetCityErrorAction {
  type: CityActionTypes.GET_CITY_ERROR,
  payload: string,
}

export type CityAction = GetCitySuccessAction | GetCityLoadingAction | GetCityErrorAction;
