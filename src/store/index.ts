import { composeWithDevTools } from "@redux-devtools/extension";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {formReducer} from './form/reducer';

export type RootState = ReturnType<typeof combinedReducer>

const combinedReducer = combineReducers({
  form: formReducer,
});

const composeEnhancers = composeWithDevTools({});

export const store = createStore(combinedReducer, {}, composeEnhancers(applyMiddleware(thunk)));
