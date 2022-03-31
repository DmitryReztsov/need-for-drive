import {Dispatch} from 'redux';
import {getApi, postApi} from '../config/fetchApi';
import Endpoints from '../config/endpoints';
import {
  getOrderSuccess, orderError, orderLoading, postOrderSuccess,
} from './actionCreators';
import {IFormState} from '../../form/types';
import {generatePrice} from '../../../components/pages/Order/components/Checkout/fields';

export function getOrder(id: string) {
  return async function (dispatch: Dispatch) {
    dispatch(orderLoading());
    try {
      const data = await getApi(`${Endpoints.ORDER}/${id}`);
      dispatch(getOrderSuccess(data));
    } catch (e: any) {
      dispatch(orderError(e.message));
    }
  };
}

export function postOrder(form: IFormState, orderStatusId: string) {
  const {
    cityId, pointId, carId, color, dateFrom,
    dateTo, rateId, isFullTank, isNeedChildChair, isRightWheel,
  } = form;
  return async function (dispatch: Dispatch) {
    dispatch(orderLoading());
    try {
      const body = {
        orderStatusId: {
          id: orderStatusId,
        },
        cityId: cityId?.id,
        pointId: pointId?.id,
        carId: carId?.id,
        color: typeof color === 'string' ? color : color.name,
        dateFrom,
        dateTo,
        rateId: rateId?.id,
        price: generatePrice(form),
        isFullTank,
        isNeedChildChair,
        isRightWheel,
      };
      const data = await postApi(Endpoints.ORDER, body);
      dispatch(postOrderSuccess(data));
    } catch (e: any) {
      dispatch(orderError(e.message));
    }
  };
}
