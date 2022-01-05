import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Profile from '../screens/Profile';
import Detail from '../screens/Profile/Detail';

import {ProfileStackNavigation} from './types';

const Stack = createStackNavigator<ProfileStackNavigation>();

export default function ProfileNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
