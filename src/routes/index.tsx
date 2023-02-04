import React, { useEffect } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from '@react-navigation/native';

import { Colors } from '../constants';
import { Home, Detail, EditCashComposition } from '../screens';
import currentDetail from '../data/Detail';

import { RoutesParamsScreenList } from './interfaces';
import { LocalStorage } from '../services';

export const Stack = createNativeStackNavigator<RoutesParamsScreenList>();

const myTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.white,
  },
};

const Navigator = (): JSX.Element => {
  /* Why set random data at app's start? */
  useEffect(() => {
    storeData();
  }, []);

  const storeData = (): void => {
    LocalStorage.setItem('movementsDetail', currentDetail);
  };

  return (
    <NavigationContainer theme={myTheme}>
      <Stack.Navigator
        id="RootStack"
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="EditCashComposition"
          component={EditCashComposition}
        />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
