import React, { useState } from 'react';

import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Input,
  View,
  VStack,
} from 'native-base';
import { formatCurrency } from '../../../utils';

import Animated, {
  Layout,
  SlideInLeft,
  SlideOutLeft,
} from 'react-native-reanimated';

import Icon from 'react-native-vector-icons/Feather';

import { EditableCategoryProps } from './interfaces';

const EditableCategory = ({
  imageSource,
  name,
  initialValue,
  isFirstRender,
  onUpdate,
  onDelete,
}: EditableCategoryProps): JSX.Element => {
  const [value, setValue] = useState<string>(formatCurrency(initialValue));

  const handleOnChange = (newText: string): void => {
    const cleanedNumber: string = newText.replace(/\$/g, '').replace(/\./g, '');
    const isEmpty: boolean = cleanedNumber === '';
    setValue(isEmpty ? '$0' : formatCurrency(parseInt(cleanedNumber)));
    onUpdate(name, parseInt(cleanedNumber));
  };

  return (
    <Animated.View
      entering={SlideInLeft.delay(isFirstRender ? 250 : 0)}
      exiting={SlideOutLeft}
      layout={Layout.springify().delay(300)}
    >
      <HStack justifyContent="center" alignItems="center" marginBottom={5}>
        <View margin={2}>
          <Image
            source={imageSource}
            size="50"
            alt="Nequi Logo"
            marginRight={2}
            borderRadius={5}
          />
        </View>
        <VStack justifyContent="center" flex={1}>
          <HStack
            w="90%"
            alignItems="center"
            justifyContent="space-between"
            marginBottom={1}
          >
            <Heading letterSpacing="md" fontWeight="normal">
              {name}
            </Heading>
            <Box alignItems="flex-start" shadow="5">
              <Button
                _text={{ fontWeight: 'bold', fontSize: 12 }}
                colorScheme="red"
                paddingTop={0.5}
                paddingBottom={0.5}
                paddingRight={2}
                paddingLeft={2}
                leftIcon={<Icon name="delete" size={15} color="#fff" />}
                onPress={() => onDelete(name)}
              >
                Eliminar
              </Button>
            </Box>
          </HStack>
          <Input
            w="90%"
            keyboardType="number-pad"
            placeholder={formatCurrency(initialValue)}
            defaultValue={value}
            value={value}
            onChangeText={handleOnChange}
          />
        </VStack>
      </HStack>
    </Animated.View>
  );
};
export default EditableCategory;
