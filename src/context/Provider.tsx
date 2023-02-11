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
        console.log('resolve, ', JSON.stringify(CashContextState));
        resolve(CashContextState);
      })
      .catch(() => {
        console.log('resolve default');
        resolve({
          userCategories: {
            used: [],
            avaliable: categories,
          },
        });
      });
  });

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
  const [isSyncWithStorage, setIsSyncWithStorage] = useState<boolean>(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  useEffect(() => {
    isSyncWithStorage ? saveStateInStorage() : getFirstDataFromStorage();
  }, [state]);

  const getFirstDataFromStorage = (): void => {
    getInitialState().then(newInitialState => {
      setIsSyncWithStorage(true);
      dispatch(setContextState({ newContextState: newInitialState }));
    });
  };

  const saveStateInStorage = (): void => {
    setTimeout(() => {
      if (state.hasOwnProperty('_j')) {
        console.log('tiene el h');
      } else {
        console.log('NO tiene el h');
      }
      LocalStorage.setItem('CashContextState', state).then(() =>
        console.log('saved in storage!', JSON.stringify(state)),
      );
    }, 500);
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useCashContext = () => useContext(Context);
