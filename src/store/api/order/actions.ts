import {Dispatch} from 'redux';
import {IOrder} from './types';
import {
  getOrderSuccess, orderError, orderLoading, postOrderSuccess,
} from './actionCreators';
import Endpoints from '../config/endpoints';
import {generatePrice} from '../../../components/pages/Order/components/Checkout/fields';
import {getApi, postApi} from '../config/fetchApi';

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

export function postOrder(order: IOrder, orderStatusId: string) {
  const {
    cityId, pointId, carId, color, dateFrom,
    dateTo, rateId, isFullTank, isNeedChildChair, isRightWheel,
  } = order;
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
        price: generatePrice(order),
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
