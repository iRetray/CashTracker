import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';

import { State, ProviderProps, InitialState } from './interface';
import { reducer } from './reducer';

import { LocalStorage } from '../services';
import { Category } from '../types';
import { categories } from '../data';
import { setUserCategories } from './actions';

const initialState: InitialState = {
  userCategories: {
    used: [],
    avaliable: categories,
  },
};

export const Context = createContext<State>({
  state: initialState,
  dispatch: () => {},
});

export const Provider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);

  /* useEffect(() => {
    getStoredUserData();
  }, []); */

  /*  const getStoredUserData = (): void => {
    const defaultCategories: Category[] = categories;
    LocalStorage.getItem('userCategories')
      .then(userSavedCategories => {
        dispatch(
          setUserCategories({
            userCategories: userSavedCategories,
          }),
        );
      })
      .catch(error => {
        console.error(error);
        LocalStorage.setItem('userCategories', {
          used: [],
          avaliable: defaultCategories,
        });
        dispatch(
          setUserCategories({
            userCategories: {
              used: [],
              avaliable: defaultCategories,
            },
          }),
        );
      });
  }; */

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useCashContext = () => useContext(Context);
