import {IFormState} from '../../../../../store/form/types';

export interface IFields {
  [key: string]: any,
}

const labelArray = ['Пункт выдачи', 'Модель', 'Цвет', 'Длительность аренды', 'Тариф', 'Полный бак', 'Детское кресло', 'Правый руль'];

export function generateFields(form: IFormState) {
  const props: any[] = [];
  Object.entries(form).forEach((elem) => {
    if (elem[0] === ('city' || 'price')) return;
    if (elem[0] === 'pickPoint' && elem[1]) {
      props.push(`${form.city}, ${elem[1]}`);
      return;
    }
    props.push(elem[1]);
  });

  const fields: IFields [] = [];
  props.forEach((prop, i) => {
    fields.push({label: labelArray[i], value: prop});
  });
  return fields;
}
