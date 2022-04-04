import {PointAction, PointActionTypes, IPointState} from './types';

const initialState: IPointState = {
  points: [],
  loading: false,
  error: '',
};

function pointReducer(state: IPointState = initialState, action: PointAction) {
  switch (action.type) {
    case PointActionTypes.GET_POINT_SUCCESS: {
      return {...state, points: action.payload, loading: false};
    }
    case PointActionTypes.GET_POINT_LOADING: {
      return {
        ...state, points: [], loading: true, error: '',
      };
    }
    case PointActionTypes.GET_POINT_ERROR: {
      return {...state, loading: false, error: action.payload};
    }
    default: {
      return state;
    }
  }
}

export default pointReducer;
