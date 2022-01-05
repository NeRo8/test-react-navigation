import React from 'react';

import {View, StyleSheet} from 'react-native';

function ScreenWrapper({children}: React.PropsWithChildren<any>) {
  return <View style={styles.containerStyle}>{children}</View>;
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScreenWrapper;
