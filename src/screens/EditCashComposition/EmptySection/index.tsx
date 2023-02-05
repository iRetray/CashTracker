import React from 'react';
import { Alert, Box, Center, HStack, Text, VStack } from 'native-base';

interface EmptySectionProps {
  title: string;
  subtitle: string;
}

const EmptySection = ({ title, subtitle }: EmptySectionProps): JSX.Element => (
  <Center>
    <Alert maxW="350" status="info" colorScheme="info">
      <VStack space={2} flexShrink={1} w="100%">
        <HStack
          flexShrink={1}
          space={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <HStack flexShrink={1} space={2} alignItems="center">
            <Alert.Icon />
            <Text fontSize="md" fontWeight="medium" color="coolGray.800">
              {title}
            </Text>
          </HStack>
        </HStack>
        <Box pl="6" marginTop={-2}>
          {subtitle}
        </Box>
      </VStack>
    </Alert>
  </Center>
);

export default EmptySection;
