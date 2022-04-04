import {CategoryActionTypes, ICategory} from './types';

export function setCategory(categories: ICategory []) {
  return {type: CategoryActionTypes.SET_CATEGORY_DATA, payload: categories};
}

export function setCategoryId(category: ICategory) {
  return {type: CategoryActionTypes.SET_CATEGORY_ID, payload: category};
}
