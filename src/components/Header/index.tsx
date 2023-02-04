import React from 'react';

import { View, Heading, Text, HStack } from 'native-base';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

interface HeaderProps {
  title: string;
  subtitle?: string;
  onPressBack: () => void;
}

export const Header = ({
  title,
  subtitle,
  onPressBack,
}: HeaderProps): JSX.Element => (
  <HStack marginBottom={5}>
    <TouchableOpacity
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
      }}
      onPress={onPressBack}
    >
      <Icon name="arrow-back-circle-outline" size={40} color="black" />
    </TouchableOpacity>
    <View>
      <Heading size="2xl">{title}</Heading>
      {subtitle && (
        <Text fontSize="lg" marginTop={-2}>
          {subtitle}
        </Text>
      )}
    </View>
  </HStack>
);
