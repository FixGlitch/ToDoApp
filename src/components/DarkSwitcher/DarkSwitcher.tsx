import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { toggleTheme } from '../../../redux/reducers/themeReducer';
import { createStyles } from './styles';
import { lightTheme, darkTheme } from '../../../theme/theme';
import MoonIcon from '../Icons/Moon';
import SunIcon from '../Icons/Sun';

const ThemeToggleButton: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentTheme = useSelector((state: RootState) => state.theme.theme);
  const theme = currentTheme === 'dark' ? darkTheme : lightTheme;
  const styles = createStyles(theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <View style={styles.switchContainer}>
      <TouchableOpacity style={styles.switchLabel} onPress={handleToggle}>
        <View
          style={[
            styles.switchKnob,
            currentTheme === 'dark'
              ? styles.darkModeEnabled
              : styles.lightModeEnabled,
          ]}
        >
          {currentTheme === 'dark' ? (
            <MoonIcon color={theme.colors.background} />
          ) : (
            <SunIcon color={theme.colors.background} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ThemeToggleButton;
