import {Dispatch} from 'redux';
import {getCityError, getCityLoading, getCitySuccess} from './actionCreators';
import {ICity} from './types';
import {api} from '../config/config';
import Endpoints from '../config/endpoints';

function getCity() {
  return async function (dispatch: Dispatch) {
    dispatch(getCityLoading());
    try {
      const data: any [] = await api.get(Endpoints.CITY);
      const cities: ICity [] = [];
      data.forEach((elem) => {
        cities.push({
          name: elem.name,
          id: elem.id,
        });
      });
      dispatch(getCitySuccess(cities));
    } catch (e: any) {
      dispatch(getCityError(e.message));
    }
  };
}

export default getCity;
