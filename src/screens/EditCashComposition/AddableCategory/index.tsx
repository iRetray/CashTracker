import React from 'react';

import { Image, Text, VStack } from 'native-base';
import { TouchableOpacity } from 'react-native';

import { AddableCategoryProps } from './interfaces';
import Animated, { Layout, ZoomIn, ZoomOut } from 'react-native-reanimated';

const AddableCategory = ({
  imageSource,
  name,
  onPress,
}: AddableCategoryProps): JSX.Element => (
  <Animated.View
    entering={ZoomIn}
    exiting={ZoomOut}
    layout={Layout.springify().delay(300)}
  >
    <TouchableOpacity onPress={() => onPress(name)}>
      <VStack
        justifyContent="center"
        alignItems="center"
        backgroundColor="red"
        background="white"
        borderRadius={10}
        padding={3}
        paddingBottom={1}
        shadow="5"
      >
        <Image
          source={imageSource}
          size="75"
          alt="Nequi Logo"
          borderRadius={5}
        />
        <Text fontSize="md" fontWeight="bold">
          {name}
        </Text>
      </VStack>
    </TouchableOpacity>
  </Animated.View>
);

export default AddableCategory;
