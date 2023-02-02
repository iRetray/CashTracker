import React from 'react';

import {
  View,
  Heading,
  Text,
  Button,
  Avatar,
  HStack,
  Divider,
  Icon,
} from 'native-base';
import Layout from '../../layout';

import { HomeProps } from './interfaces';
import { formatCurrency } from '../../utils';
import Category from './Category';

export const Home = ({ navigation }: HomeProps): JSX.Element => (
  <Layout>
    <HStack justifyContent="space-between">
      <View>
        <Heading size="2xl">Bienvenido</Heading>
        <Text fontSize="lg" marginTop={-2}>
          Julian Camilo
        </Text>
      </View>
      <Avatar
        size="lg"
        source={{
          uri: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800',
        }}
      />
    </HStack>
    <View
      marginTop={5}
      shadow="9"
      bgColor="white"
      padding={3}
      borderRadius={10}
    >
      <Text fontSize="sm" marginBottom={-2} fontWeight="light">
        Dinero total
      </Text>
      <Heading letterSpacing="md" fontWeight="normal" size="3xl">
        {formatCurrency(5650000)}
      </Heading>
      <Divider marginY={2} />
      <Category
        imageSource={require('../../assets/images/nequi.png')}
        name="Nequi"
        amount={4520000}
      />
      <Category
        imageSource={require('../../assets/images/bbva.png')}
        name="BBVA"
        amount={860000}
      />
      <Category
        imageSource={require('../../assets/images/bill.png')}
        name="Efectivo"
        amount={520000}
      />
    </View>
    <Button marginTop={10} onPress={() => navigation.navigate('FirstPage')}>
      Ir a pagina
    </Button>
  </Layout>
);
