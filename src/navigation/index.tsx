import React, {useContext} from 'react';

import AuthNavigation from './AuthNavigation';
import MainNavigation from './MainNavigation';
import Onboarding from '../screens/Onboarding';

import {AppContext} from '../store';

export default function AppNavigation() {
  const {isAuth, isOnboardingComplete} = useContext(AppContext);

  if (!isOnboardingComplete) {
    return <Onboarding />;
  }

  if (!isAuth) {
    return <AuthNavigation />;
  }

  return <MainNavigation />;
}
