import AsyncStorage from '@react-native-async-storage/async-storage';

/* TODO: migrate everything to context, the context backup auto in storage ;) */
type AvaliableKeys = 'CashContextState' | 'movementsDetail';

interface LocalStorageInterface {
  setItem: (key: AvaliableKeys, value: any) => Promise<any>;
  getItem: (key: AvaliableKeys) => Promise<any>;
}

export const LocalStorage: LocalStorageInterface = {
  setItem: (key, value) => AsyncStorage.setItem(key, JSON.stringify(value)),
  getItem: key =>
    new Promise((resolve, reject) => {
      AsyncStorage.getItem(key).then(valueStored => {
        if (valueStored) {
          resolve(JSON.parse(valueStored || ''));
        } else {
          reject(`LocalStorage hasn't data with the key: "${key}"`);
        }
      });
    }),
};
