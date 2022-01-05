import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigation from './navigation';

import styles from './styles';
import AppProvider from './store';

export default function App() {
  return (
    <AppProvider>
      <View style={styles.containerStyle}>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </View>
    </AppProvider>
  );
}
