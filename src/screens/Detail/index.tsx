import {
  Avatar,
  Box,
  FlatList,
  Heading,
  HStack,
  ScrollView,
  Spacer,
  Text,
  View,
  VStack,
} from 'native-base';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Layout from '../../layout';
import { DetailProps } from './interfaces';

export const Detail = ({ navigation }: DetailProps): JSX.Element => {
  const [detailList, setDetailList] = useState<any[]>([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@detail');
      if (value !== null) {
        setDetailList(JSON.parse(value));
        console.log('value**+++++', JSON.parse(value));
      }
    } catch (e) {
      // error reading value
    }
  };

  return (
    <Layout>
      <Heading fontSize="xl" p="4" pb="3">
        Detail
      </Heading>
      <ScrollView>
        <FlatList
          data={detailList}
          renderItem={({ item }: any) => (
            <Box
              bg="white"
              rounded="lg"
              overflow="hidden"
              paddingY="10"
              paddingX="5"
              mb="5"
              borderColor="coolGray.200"
              borderWidth="1"
              shadow="2"
            >
              <HStack space={[2, 3]} justifyContent="space-between">
                <Avatar bg={item?.colorIcon || 'green.500'} mr="1">
                  {item?.nameIcon || ''}
                </Avatar>
                <VStack>
                  <Text
                    _dark={{ color: 'warmGray.50' }}
                    color="coolGray.800"
                    bold
                  >
                    {item.subType}
                  </Text>
                  <Text color="coolGray.600" _dark={{ color: 'warmGray.200' }}>
                    {item.current}
                  </Text>
                </VStack>
                <Spacer />
                <Text
                  fontSize="xs"
                  _dark={{ color: 'warmGray.50' }}
                  color="coolGray.800"
                  alignSelf="flex-start"
                >
                  {item.date}
                </Text>
              </HStack>
            </Box>
          )}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </Layout>
  );
};
