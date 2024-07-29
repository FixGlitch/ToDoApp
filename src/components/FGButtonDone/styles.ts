import { StyleSheet } from 'react-native';
import { MD3Theme } from 'react-native-paper';

export const createStyles = (theme: MD3Theme) => {
  const { colors } = theme;

  return StyleSheet.create({
    infoContainer: {
      alignItems: 'flex-start',
      flex: 1,
      flexDirection: 'column',
      marginHorizontal: 40,
    },
  });
};
