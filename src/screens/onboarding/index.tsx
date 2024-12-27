import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import SkipButton from './skipButton';
import Button from '../../components/ui/Button';
import OnBoarding1 from './onboarding1';
import OnBoarding2 from './onboarding2';
import OnBoarding3 from './onboarding3';

const OnBoardingScreen: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const onboardingSteps = [<OnBoarding1 />, <OnBoarding2 />, <OnBoarding3 />];

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <View style={styles.container}>
      <SkipButton />
      {onboardingSteps[currentStep]}
      <View style={styles.buttonContainer}>
        {currentStep > 0 && (
          <Button variant="ghost" onPress={handleBack}>
            Back
          </Button>
        )}
        <Button style={styles.button} onPress={handleNext}>
          {currentStep === onboardingSteps.length - 1 ? 'Start' : 'Next'}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    padding: 20,
    marginBottom: 20,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  button: {
    width: 90,
  },
});

export default OnBoardingScreen;
