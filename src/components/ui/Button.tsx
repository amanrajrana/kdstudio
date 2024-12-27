import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

interface ButtonProps {
  variant?: ButtonVariant; // The style variant of the button
  children: React.ReactNode; // The content inside the button (e.g., text)
  onPress?: (event: GestureResponderEvent) => void; // Function to handle press events
  disabled?: boolean; // Whether the button is disabled
  style?: StyleProp<ViewStyle>; // Additional custom styles for the button
  textStyle?: StyleProp<TextStyle>; // Additional custom styles for the text
}

const DEFAULT_COLOR = '#491B6D';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  onPress,
  disabled = false,
  style,
  textStyle,
}) => {
  const buttonStyles = [
    styles.baseButton,
    variant === 'primary' && styles.primaryButton,
    variant === 'secondary' && styles.secondaryButton,
    variant === 'outline' && styles.outlineButton,
    variant === 'ghost' && styles.ghostButton,
    disabled && styles.disabledButton,
    style,
  ];

  const textStyles = [
    styles.baseText,
    variant === 'outline' && styles.outlineText,
    variant === 'ghost' && styles.ghostText,
    textStyle,
  ];

  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonStyles}
      disabled={disabled}
      activeOpacity={0.8}>
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  baseButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  primaryButton: {
    backgroundColor: DEFAULT_COLOR,
  },
  secondaryButton: {
    backgroundColor: '#D1C4E9',
  },
  outlineButton: {
    borderWidth: 2,
    borderColor: DEFAULT_COLOR,
    backgroundColor: 'transparent',
  },
  ghostButton: {
    backgroundColor: 'transparent',
  },
  outlineText: {
    color: DEFAULT_COLOR,
  },
  ghostText: {
    color: DEFAULT_COLOR,
    fontWeight: '600',
  },
  disabledButton: {
    backgroundColor: '#BDBDBD',
  },
});

export default Button;
