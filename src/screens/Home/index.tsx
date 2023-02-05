import React from 'react';

import {
  View,
  Heading,
  Text,
  Button,
  Avatar,
  HStack,
  Divider,
  Box,
} from 'native-base';
import Layout from '../../layout';

import Icon from 'react-native-vector-icons/Feather';

import { HomeProps } from './interfaces';
import { formatCurrency } from '../../utils';
import Category from './Category';

import { useCashContext } from '../../context';

const URIByFileName: any = {
  'nequi.png': require(`../../assets/images/nequi.png`),
  'bbva.png': require(`../../assets/images/bbva.png`),
  'bill.png': require(`../../assets/images/bill.png`),
};

export const Home = ({ navigation }: HomeProps): JSX.Element => {
  const { state } = useCashContext();

  const calculateTotalCash = (): number =>
    state.userCategories.used.reduce(
      (previous, current) => previous + current.cash,
      0,
    ) || 0;

  return (
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
          source={require('../../assets/images/doomSlayer.png')}
        />
      </HStack>
      <View
        marginTop={5}
        marginBottom={5}
        shadow="9"
        bgColor="white"
        padding={3}
        paddingBottom={7}
        borderRadius={10}
        position="relative"
      >
        <Text fontSize="sm" marginBottom={-2} fontWeight="light">
          Dinero total
        </Text>
        <Heading letterSpacing="md" fontWeight="normal" size="3xl">
          {formatCurrency(calculateTotalCash())}
        </Heading>
        {state.userCategories.used.length !== 0 && <Divider marginY={2} />}
        {state.userCategories.used.map(category => (
          <Category
            key={category.name}
            imageSource={URIByFileName[category.imageFileName]}
            name={category.name}
            amount={category.cash}
          />
        ))}
        <Box alignItems="center" shadow="5">
          <Button
            position="absolute"
            bottom="-45"
            leftIcon={<Icon name="edit" size={20} color="#fff" />}
            marginTop={3}
            onPress={() => navigation.navigate('EditCashComposition')}
          >
            Actualizar
          </Button>
        </Box>
        {/* Do the integration to icons in Android (iOS ready) */}
        {/* https://github.com/oblador/react-native-vector-icons#examples */}
      </View>
      <Box alignItems="center">
        <Button marginTop={10} onPress={() => navigation.navigate('Detail')}>
          Detalles de movimientos
        </Button>
      </Box>
    </Layout>
  );
};
