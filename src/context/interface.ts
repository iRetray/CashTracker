import { Category } from '../types';

export interface State {
  state: InitialState;
  dispatch: React.Dispatch<any>;
}

export interface InitialState {
  isBiometricAuthenticated: boolean;
  userCategories: {
    used: Category[];
    avaliable: Category[];
  };
}

export interface ProviderProps {
  children: JSX.Element;
}
