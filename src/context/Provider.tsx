import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';

import { State, ProviderProps, InitialState } from './interface';
import { reducer } from './reducer';

import { LocalStorage } from '../services';
import { categories } from '../data';
import { setContextState } from './actions';

const getInitialState = (): Promise<InitialState> =>
  new Promise(resolve => {
    LocalStorage.getItem('CashContextState')
      .then(CashContextState => {
        resolve(CashContextState);
      })
      .catch(() => {
        resolve({
          isBiometricAuthenticated: false,
          userCategories: {
            used: [],
            avaliable: categories,
          },
        });
      });
  });

const initialState: InitialState = {
  isBiometricAuthenticated: false,
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
  const [isSyncWithStorage, setIsSyncWithStorage] = useState<boolean>(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  useEffect(() => {
    isSyncWithStorage ? saveStateInStorage() : getFirstDataFromStorage();
  }, [state]);

  const getFirstDataFromStorage = (): void => {
    getInitialState().then(newInitialState => {
      setIsSyncWithStorage(true);
      dispatch(
        setContextState({
          newContextState: {
            ...newInitialState,
            isBiometricAuthenticated: false,
          },
        }),
      );
    });
  };

  const saveStateInStorage = (): void => {
    setTimeout(() => {
      LocalStorage.setItem('CashContextState', state);
    }, 500);
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useCashContext = () => useContext(Context);
