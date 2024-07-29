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
      height: 50,
      paddingHorizontal: 16,
      paddingVertical: 12,
      width: 130,
    },
    buttonText: {
      color: colors.background,
      fontSize: 16,
      fontWeight: 'bold',
    },
    categoryTitle: {
      color: colors.background,
      fontFamily: 'Inter',
      fontSize: 16,
      fontWeight: 'bold',
      marginHorizontal: 20,
      marginVertical: 20,
    },
    container: {
      backgroundColor: colors.background,
      flex: 1,
      padding: 16,
    },
    containerCategory: {
      backgroundColor: colors.onPrimary,
      borderRadius: 32,
      flexDirection: 'column',
      height: 480,
      justifyContent: 'flex-start',
      marginBottom: 16,
      width: '100%',
    },
    containerSideBar: {
      alignItems: 'flex-end',
      borderRadius: 32,
      justifyContent: 'center',
      marginHorizontal: 20,
      marginVertical: 20,
    },
    input: {
      borderBottomColor: colors.onPrimary,
      borderBottomWidth: 3,
      color: colors.onPrimary,
      height: 40,
      marginBottom: 20,
      marginHorizontal: 20,
      paddingHorizontal: 8,
      width: 'auto',
    },
    inputContainer: {
      marginBottom: 16,
    },
    picker: {
      borderRadius: 4,
      borderWidth: 1,
      height: 50,
      marginBottom: 16,
      width: '100%',
    },
    sidebarButton: {
      height: 32,
      width: 32,
    },
    subTitle: {
      color: colors.onPrimary,
      fontFamily: 'Inter',
      fontSize: 16,
      fontWeight: 'bold',
      marginHorizontal: 20,
    },
    title: {
      color: colors.onPrimary,
      fontFamily: 'Inter',
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 30,
      marginHorizontal: 20,
    },
  });
};
