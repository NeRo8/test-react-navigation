import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

function Button({title, onPress}: {title: string; onPress: () => void}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainerStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    color: 'blue',
  },
  buttonContainerStyle: {
    marginVertical: 10,
  },
});

export default Button;
