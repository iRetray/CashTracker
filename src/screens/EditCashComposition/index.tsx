import React from 'react';
import { Text, View } from 'native-base';

import Layout from '../../layout';
import { EditCashCompositionProps } from './interfaces';

export const EditCashComposition = ({
  navigation,
}: EditCashCompositionProps): JSX.Element => {
  return (
    <Layout>
      <View>
        <Text>Hola</Text>
      </View>
    </Layout>
  );
};
