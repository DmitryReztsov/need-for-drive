import {PointActionTypes, IPoint} from './types';

export function getPointSuccess(points: IPoint []) {
  return {type: PointActionTypes.GET_POINT_SUCCESS, payload: points};
}

export function getPointLoading() {
  return {type: PointActionTypes.GET_POINT_LOADING};
}

export function getPointError(message: string) {
  return {type: PointActionTypes.GET_POINT_ERROR, payload: message};
}
