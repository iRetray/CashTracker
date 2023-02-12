import React, { useEffect } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from '@react-navigation/native';

import { Colors } from '../constants';
import { Home, Detail, EditCashComposition, BiometricAuth } from '../screens';
import currentDetail from '../data/Detail';

import {
  RoutesParamsScreenList,
  RoutesParamsAuthScreenList,
} from './interfaces';
import { LocalStorage } from '../services';

import { useCashContext } from '../context';

export const Stack = createNativeStackNavigator<RoutesParamsScreenList>();
export const StackAuth =
  createNativeStackNavigator<RoutesParamsAuthScreenList>();

const myTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.white,
  },
};

const Navigator = (): JSX.Element => {
  const { state } = useCashContext();

  /* Why set random data at app's start? */
  useEffect(() => {
    storeData();
  }, []);

  const storeData = (): void => {
    LocalStorage.setItem('movementsDetail', currentDetail);
  };

  return (
    <NavigationContainer theme={myTheme}>
      {state.isBiometricAuthenticated ? (
        <Stack.Navigator
          id="RootStack"
          initialRouteName="Home"
          screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="EditCashComposition"
            component={EditCashComposition}
          />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      ) : (
        <StackAuth.Navigator
          id="AuthStack"
          initialRouteName="BiometricAuth"
          screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
        >
          <StackAuth.Screen name="BiometricAuth" component={BiometricAuth} />
        </StackAuth.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigator;
