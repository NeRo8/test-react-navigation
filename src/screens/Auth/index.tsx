import React from 'react';
import {Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import Button from '../../components/buttons/Button';

import ScreenWrapper from '../../components/containers/ScreenWrapper';

import {AuthStackNavigation} from '../../navigation/types';

export default function Auth({
  navigation,
}: StackScreenProps<AuthStackNavigation, 'Auth'>) {
  const onNavigate = (screen: keyof AuthStackNavigation) => () =>
    navigation.navigate(screen);
  return (
    <ScreenWrapper>
      <Text>Auth Screen</Text>
      <Button title="SignIn" onPress={onNavigate('SignIn')} />
      <Button title="SignUp" onPress={onNavigate('SignUp')} />
    </ScreenWrapper>
  );
}
