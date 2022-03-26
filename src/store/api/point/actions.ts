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
      data.forEach((elem: any) => {
        elem.cityId && points.push({
          name: elem.name,
          cityId: {
            name: elem.cityId.name,
            id: elem.cityId.id,
          },
          address: elem.address,
          id: elem.id,
        });
      });
      dispatch(getPointSuccess(points));
    } catch (e: any) {
      dispatch(getPointError(e.message));
    }
  };
}

export default getPoint;
