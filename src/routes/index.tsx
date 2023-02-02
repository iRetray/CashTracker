import React from 'react';
import { View, Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from '@react-navigation/native';

import { Colors } from '../constants';
import { Home } from '../screens';

import { RoutesParamsScreenList } from './interfaces';

export const Stack = createNativeStackNavigator<RoutesParamsScreenList>();

const FirstPage = (): JSX.Element => (
  <View>
    <Text>Primera pagina</Text>
  </View>
);

const myTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.white,
  },
};

const Navigator = (): JSX.Element => (
  <NavigationContainer theme={myTheme}>
    <Stack.Navigator
      id="RootStack"
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FirstPage" component={FirstPage} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;
