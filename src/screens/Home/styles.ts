import { StyleSheet } from 'react-native';
import { MD3Theme } from 'react-native-paper';

export const createStyles = (theme: MD3Theme) => {
  const { colors } = theme;

  return StyleSheet.create({
    buttonStyle: {
      backgroundColor: colors.primary,
      borderColor: colors.background,
      borderRadius: 16,
      borderWidth: 3,
      marginHorizontal: 8,
      marginVertical: 4,
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    buttonText: {
      color: colors.background,
      fontSize: 16,
      fontWeight: 'bold',
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      left: 16,
      position: 'absolute',
      right: 16,
      top: 16,
    },
    container: {
      backgroundColor: colors.background,
      flex: 1,
      padding: 16,
    },
    containerDate: {
      alignItems: 'center',
      backgroundColor: colors.onPrimary,
      borderRadius: 32,
      height: 260,
      justifyContent: 'center',
      marginTop: 16,
      width: '100%',
    },
    containerSideBar: {
      alignItems: 'center',
      borderRadius: 32,
      justifyContent: 'flex-start',
      marginHorizontal: 20,
      marginVertical: 20,
    },
    containerTask: {
      alignItems: 'center',
      backgroundColor: colors.onPrimary,
      borderRadius: 32,
      flexDirection: 'row',
      height: 80,
      justifyContent: 'center',
      marginTop: 16,
      paddingHorizontal: 30,
      width: '100%',
    },
    containerUser: {
      backgroundColor: colors.onPrimary,
      borderRadius: 32,
      flexDirection: 'row',
      height: 200,
      justifyContent: 'space-between',
      marginBottom: 16,
      width: '100%',
    },
    containerUserDetail: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginHorizontal: 20,
    },
    darkModeEnabled: {
      backgroundColor: colors.primary,
    },
    errorText: {
      color: colors.error,
      fontSize: 16,
      margin: 16,
    },
    info: {
      color: colors.background,
      fontFamily: 'Inter',
      fontSize: 20,
      fontWeight: 'medium',
    },
    lightModeEnabled: {
      backgroundColor: colors.secondary,
    },
    sidebarButton: {
      height: 32,
      width: 32,
    },
    subInfo: {
      color: colors.background,
      fontFamily: 'Inter',
      fontSize: 16,
      fontWeight: 'regular',
    },
    switchContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      margin: 10,
    },
    switchKnob: {
      borderRadius: 20,
      padding: 10,
    },
    switchLabel: {
      backgroundColor: colors.surface,
      borderRadius: 20,
      padding: 10,
    },
    title: {
      color: colors.onPrimary,
      fontFamily: 'Inter',
      fontSize: 20,
      fontWeight: 'bold',
    },
    userData: {
      color: colors.background,
      fontFamily: 'Inter',
      fontSize: 20,
      fontWeight: 'bold',
      marginHorizontal: 20,
    },
    userProfile: {
      alignItems: 'center',
      backgroundColor: colors.background,
      borderRadius: 100,
      height: 120,
      justifyContent: 'center',
      marginBottom: 16,
      width: 120,
    },
  });
};
