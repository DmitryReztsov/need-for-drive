import {Dispatch} from 'redux';
import {getRateError, getRateLoading, getRateSuccess} from './actionCreators';
import {IRate} from './types';
import Endpoints from '../config/endpoints';
import {getApi} from '../config/fetchApi';

function getRate() {
  return async function (dispatch: Dispatch) {
    dispatch(getRateLoading());
    try {
      const data = await getApi(Endpoints.RATE);
      const rates: IRate [] = [];
      data.forEach(({
        price, rateTypeId, rateTypeId: {unit, name, id: rateId}, id,
      }: any) => {
        rateTypeId && rates.push({
          price,
          rateTypeId: {
            unit,
            name,
            id: rateId,
          },
          id,
        });
      });
      dispatch(getRateSuccess(rates));
    } catch (e: any) {
      dispatch(getRateError(e.message));
    }
  };
}

export default getRate;
