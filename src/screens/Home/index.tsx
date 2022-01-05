import React from 'react';
import {View, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import Button from '../../components/buttons/Button';
import ScreenWrapper from '../../components/containers/ScreenWrapper';
import {HomeStackNavigation} from '../../navigation/types';

export default function Home({
  navigation,
}: StackScreenProps<HomeStackNavigation, 'Home'>) {
  const onDetail = () =>
    navigation.navigate('Detail', {
      itemId: 0,
    });

  return (
    <ScreenWrapper>
      <Text>Home Screen</Text>
      <Button title="Detail" onPress={onDetail} />
    </ScreenWrapper>
  );
}
