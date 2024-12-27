import {SafeAreaView, ScrollView, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import OnBoardingScreen from './screens/onboarding';

export default function App() {
  const screenHeight = Dimensions.get('window').height; // Get screen height

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={[styles.container, {height: screenHeight}]}>
        <OnBoardingScreen />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
