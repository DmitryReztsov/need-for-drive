import {Dispatch} from 'redux';
import {getCityError, getCityLoading, getCitySuccess} from './actionCreators';
import {ICity} from './types';
import Endpoints from '../config/endpoints';
import {getApi} from '../config/fetchApi';

function getCity() {
  return async function (dispatch: Dispatch) {
    dispatch(getCityLoading());
    try {
      const data = await getApi(Endpoints.CITY);
      const cities: ICity [] = [];
      data.forEach(({name, id}: any) => {
        cities.push({
          name,
          id,
        });
      });
      dispatch(getCitySuccess(cities));
    } catch (e: any) {
      dispatch(getCityError(e.message));
    }
  };
}

export default getCity;
