export interface IBonuses {
  name: string,
  desc: string,
  cost: number,
}

export const bonuses: IBonuses [] = [
  {
    name: 'isFullTank',
    desc: 'Полный бак, 500р',
    cost: 500,
  },
  {
    name: 'isNeedChildChair',
    desc: 'Детское кресло, 200р',
    cost: 200,
  },
  {
    name: 'isRightWheel',
    desc: 'Правый руль, 1600р',
    cost: 1600,
  },
];
