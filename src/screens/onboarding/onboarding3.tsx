import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Certification from '../../assets/svg/Certification';

export default function OnBoarding3() {
  return (
    <View style={styles.container}>
      <View style={styles.svgImage}>
        <Certification />
      </View>
      <View style={styles.stepBar}>
        <View style={[styles.stepDot]} />
        <View style={[styles.stepDot]} />
        <View style={[styles.stepDot, styles.active]} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Get Certified</Text>
        <Text style={styles.text}>
          Start learning and get certified after your training to get a
          lucrative job
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
