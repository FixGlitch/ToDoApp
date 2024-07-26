import React from 'react';
import { View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { toggleTheme } from '../../../redux/reducers/themeReducer';

const ThemeToggleButton = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentTheme = useSelector((state: RootState) => state.theme.theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <View>
      <Button
        title={
          currentTheme === 'dark'
            ? 'Switch to Light Theme'
            : 'Switch to Dark Theme'
        }
        onPress={handleToggle}
      />
    </View>
  );
};

export default ThemeToggleButton;
