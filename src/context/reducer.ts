import { InitialState } from './interface';

export const reducer = (state: InitialState, action: any) => {
  switch (action.type) {
    case ActionName.SET_CONTEXT_STATE:
      return {
        ...state,
        ...action.payload.newContextState,
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
    case ActionName.AUTH_WITH_BIOMETRIC:
      return {
        ...state,
        isBiometricAuthenticated: true,
      };

    default:
      return state;
  }
};

export enum ActionName {
  SET_CONTEXT_STATE = 'SET_CONTEXT_STATE',
  ACTIVATE_CATEGORY = 'ACTIVATE_CATEGORY',
  DISABLE_CATEGORY = 'DISABLE_CATEGORY',
  UPDATE_CASH_AMOUNTS = 'UPDATE_CASH_AMOUNTS',
  AUTH_WITH_BIOMETRIC = 'AUTH_WITH_BIOMETRIC',
}
