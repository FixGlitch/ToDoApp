import { MD3LightTheme, MD3DarkTheme, MD3Theme } from 'react-native-paper';

const lightTheme: MD3Theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: 'transparent', // Color principal utilizado en componentes destacados (ej., botones, barras de navegación)
    background: '#f7f7f6', // Color de fondo principal de la aplicación
    surface: '#f7f7f6', // Color de fondo de las superficies (ej., tarjetas, diálogos)
    onPrimary: '#1d1d1b', // Color del texto y los iconos en los componentes principales (que tienen color 'primary')
    onBackground: '#1d1d1b', // Color del texto y los iconos en el fondo principal
    onSurface: '#1d1d1b', // Color del texto y los iconos en superficies (que tienen color 'surface')
    error: '#fe0000', // Color utilizado para indicar errores
  },
};

const darkTheme: MD3Theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: 'transparent',
    background: '#1d1d1b',
    surface: '#1d1d1b',
    onPrimary: '#f7f7f6',
    onBackground: '#f7f7f6',
    onSurface: 'f7f7f6',
    error: '#cf6679',
  },
};

export { lightTheme, darkTheme };
