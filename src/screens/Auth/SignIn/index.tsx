import React, {useContext} from 'react';
import {Text} from 'react-native';
import Button from '../../../components/buttons/Button';

import ScreenWrapper from '../../../components/containers/ScreenWrapper';
import {AppContext} from '../../../store';

export default function SignIn() {
  const {onAuthComplete} = useContext(AppContext);

  const onAuth = () => onAuthComplete(true);

  return (
    <ScreenWrapper>
      <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={onAuth} />
    </ScreenWrapper>
  );
}
