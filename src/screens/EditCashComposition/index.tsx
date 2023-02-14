import React, { useEffect, useState } from 'react';
import {
  Divider,
  Heading,
  HStack,
  KeyboardAvoidingView,
  Text,
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
import { FlatList } from 'react-native';

const URIByFileName: any = {
  'nequi.png': require(`../../assets/images/nequi.png`),
  'bbva.png': require(`../../assets/images/bbva.png`),
  'bill.png': require(`../../assets/images/bill.png`),
};

export const EditCashComposition = ({
  navigation,
}: EditCashCompositionProps): JSX.Element => {
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsFirstRender(true);
    }, 500);
    return () => {
      setIsFirstRender(true);
    };
  }, []);

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
        <FlatList
          data={state.userCategories.used}
          renderItem={({ item }) => (
            <EditableCategory
              key={item.name}
              isFirstRender={isFirstRender}
              imageSource={URIByFileName[item.imageFileName]}
              name={item.name}
              initialValue={item.cash}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          )}
          ListEmptyComponent={() => (
            <EmptySection
              isFirstRender={isFirstRender}
              title="No tienes ninguna categoría"
              subtitle="Añade una categoría disponible"
            />
          )}
        />
        <Divider marginTop={5} />
        <Heading size="xl" marginTop={8}>
          Categorías disponibles
        </Heading>
        <Text fontSize="lg" marginTop={-1} marginBottom={4}>
          para añadir a la composición
        </Text>
        {state.userCategories.avaliable.length === 0 && (
          <EmptySection
            isFirstRender={isFirstRender}
            title="No tienes categorías disponibles"
            subtitle="Contáctate con los desarrolladores para añadir una nueva categoría"
          />
        )}
        <HStack space={3}>
          {state.userCategories.avaliable.map(category => (
            <AddableCategory
              key={category.name}
              isFirstRender={isFirstRender}
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
