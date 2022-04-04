import {Dispatch} from 'redux';
import {IOrder} from './types';
import {
  getOrderSuccess, orderError, orderLoading, postOrderSuccess,
} from './actionCreators';
import Endpoints from '../config/endpoints';
import {generatePrice} from '../../../components/pages/Order/fields';
import {getApi, postApi} from '../config/fetchApi';

export function getOrder(id: string) {
  return async function (dispatch: Dispatch) {
    dispatch(orderLoading());
    try {
      const data = await getApi(`${Endpoints.ORDER}/${id}`);
      delete data.updatedAt;
      delete data.createdAt;
      setTimeout(() => dispatch(getOrderSuccess(data)), 1500);
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
        orderStatusId: {
          id: orderStatusId,
        },
      };
      const data = await postApi(Endpoints.ORDER, body);
      delete data.updatedAt;
      delete data.createdAt;
      setTimeout(() => dispatch(postOrderSuccess(data)), 1500);
    } catch (e: any) {
      dispatch(orderError(e.message));
    }
  };
}
