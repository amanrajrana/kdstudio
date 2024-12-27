import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const SkipButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log('Skip button pressed')}>
        <Text style={styles.skipButtonText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SkipButton;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
  },
  skipButtonText: {
    color: '#491B6D',
    fontSize: 16,
  },
});
