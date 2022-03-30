export interface IRateTypeId {
  unit: string,
  name: string,
  id: string,
}

export interface IRate {
  price: number,
  rateTypeId: IRateTypeId,
  id: string,
}

export interface IExtendedRate extends IRate {
  name: string,
}

export interface IRateState {
  rates: IRate [],
  loading: boolean,
  error: string,
}

export enum RateActionTypes {
  GET_RATE_SUCCESS = 'GET_RATE_SUCCESS',
  GET_RATE_LOADING = 'GET_RATE_LOADING',
  GET_RATE_ERROR = 'GET_RATE_ERROR',
}

export interface GetRateSuccessAction {
  type: RateActionTypes.GET_RATE_SUCCESS,
  payload: IRate [],
}

export interface GetRateLoadingAction {
  type: RateActionTypes.GET_RATE_LOADING,
}

export interface GetRateErrorAction {
  type: RateActionTypes.GET_RATE_ERROR,
  payload: string,
}

export type RateAction = GetRateSuccessAction | GetRateLoadingAction | GetRateErrorAction;
