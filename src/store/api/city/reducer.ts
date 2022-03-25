import {CityAction, CityActionTypes, ICityState} from './types';

const initialState: ICityState = {
  cities: [],
  loading: false,
  error: '',
};

function cityReducer(state: ICityState = initialState, action: CityAction) {
  switch (action.type) {
    case CityActionTypes.GET_CITY_SUCCESS: {
      return {...state, cities: action.payload, loading: false};
    }
    case CityActionTypes.GET_CITY_LOADING: {
      return {
        ...state, cities: [], loading: true, error: '',
      };
    }
    case CityActionTypes.GET_CITY_ERROR: {
      return {...state, loading: false, error: action.payload};
    }
    default: {
      return state;
    }
  }
}

export default cityReducer;
