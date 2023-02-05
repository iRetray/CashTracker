import { ActionName } from './reducer';

import { Category } from '../types';

export const setUserCategories = ({
  userCategories,
}: {
  userCategories: {
    used: Category[] | [];
    avaliable: Category[] | [];
  };
}) => ({
  type: ActionName.SET_USER_CATEGORIES,
  payload: {
    userCategories,
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
