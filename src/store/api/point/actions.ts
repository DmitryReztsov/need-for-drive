import {Dispatch} from 'redux';
import {getPointError, getPointLoading, getPointSuccess} from './actionCreators';
import {IPoint} from './types';
import Endpoints from '../config/endpoints';
import getApi from '../config/fetchApi';

function getPoint() {
  return async function (dispatch: Dispatch) {
    dispatch(getPointLoading());
    try {
      const data = await getApi(Endpoints.POINT);
      const points: IPoint [] = [];
      data.forEach(({
        name, cityId, address, id,
      }: any) => {
        cityId && points.push({
          name,
          cityId: {
            name: cityId.name,
            id: cityId.id,
          },
          address,
          id,
        });
      });
      dispatch(getPointSuccess(points));
    } catch (e: any) {
      dispatch(getPointError(e.message));
    }
  };
}

export default getPoint;
