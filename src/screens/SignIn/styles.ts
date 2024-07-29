import { StyleSheet } from 'react-native';
import { MD3Theme } from 'react-native-paper';

export const createStyles = (theme: MD3Theme) => {
  const { colors } = theme;

  return StyleSheet.create({
    buttonStyle: {
      alignItems: 'center',
      backgroundColor: colors.primary,
      borderColor: colors.onPrimary,
      borderRadius: 16,
      borderWidth: 3,
      justifyContent: 'center',
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    buttonText: {
      color: colors.onPrimary,
      fontSize: 16,
      fontWeight: 'bold',
    },
    container: {
      alignItems: 'center',
      backgroundColor: colors.background,
      flex: 1,
      justifyContent: 'center',
    },
    errorText: {
      color: colors.error,
      marginTop: 10,
    },
    input: {
      borderBottomColor: colors.onPrimary,
      borderBottomWidth: 3,
      color: colors.onPrimary,
      height: 40,
      marginHorizontal: 12,
      paddingHorizontal: 8,
      width: 300,
    },
    inputContainer: {
      marginBottom: 16,
    },
    registerText: {
      color: colors.primary,
      marginTop: 20,
      textDecorationLine: 'underline',
    },
    title: {
      color: colors.onBackground,
      fontSize: 24,
      marginBottom: 20,
    },
  });
};
