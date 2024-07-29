import { StyleSheet } from 'react-native';

export const COLORS = {
  background: '#f5f5f5',
  text: '#333',
  icon: '#6200ee',
};

export const styles = StyleSheet.create({
  container: {
    borderRadius: 32,
    flex: 1,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  monthLabel: {
    color: COLORS.text,
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  navigationContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
