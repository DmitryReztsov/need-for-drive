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

export const orderStatuses = [
  {
    id: '5e26a1f0099b810b946c5d8b',
    name: 'подтвержден',
  },
  {
    id: '5e26a1f5099b810b946c5d8c',
    name: 'отменен',
  },
];
