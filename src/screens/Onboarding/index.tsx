import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import Button from '../../components/buttons/Button';

import ScreenWrapper from '../../components/containers/ScreenWrapper';
import {AppContext} from '../../store';

export default function Onboarding() {
  const {onOnboardingComplete} = useContext(AppContext);

  const onPress = () => onOnboardingComplete(true);

  return (
    <ScreenWrapper>
      <Text>Onboarding Screen</Text>
      <Button title="Complete" onPress={onPress} />
    </ScreenWrapper>
  );
}
