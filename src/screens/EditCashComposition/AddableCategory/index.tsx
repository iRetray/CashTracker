import React from 'react';

import { Image, Text, VStack } from 'native-base';
import { TouchableWithoutFeedback } from 'react-native';

import { AddableCategoryProps } from './interfaces';
import Animated, { Layout, ZoomIn, ZoomOut } from 'react-native-reanimated';

const AddableCategory = ({
  imageSource,
  name,
  isFirstRender,
  onPress,
}: AddableCategoryProps): JSX.Element => (
  <Animated.View
    entering={ZoomIn.delay(isFirstRender ? 250 : 0)}
    exiting={ZoomOut}
    layout={Layout.springify().delay(300)}
  >
    <TouchableWithoutFeedback onPress={() => onPress(name)}>
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
    </TouchableWithoutFeedback>
  </Animated.View>
);

export default AddableCategory;
