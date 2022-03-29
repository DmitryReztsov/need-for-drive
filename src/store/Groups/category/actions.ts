import {CategoryActionTypes, ICategory} from './types';

function setCategory(categories: ICategory []) {
  return {type: CategoryActionTypes.SET_CATEGORY_DATA, payload: categories};
}

export default setCategory;
