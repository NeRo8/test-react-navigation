import React from 'react';
import {View, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import ScreenWrapper from '../../components/containers/ScreenWrapper';

import {ProfileStackNavigation} from '../../navigation/types';

export default function Profile({
  navigation,
}: StackScreenProps<ProfileStackNavigation, 'Profile'>) {
  const onPress = () => {
    navigation.navigate('Profile');
  };
  return (
    <ScreenWrapper>
      <Text>Profile Screen</Text>
    </ScreenWrapper>
  );
}
