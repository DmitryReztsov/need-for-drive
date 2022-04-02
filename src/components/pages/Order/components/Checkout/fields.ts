import {
  dayInMilSeconds, hourInMilSeconds, minInMilSeconds, monthInMilSeconds,
} from '../../../../../utils/time';
import {bonuses} from '../../mocks';
import {IOrder} from '../../../../../store/api/order/types';

export interface IFields {
  [key: string]: any,
}

function setDuration(dateTo: number, dateFrom: number): string {
  if (!dateTo) return '';
  const interval = dateTo - dateFrom;
  const days = Math.trunc(interval / dayInMilSeconds);
  const hours = Math.trunc((interval % dayInMilSeconds) / hourInMilSeconds);
  const minutes = Math.trunc(((interval % dayInMilSeconds) % hourInMilSeconds) / minInMilSeconds);
  const duration = `${days}д ${hours}ч ${minutes}м`;
  return duration
    .split(' ')
    .filter((elem) => elem[0] !== '0')
    .join(' ');
}

export function generateFields(
  {
    cityId, pointId, carId, color, dateFrom, dateTo,
    rateId, isFullTank, isNeedChildChair, isRightWheel,
  }: IOrder,
) {
  const fields: IFields [] = [
    {
      label: 'Пункт выдачи',
      value: cityId && `${cityId?.name}, ${pointId?.address || ''}`,
    },
    {
      label: 'Модель',
      value: carId?.name,
    },
    {
      label: 'Цвет',
      value: typeof color === 'string' ? color : color?.name,
    },
    {
      label: 'Длительность аренды',
      value: setDuration(dateTo, dateFrom),
    },
    {
      label: 'Тариф',
      value: rateId?.rateTypeId?.name,
    },
    {
      label: 'Полный бак',
      value: isFullTank ? 'Да' : '',
    },
    {
      label: 'Детское кресло',
      value: isNeedChildChair ? 'Да' : '',
    },
    {
      label: 'Правый руль',
      value: isRightWheel ? 'Да' : '',
    },
  ];
  return fields;
}

export function generatePrice({
  rateId, dateFrom, dateTo, carId, isFullTank, isNeedChildChair, isRightWheel,
}: IOrder) {
  if (rateId && carId) {
    let price;
    const bonus = (
      isFullTank ? bonuses[0].cost : 0)
      + (isNeedChildChair ? bonuses[1].cost : 0)
      + (isRightWheel ? bonuses[2].cost : 0);
    const time = dateTo - dateFrom;
    switch (rateId.rateTypeId.unit) {
      case ('мин'): {
        price = bonus + (time / minInMilSeconds) * rateId.price;
        break;
      }
      case ('30 дней'): {
        price = bonus + (time / monthInMilSeconds) * rateId.price;
        break;
      }
      default: {
        price = carId?.priceMin;
        break;
      }
    }
    return Math.trunc(
      price < carId?.priceMin
        ? carId?.priceMin
        : price > carId?.priceMax
          ? carId?.priceMax
          : price as number,
    );
  }
  return 0;
}

export function generatePriceString(price: number, {
  rateId, carId, dateFrom, dateTo,
}: IOrder) {
  if (rateId && carId && dateFrom && dateTo) {
    return ` ${price} руб.`;
  }
  return ` от ${carId?.priceMin} до ${carId?.priceMax} руб.`;
}
