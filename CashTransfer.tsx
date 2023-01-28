import React from 'react';
import { NativeBaseProvider } from 'native-base';

import Navigator from './src/routes';

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
    <Navigator />
  </NativeBaseWrapper>
);

export default CashTransfer;
