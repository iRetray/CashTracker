import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { NativeBaseProvider } from 'native-base';

interface NativeBaseWrapperProps {
  children: JSX.Element;
}

const NativeBaseWrapper = ({
  children,
}: NativeBaseWrapperProps): JSX.Element => (
  <NativeBaseProvider>{children}</NativeBaseProvider>
);

const CashTransfer = (): JSX.Element => (
  <NativeBaseWrapper>
    <SafeAreaView>
      <Text>Cash transfer, ready to go?</Text>
    </SafeAreaView>
  </NativeBaseWrapper>
);

export default CashTransfer;
