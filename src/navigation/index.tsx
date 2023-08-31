import React, {useEffect} from 'react';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import type {StackNavigationOptions} from '@react-navigation/stack';

import Welcome from '../screens/Welcome';

import Dashboard from '../screens/Dashboard';

import {SCREEN_NAMES} from './constants';
import {useAppDispatch, useAppSelector} from '../store';
import {saveUserDetails} from '../store/auth/slice';
import {getSecureStorageItem, storageKeys} from '../utilities/storageUtils';
import {AuthStackParamList, HomeStackParamList} from './types';
import {IUserApiResponse} from 'store/types';

const HomeStack = createStackNavigator<HomeStackParamList>();
const AuthStack = createStackNavigator<AuthStackParamList>();

const options: StackNavigationOptions = {
  headerShown: false,
};

function AuthNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <AuthStack.Screen name="Welcome" component={Welcome}/>
      
    </AuthStack.Navigator>
  );
}

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={SCREEN_NAMES.Dashboard} component={Dashboard} options={options} />
    </HomeStack.Navigator>
  );
}

function MainNavigator() {
  const userData = useAppSelector(state => state.auth.userData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getSecureStorageItem(storageKeys.userData)
      .then((localUserData: IUserApiResponse) => {
        if (localUserData) {
          dispatch(saveUserDetails(localUserData));
        }
      })
      .catch(() => {});
  }, [dispatch]);

  return userData.email ? <HomeNavigator /> : <AuthNavigator />;
}

export default MainNavigator;
