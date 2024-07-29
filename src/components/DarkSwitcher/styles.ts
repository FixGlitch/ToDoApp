import { StyleSheet } from 'react-native';
import { MD3Theme } from 'react-native-paper';

export const createStyles = (theme: MD3Theme) => {
  const { colors } = theme;

  return StyleSheet.create({
    buttonStyle: {
      alignItems: 'center',
      backgroundColor: colors.primary,
      borderRadius: 8,
      paddingVertical: 15,
    },
    buttonText: {
      color: colors.onPrimary,
      fontSize: 16,
    },
    container: {
      backgroundColor: colors.background,
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    darkModeEnabled: {
      transform: [{ translateX: 30 }, { translateY: -12 }],
    },
    emojiDark: {
      color: colors.background,
    },
    emojiLight: {
      color: colors.background,
    },
    errorText: {
      color: colors.error,
      marginTop: 10,
      textAlign: 'center',
    },
    input: {
      backgroundColor: colors.surface,
      borderColor: colors.onSurface,
      borderRadius: 8,
      borderWidth: 1,
      color: colors.onSurface,
      paddingHorizontal: 10,
      paddingVertical: 15,
    },
    inputContainer: {
      marginBottom: 15,
    },
    lightModeEnabled: {
      transform: [{ translateX: 0 }, { translateY: -12 }],
    },
    registerText: {
      color: colors.primary,
      marginTop: 20,
      textAlign: 'center',
    },
    switchContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },
    switchKnob: {
      alignItems: 'center',
      backgroundColor: colors.onPrimary,
      borderRadius: 12,
      elevation: 3,
      height: 24,
      justifyContent: 'center',
      left: 3,
      position: 'absolute',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      top: '50%',
      transform: [{ translateY: -12 }],
      width: 24,
    },
    switchLabel: {
      alignItems: 'center',
      backgroundColor: colors.background,
      borderRadius: 15,
      height: 30,
      justifyContent: 'center',
      position: 'relative',
      width: 60,
    },
    title: {
      color: colors.onBackground,
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
  });
};
