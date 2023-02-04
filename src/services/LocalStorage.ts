import AsyncStorage from '@react-native-async-storage/async-storage';

type AvaliableKeys = 'userName' | 'cashComposition' | 'movementsDetail';

interface LocalStorageInterface {
  setItem: (key: AvaliableKeys, value: any) => Promise<any>;
  getItem: (key: AvaliableKeys) => Promise<any>;
}

export const LocalStorage: LocalStorageInterface = {
  setItem: (key, value) => AsyncStorage.setItem(key, JSON.stringify(value)),
  getItem: key =>
    new Promise(resolve => {
      AsyncStorage.getItem(key).then(valueStored =>
        resolve(JSON.parse(valueStored || '')),
      );
    }),
};
