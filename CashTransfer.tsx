import React from 'react';
import { extendTheme, NativeBaseProvider } from 'native-base';

import { Provider } from './src/context';
import Navigator from './src/routes';

const theme = extendTheme({
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'coolGray',
        rounded: 'xl',
        padding: 1,
        paddingRight: 5,
        paddingLeft: 5,
        _text: { fontWeight: 'bold', fontSize: 20 },
      },
    },
    Input: {
      defaultProps: {
        size: 'lg',
        focusOutlineColor: 'coolGray.900',
        placeholderTextColor: 'coolGray.400',
        color: 'coolGray.900',
        backgroundColor: 'coolGray.100',
      },
    },
  },
});

interface NativeBaseWrapperProps {
  children: JSX.Element;
}

const NativeBaseWrapper = ({
  children,
}: NativeBaseWrapperProps): JSX.Element => (
  <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
);

const CashTransfer = (): JSX.Element => (
  <NativeBaseWrapper>
    <Provider>
      <Navigator />
    </Provider>
  </NativeBaseWrapper>
);

export default CashTransfer;
