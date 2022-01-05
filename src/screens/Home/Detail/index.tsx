import React from 'react';
import {View, Text} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';

import ScreenWrapper from '../../../components/containers/ScreenWrapper';
import {HomeStackNavigation} from '../../../navigation/types';

export default function Detail({
  route,
}: StackScreenProps<HomeStackNavigation, 'Detail'>) {
  const {itemId} = route.params;
  return (
    <ScreenWrapper>
      <Text>Home Detail Screen</Text>
      <Text>{itemId}</Text>
    </ScreenWrapper>
  );
}
