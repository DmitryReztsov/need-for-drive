export interface ICategory {
  id: string,
  name: string,
}

export interface ICategoryState {
  categories: ICategory [],
}

export enum CategoryActionTypes {
  SET_CATEGORY_DATA = 'SET_CATEGORY_DATA',
}

export interface SetCategoryDataAction {
  type: CategoryActionTypes.SET_CATEGORY_DATA,
  payload: ICategory [],
}

export type CategoryAction = SetCategoryDataAction;
