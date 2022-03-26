export const tariffs = [
  'Поминутно, 7₽/мин',
  'На сутки, 1999 ₽/сутки',
];

export interface IBonuses {
  name: string,
  desc: string,
  cost: number,
}

export const bonuses: IBonuses [] = [
  {
    name: 'fuel',
    desc: 'Полный бак, 500р',
    cost: 500,
  },
  {
    name: 'babySeat',
    desc: 'Детское кресло, 200р',
    cost: 200,
  },
  {
    name: 'rightHandDrive',
    desc: 'Правый руль, 1600р',
    cost: 1600,
  },
];
