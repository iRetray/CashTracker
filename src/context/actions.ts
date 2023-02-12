import { ActionName } from './reducer';

import { Category } from '../types';
import { InitialState } from './interface';

export const setContextState = ({
  newContextState,
}: {
  newContextState: InitialState;
}) => ({
  type: ActionName.SET_CONTEXT_STATE,
  payload: {
    newContextState,
  },
});

export const activateCategory = ({
  categoryName,
}: {
  categoryName: string;
}) => ({
  type: ActionName.ACTIVATE_CATEGORY,
  payload: {
    categoryName,
  },
});

export const disableCategory = ({
  categoryName,
}: {
  categoryName: string;
}) => ({
  type: ActionName.DISABLE_CATEGORY,
  payload: {
    categoryName,
  },
});

export const updateCashAmounts = ({
  usedUserCategories,
}: {
  usedUserCategories: Category[] | [];
}) => ({
  type: ActionName.UPDATE_CASH_AMOUNTS,
  payload: {
    usedUserCategories,
  },
});

export const authWithBiometric = () => ({
  type: ActionName.AUTH_WITH_BIOMETRIC,
  payload: {},
});
