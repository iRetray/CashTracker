import React from 'react';
import {
  Divider,
  Heading,
  HStack,
  KeyboardAvoidingView,
  Text,
  View,
} from 'native-base';

import Layout from '../../layout';
import { Header } from '../../components';

import { EditCashCompositionProps } from './interfaces';

import EditableCategory from './EditableCategory';
import AddableCategory from './AddableCategory';
import EmptySection from './EmptySection';

import {
  activateCategory,
  disableCategory,
  updateCashAmounts,
} from '../../context/actions';
import { useCashContext } from '../../context';

const URIByFileName: any = {
  'nequi.png': require(`../../assets/images/nequi.png`),
  'bbva.png': require(`../../assets/images/bbva.png`),
  'bill.png': require(`../../assets/images/bill.png`),
};

export const EditCashComposition = ({
  navigation,
}: EditCashCompositionProps): JSX.Element => {
  const { state, dispatch } = useCashContext();

  const handleUpdate = (
    categoryName: string,
    updatedCashValue: number,
  ): void => {
    dispatch(
      updateCashAmounts({
        usedUserCategories: state.userCategories.used.map(category =>
          category.name === categoryName
            ? { ...category, cash: updatedCashValue }
            : category,
        ),
      }),
    );
  };

  const handleDelete = (categoryName: string): void => {
    dispatch(disableCategory({ categoryName }));
  };

  const handleAddCategory = (categoryName: string): void => {
    dispatch(activateCategory({ categoryName }));
  };

  return (
    <Layout>
      <Header
        title="Edición"
        subtitle="de composición de fondos"
        onPressBack={() => navigation.goBack()}
      />
      <KeyboardAvoidingView>
        <View>
          {state.userCategories.used.length === 0 && (
            <EmptySection
              title="No tienes ninguna categoría"
              subtitle="Añade una categoría disponible"
            />
          )}
          {state.userCategories.used.map(category => (
            <EditableCategory
              key={category.name}
              imageSource={URIByFileName[category.imageFileName]}
              name={category.name}
              initialValue={category.cash}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </View>
        <Divider marginTop={5} />
        <Heading size="xl" marginTop={8}>
          Categorías disponibles
        </Heading>
        <Text fontSize="lg" marginTop={-1} marginBottom={4}>
          para añadir a la composición
        </Text>
        {state.userCategories.avaliable.length === 0 && (
          <EmptySection
            title="No tienes categorías disponibles"
            subtitle="Contáctate con los desarrolladores para añadir una nueva categoría"
          />
        )}
        <HStack space={3}>
          {state.userCategories.avaliable.map(category => (
            <AddableCategory
              key={category.name}
              imageSource={URIByFileName[category.imageFileName]}
              name={category.name}
              onPress={handleAddCategory}
            />
          ))}
        </HStack>
      </KeyboardAvoidingView>
    </Layout>
  );
};
