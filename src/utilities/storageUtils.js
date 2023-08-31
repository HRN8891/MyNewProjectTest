import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Keychain from 'react-native-keychain';

export function setSecureStorageItem(key, value) {
  if (!key || !value) {
    return Promise.reject('key-value pair is required');
  }
  return Keychain.setGenericPassword(key, JSON.stringify(value), {
    service: key,
  });
}

export function getSecureStorageItem(key) {
  if (!key) {
    return Promise.reject('key is required');
  }
  return Keychain.getGenericPassword({
    service: key,
  }).then(credentials => {
    if (!credentials?.password) {
      return null;
    }
    return JSON.parse(credentials.password);
  });
}

export function removeSecureStorageItem(key) {
  return Keychain.resetGenericPassword({service: key});
}

export function setUnsecureStorageItem(key, value) {
  if (!key || !value) {
    return Promise.reject('key-value pair is required');
  }
  return AsyncStorage.setItem(key, JSON.stringify(value));
}

export function getUnsecureStorageItem(key) {
  if (!key) {
    return Promise.reject('key is required');
  }
  return AsyncStorage.getItem(key).then(value => {
    if (!value) {
      return null;
    }
    return JSON.parse(value);
  });
}

export function removeUnsecureStorageItem(key) {
  return AsyncStorage.removeItem(key);
}
export function removeMultipleUnsecureStorageItem(keys) {
  return AsyncStorage.multiRemove(keys);
}

export const storageKeys = {
  userData: 'userData',
};
