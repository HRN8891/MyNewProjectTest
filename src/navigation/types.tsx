import type {StackScreenProps} from '@react-navigation/stack';
import {SCREEN_NAMES} from './constants';

export type HomeStackParamList = {
  [SCREEN_NAMES.Dashboard]: undefined;
};

export type AuthStackParamList = {
  [SCREEN_NAMES.SignIn]: undefined;
  [SCREEN_NAMES.SignUp]: undefined;
};

export type DashboardScreenProps = StackScreenProps<HomeStackParamList, 'Dashboard'>;
export type SignInScreenProps = StackScreenProps<AuthStackParamList, 'SignIn'>;
export type SignUpScreenProps = StackScreenProps<AuthStackParamList, 'SignUp'>;

// export type ExampleRouteProps = RouteProp<HomeStackParamList, "Dashboard">;

// export type ExampleCompositeProps = CompositeNavigationProp<
//   NativeStackNavigationProp<HomeStackNavigatorParamList, 'Child'>, // child navigator
//   BottomTabNavigationProp<BottomTabNavigatorParamList, 'Parent'> // parent navigator
// >;
