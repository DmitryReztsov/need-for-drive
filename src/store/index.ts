import {composeWithDevTools} from '@redux-devtools/extension';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import formReducer from './form/reducer';
import cityReducer from './api/city/reducer';
import pointReducer from './api/point/reducer';
import carReducer from './api/car/reducer';
import rateReducer from './api/rate/reducer';
import categoryReducer from './Groups/category/reducer';
import orderReducer from './api/order/reducer';

const combinedReducer = combineReducers({
  form: formReducer,
  city: cityReducer,
  point: pointReducer,
  car: carReducer,
  rate: rateReducer,
  category: categoryReducer,
  order: orderReducer,
});

const composeEnhancers = composeWithDevTools({});

export type RootState = ReturnType<typeof combinedReducer>

export const store = createStore(combinedReducer, {}, composeEnhancers(applyMiddleware(thunk)));
