export interface ICar {
  priceMin: number,
  priceMax: number,
  name: string,
  number: string,
  categoryId: {
    name: string,
    id: string,
  },
  path: string,
  tank: number,
  colors: string [],
  id: string
}

export interface ICarState {
  cars: ICar [],
  loading: boolean,
  error: string,
}

export enum CarActionTypes {
  GET_CAR_SUCCESS = 'GET_CAR_SUCCESS',
  GET_CAR_LOADING = 'GET_CAR_LOADING',
  GET_CAR_ERROR = 'GET_CAR_ERROR',
}

export interface GetCarSuccessAction {
  type: CarActionTypes.GET_CAR_SUCCESS,
  payload: ICar [],
}

export interface GetCarLoadingAction {
  type: CarActionTypes.GET_CAR_LOADING,
}

export interface GetCarErrorAction {
  type: CarActionTypes.GET_CAR_ERROR,
  payload: string,
}

export type CarAction = GetCarSuccessAction | GetCarLoadingAction | GetCarErrorAction;
