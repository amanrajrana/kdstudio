import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import UndrawEducator1 from '../../assets/svg/UndrawEducator1';

export default function OnBoarding1() {
  return (
    <View style={styles.container}>
      <View style={styles.svgImage}>
        <UndrawEducator1 />
      </View>
      <View style={styles.stepBar}>
        <View style={[styles.stepDot, styles.active]} />
        <View style={[styles.stepDot]} />
        <View style={[styles.stepDot]} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Welcome to DWD</Text>
        <Text style={styles.text}>
          Welcome as you learn a world changing skill to get a better job.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    maxHeight: 350,
  },
  svgImage: {
    height: 200,
  },

  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#491B6D',
    marginVertical: 12,
  },

  text: {
    fontSize: 18,
    color: '#000000',
    textAlign: 'center',
    maxWidth: 300,
  },

  stepBar: {
    flexDirection: 'row',
    marginTop: 20,
  },

  stepDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#D9D9D9',
    marginHorizontal: 5,
  },

  active: {
    backgroundColor: '#491B6D',
  },
});
