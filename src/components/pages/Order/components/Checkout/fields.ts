import {IFormState} from '../../../../../store/form/types';
import {dayInMilSeconds, hourInMilSeconds, minInMilSeconds} from '../../../../../utils/time';

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
    .filter((elem) => elem[0])
    .join(' ');
}

export function generateFields(form: IFormState) {
  const fields: IFields [] = [
    {
      label: 'Пункт выдачи',
      value: `${form.city}, ${form.pickPoint}`,
    },
    {
      label: 'Модель',
      value: form.model,
    },
    {
      label: 'Цвет',
      value: form.color,
    },
    {
      label: 'Длительность аренды',
      value: setDuration(form.dateTo, form.dateFrom),
    },
    {
      label: 'Тариф',
      value: form.tariff.split(', ')[0],
    },
    {
      label: 'Полный бак',
      value: form.fuel ? 'Да' : '',
    },
    {
      label: 'Детское кресло',
      value: form.babySeat ? 'Да' : '',
    },
    {
      label: 'Правый руль',
      value: form.rightHandDrive ? 'Да' : '',
    },
  ];
  return fields;
}
