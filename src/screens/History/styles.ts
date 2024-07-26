import { StyleSheet } from 'react-native';

export const COLORS = {
  background: '#f5f5f5',
  text: '#333',
  icon: '#6200ee',
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    padding: 20,
  },
  monthLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  navigationContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    color: COLORS.text,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
