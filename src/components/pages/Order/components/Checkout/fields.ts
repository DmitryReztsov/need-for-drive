import {IFormState} from '../../../../../store/form/types';

export interface IFields {
  [key: string]: any,
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
      value: form.dateTo - form.dateFrom || '',
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
