import { StyleSheet } from 'react-native';
import { MD3Theme } from 'react-native-paper';

export const createStyles = (theme: MD3Theme) => {
  const { colors } = theme;

  return StyleSheet.create({
    sidebar: {
      backgroundColor: colors.onPrimary,
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 50,
    },
    sidebarButton: {
      backgroundColor: colors.primary,
      borderColor: colors.background,
      borderRadius: 16,
      borderWidth: 3,
      marginHorizontal: 8,
      marginVertical: 4,
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    sidebarButtonText: {
      color: colors.background,
      fontFamily: 'Inter',
      fontSize: 20,
      fontWeight: 'medium',
    },
  });
};
