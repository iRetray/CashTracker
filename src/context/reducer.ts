import { InitialState } from './interface';

export const reducer = (state: InitialState, action: any) => {
  switch (action.type) {
    case ActionName.SET_USER_CATEGORIES:
      return {
        ...state,
        userCategories: action.payload.userCategories,
      };
    case ActionName.ACTIVATE_CATEGORY:
      return {
        ...state,
        userCategories: {
          used: [
            ...state.userCategories.used,
            state.userCategories.avaliable.find(
              ({ name }) => name === action.payload.categoryName,
            ),
          ],
          avaliable: state.userCategories.avaliable.filter(
            ({ name }) => name !== action.payload.categoryName,
          ),
        },
      };
    case ActionName.DISABLE_CATEGORY:
      return {
        ...state,
        userCategories: {
          used: state.userCategories.used.filter(
            ({ name }) => name !== action.payload.categoryName,
          ),
          avaliable: [
            ...state.userCategories.avaliable,
            state.userCategories.used.find(
              ({ name }) => name === action.payload.categoryName,
            ),
          ],
        },
      };
    case ActionName.UPDATE_CASH_AMOUNTS:
      return {
        ...state,
        userCategories: {
          ...state.userCategories,
          used: action.payload.usedUserCategories,
        },
      };
    default:
      return state;
  }
};

export enum ActionName {
  SET_USER_CATEGORIES = 'SET_USER_CATEGORIES',
  ACTIVATE_CATEGORY = 'ACTIVATE_CATEGORY',
  DISABLE_CATEGORY = 'DISABLE_CATEGORY',
  UPDATE_CASH_AMOUNTS = 'UPDATE_CASH_AMOUNTS',
}
