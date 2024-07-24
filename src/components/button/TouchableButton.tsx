import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
}

const COLORS = {
  primary: '#6200ee',
  text: 'white',
};

const TouchableButton = ({ onPress, text }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    justifyContent: 'center',
    marginVertical: 2,
    padding: 15,
  },
  buttonText: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TouchableButton;
