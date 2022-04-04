import {ICity} from '../city/types';

export interface IPoint {
  name: string,
  cityId: ICity,
  address: string,
  id: string,
}

export interface IPointState {
  points: IPoint [],
  loading: boolean,
  error: string,
}

export enum PointActionTypes {
  GET_POINT_SUCCESS = 'GET_POINT_SUCCESS',
  GET_POINT_LOADING = 'GET_POINT_LOADING',
  GET_POINT_ERROR = 'GET_POINT_ERROR',
}

export interface GetPointSuccessAction {
  type: PointActionTypes.GET_POINT_SUCCESS,
  payload: IPoint [],
}

export interface GetPointLoadingAction {
  type: PointActionTypes.GET_POINT_LOADING,
}

export interface GetPointErrorAction {
  type: PointActionTypes.GET_POINT_ERROR,
  payload: string,
}

export type PointAction = GetPointSuccessAction | GetPointLoadingAction | GetPointErrorAction;
