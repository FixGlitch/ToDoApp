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
import { darkTheme, lightTheme } from '../../../theme/theme';
import Done from '../Icons/Done';
import { createStyles } from './styles';
import { useAppSelector } from '../../../redux/hooks';

interface FGButtonDoneProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  subTitle: string;
  containerStyle?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  subTitleStyle?: StyleProp<TextStyle>;
}

const FGButtonDone = ({
  onPress,
  title,
  subTitle,
  containerStyle,
  buttonStyle,
  titleStyle,
  subTitleStyle,
}: FGButtonDoneProps) => {
  const theme = useAppSelector((state) => state.theme.theme);
  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
  const styles = createStyles(currentTheme);
  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Done color={currentTheme.colors.background} />
        <View style={styles.infoContainer}>
          <Text style={titleStyle}>{title}</Text>
          <Text style={subTitleStyle}>{subTitle}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FGButtonDone;
