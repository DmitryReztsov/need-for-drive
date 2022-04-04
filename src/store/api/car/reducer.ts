import {CarAction, CarActionTypes, ICarState} from './types';

const initialState: ICarState = {
  cars: [],
  loading: false,
  error: '',
};

function carReducer(state: ICarState = initialState, action: CarAction) {
  switch (action.type) {
    case CarActionTypes.GET_CAR_SUCCESS: {
      return {...state, cars: action.payload, loading: false};
    }
    case CarActionTypes.GET_CAR_LOADING: {
      return {
        ...state, cars: [], loading: true, error: '',
      };
    }
    case CarActionTypes.GET_CAR_ERROR: {
      return {...state, loading: false, error: action.payload};
    }
    default: {
      return state;
    }
  }
}

export default carReducer;
