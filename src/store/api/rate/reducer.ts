import {RateAction, RateActionTypes, IRateState} from './types';

const initialState: IRateState = {
  rates: [],
  loading: false,
  error: '',
};

function rateReducer(state: IRateState = initialState, action: RateAction) {
  switch (action.type) {
    case RateActionTypes.GET_RATE_SUCCESS: {
      return {...state, rates: action.payload, loading: false};
    }
    case RateActionTypes.GET_RATE_LOADING: {
      return {
        ...state, rates: [], loading: true, error: '',
      };
    }
    case RateActionTypes.GET_RATE_ERROR: {
      return {...state, loading: false, error: action.payload};
    }
    default: {
      return state;
    }
  }
}

export default rateReducer;
