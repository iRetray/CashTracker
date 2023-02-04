import React, { useEffect } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from '@react-navigation/native';

import { Colors } from '../constants';
import { Home, Detail } from '../screens';
import currentDetail from '../data/Detail';

import { RoutesParamsScreenList } from './interfaces';

export const Stack = createNativeStackNavigator<RoutesParamsScreenList>();

const myTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.white,
  },
};

const Navigator = (): JSX.Element => {
  useEffect(() => {
    storeData();
  }, []);

  const storeData = async () => {
    const jsonValue = JSON.stringify(currentDetail);

    try {
      await AsyncStorage.setItem('@detail', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  return (
    <NavigationContainer theme={myTheme}>
      <Stack.Navigator
        id="RootStack"
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
