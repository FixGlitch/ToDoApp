import { MD3LightTheme, MD3DarkTheme, MD3Theme } from 'react-native-paper';

const lightTheme: MD3Theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#6200ee',
    background: '#ffffff',
    surface: '#ffffff',
    onPrimary: '#ffffff',
    onBackground: '#000000',
    onSurface: '#000000',
    error: '#b00020',
  },
};

const darkTheme: MD3Theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#6200ee',
    background: '#000000',
    surface: '#121212',
    onPrimary: '#ffffff',
    onBackground: '#ffffff',
    onSurface: '#ffffff',
    error: '#cf6679',
  },
};

export { lightTheme, darkTheme };
