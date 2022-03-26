import {Dispatch} from 'redux';
import {getCarError, getCarLoading, getCarSuccess} from './actionCreators';
import {ICar} from './types';
import Endpoints from '../config/endpoints';
import getApi from '../config/fetchApi';

function getCar() {
  return async function (dispatch: Dispatch) {
    dispatch(getCarLoading());
    try {
      const data = await getApi(Endpoints.CAR);
      const cars: ICar [] = [];
      data.forEach(({
        priceMin, priceMax, name, number, categoryId, thumbnail: {path}, tank, colors, id,
      }: any) => {
        cars.push({
          priceMin,
          priceMax,
          name,
          number,
          categoryId: {
            name: categoryId.name,
            id: categoryId.id,
          },
          path,
          tank,
          colors,
          id,
        });
      });
      dispatch(getCarSuccess(cars));
    } catch (e: any) {
      dispatch(getCarError(e.message));
    }
  };
}

export default getCar;
