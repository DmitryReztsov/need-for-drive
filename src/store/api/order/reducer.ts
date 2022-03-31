import {IOrderState, OrderAction, OrderActionTypes} from './types';

export const initialState: IOrderState = {
  order: {
    orderStatusId: null,
    cityId: null,
    pointId: null,
    carId: null,
    color: '',
    dateFrom: 0,
    dateTo: 0,
    rateId: null,
    price: 0,
    isFullTank: false,
    isNeedChildChair: false,
    isRightWheel: false,
    id: '',
  },
  loading: false,
  error: '',
};

function orderReducer(state: IOrderState = initialState, action: OrderAction) {
  switch (action.type) {
    case OrderActionTypes.GET_ORDER_SUCCESS: {
      return {...state, order: action.payload, loading: false};
    }
    case OrderActionTypes.POST_ORDER_SUCCESS: {
      return {...state, order: action.payload, loading: false};
    }
    case OrderActionTypes.ORDER_LOADING: {
      return {
        ...state, order: initialState, loading: true, error: '',
      };
    }
    case OrderActionTypes.ORDER_ERROR: {
      return {...state, loading: false, error: action.payload};
    }
    default: {
      return state;
    }
  }
}

export default orderReducer;
