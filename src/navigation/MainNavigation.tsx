import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ProfileNavigation from './ProfileNavigation';
import HomeNavigation from './HomeStack';

import {MainTabNavigation} from './types';
import {defaultTabOptions} from './options';

const Tab = createBottomTabNavigator<MainTabNavigation>();

export default function MainNavigation() {
  return (
    <Tab.Navigator screenOptions={defaultTabOptions}>
      <Tab.Screen name="HomeStack" component={HomeNavigation} />
      <Tab.Screen name="ProfileStack" component={ProfileNavigation} />
    </Tab.Navigator>
  );
}
