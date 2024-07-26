import React from 'react';
import {
  TextInput,
  View,
  TextInputProps,
  ViewStyle,
  StyleProp,
} from 'react-native';

interface FGTextInputProps extends TextInputProps {
  borderColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
}

const FGTextImput = ({
  containerStyle,
  inputStyle,
  ...props
}: FGTextInputProps) => {
  return (
    <View style={containerStyle}>
      <TextInput {...props} style={inputStyle} />
    </View>
  );
};

export default FGTextImput;
