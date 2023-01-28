import React from 'react';
import { View, Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Home } from '../screens';

import { RoutesParamsScreenList } from './interfaces';

export const Stack = createNativeStackNavigator<RoutesParamsScreenList>();

const FirstPage = (): JSX.Element => (
  <View>
    <Text>Primera pagina</Text>
  </View>
);

const Navigator = (): JSX.Element => (
  <NavigationContainer>
    <Stack.Navigator id="RootStack" initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FirstPage" component={FirstPage} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;
