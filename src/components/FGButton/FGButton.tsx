import React from 'react';
import {
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
  View,
  StyleProp,
} from 'react-native';

interface FGButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
  containerStyle?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const FGButton = ({
  onPress,
  text,
  containerStyle,
  buttonStyle,
  textStyle,
}: FGButtonProps) => {
  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FGButton;
