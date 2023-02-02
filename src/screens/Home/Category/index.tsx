import React from 'react';

import { Heading, HStack, Image, Text, View, VStack } from 'native-base';
import { formatCurrency } from '../../../utils';

import { CategoryProps } from './interfaces';

const Category: React.FC<CategoryProps> = ({ imageSource, name, amount }) => (
  <HStack>
    <View margin={2}>
      <Image
        source={imageSource}
        size="50"
        alt="Nequi Logo"
        marginRight={2}
        borderRadius={5}
      />
    </View>
    <VStack justifyContent="center">
      <Text marginBottom={-1} fontWeight="light">
        {name}
      </Text>
      <Heading letterSpacing="md" fontWeight="normal">
        {formatCurrency(amount)}
      </Heading>
    </VStack>
  </HStack>
);

export default Category;
