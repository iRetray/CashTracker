import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  KeyboardAvoidingView,
  Text,
} from 'native-base';

import Layout from '../../layout';
import { EditCashCompositionProps } from './interfaces';
import { Header } from '../../components';

import Icon from 'react-native-vector-icons/FontAwesome';

import EditableCategory from './EditableCategory';
import AddableCategory from './AddableCategory';

import { categories } from '../../data';

import { CategoryForUser } from '../../types';
import { LocalStorage } from '../../services';

export const EditCashComposition = ({
  navigation,
}: EditCashCompositionProps): JSX.Element => {
  const [categoriesList, setCategoriesList] = useState<CategoryForUser[]>([]);

  useEffect(() => {
    getUserCashComposition();
  }, []);

  const getUserCashComposition = (): void => {
    LocalStorage.getItem('cashComposition').then(userCashComposition => {
      const mixedCategories: CategoryForUser | any[] = categories.map(
        category => {
          const userCategory = userCashComposition.find(
            ({ name }: any) => name === category.name,
          );
          return userCategory
            ? { ...category, ...userCategory }
            : { ...category, cash: 0, isUsed: false };
        },
      );
      console.log('mixed, ', mixedCategories);
      setCategoriesList(mixedCategories);
    });
  };

  const handleUpdate = (categoryName: string, updatedValue: number): void => {
    console.log(categoryName, ' : ', updatedValue);
  };

  const handleDelete = (serviceName: string): void => {
    console.log('Delete Category: ', serviceName);
  };

  const handleAddCategory = (serviceName: string): void => {
    console.log('Add Category: ', serviceName);
  };

  return (
    <Layout>
      <Header
        title="Edición"
        subtitle="de composición de fondos"
        onPressBack={() => navigation.goBack()}
      />
      <KeyboardAvoidingView>
        {categoriesList
          ?.filter(({ isUsed }) => isUsed)
          .map(category => (
            <EditableCategory
              imageSource={require(`../../assets/images/nequi.png`)}
              name={category.name}
              initialValue={category.cash}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        <EditableCategory
          imageSource={require('../../assets/images/nequi.png')}
          name="Nequi"
          initialValue={2500000}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
        <EditableCategory
          imageSource={require('../../assets/images/bill.png')}
          name="Efectivo"
          initialValue={640000}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
        <Box alignItems="center" shadow="5">
          <Button
            leftIcon={<Icon name="save" size={20} color="#fff" />}
            marginTop={3}
            onPress={() => null}
          >
            Guardar composición
          </Button>
        </Box>
        <Divider marginTop={10} />
        <Heading size="xl" marginTop={8}>
          Categorías disponibles
        </Heading>
        <Text fontSize="lg" marginTop={-1} marginBottom={4}>
          para añadir a la composición
        </Text>
        <HStack space={3}>
          <AddableCategory
            imageSource={require('../../assets/images/bbva.png')}
            name="BBVA"
            onPress={handleAddCategory}
          />
          <AddableCategory
            imageSource={require('../../assets/images/nequi.png')}
            name="Nequi"
            onPress={handleAddCategory}
          />
        </HStack>
      </KeyboardAvoidingView>
    </Layout>
  );
};
