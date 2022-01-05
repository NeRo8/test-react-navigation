import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Detail from '../screens/Home/Detail';

import {HomeStackNavigation} from './types';
import {defaultStackOptions} from './options';

const Stack = createStackNavigator<HomeStackNavigation>();

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={defaultStackOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
