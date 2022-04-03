import {IOrderState, OrderAction, OrderActionTypes} from './types';
import {IRadioItem} from '../../../components/common/inputs/RadioGroup/RadioGroup';

export const defaultColor: IRadioItem = {
  id: '-1',
  name: 'Любой',
};

export const initialState: IOrderState = {
  order: {
    cityId: null,
    pointId: null,
    carId: null,
    color: defaultColor,
    dateFrom: Date.now(),
    dateTo: 0,
    rateId: null,
    price: '',
    isFullTank: false,
    isNeedChildChair: false,
    isRightWheel: false,
    orderStatusId: null,
    id: '',
  },
  loading: false,
  error: '',
};

function orderReducer(state: IOrderState = initialState, action: OrderAction) {
  switch (action.type) {
    case OrderActionTypes.SET_ORDER_FIELD: {
      return {
        ...state,
        order: {...state.order, [action.payload.key]: action.payload.value},
      };
    }
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
