import React from 'react';
import { SafeAreaView } from 'react-native';

import { LayoutProps } from './interfaces';
import { styles } from './styles';

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <SafeAreaView style={styles.container}>{children}</SafeAreaView>
);

export default Layout;
