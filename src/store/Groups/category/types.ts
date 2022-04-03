export interface ICategory {
  id: string,
  name: string,
}

export interface ICategoryState {
  categories: ICategory [],
  categoryId: ICategory,
}

export enum CategoryActionTypes {
  SET_CATEGORY_DATA = 'SET_CATEGORY_DATA',
  SET_CATEGORY_ID = 'SET_CATEGORY_ID',
}

export interface SetCategoryDataAction {
  type: CategoryActionTypes.SET_CATEGORY_DATA,
  payload: ICategory [],
}

export interface SetCategoryIdAction {
  type: CategoryActionTypes.SET_CATEGORY_ID,
  payload: ICategory,
}

export type CategoryAction = SetCategoryDataAction | SetCategoryIdAction;
