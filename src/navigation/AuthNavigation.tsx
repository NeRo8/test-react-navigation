import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';
import Auth from '../screens/Auth';

import {AuthStackNavigation} from './types';

const Stack = createStackNavigator<AuthStackNavigation>();

export default function AuthNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
