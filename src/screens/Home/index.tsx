import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'native-base';

import { HomeProps } from './interfaces';

export const Home = ({ navigation }: HomeProps): JSX.Element => (
  <View>
    <Text>Pagina del home</Text>
    <Button onPress={() => navigation.navigate('FirstPage')}>
      Ir a pagina
    </Button>
  </View>
);
