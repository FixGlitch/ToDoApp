import { StyleSheet } from 'react-native';

export const COLORS = {
  primary: '#6200ee',
  error: 'red',
  border: '#ddd',
};

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  errorText: {
    color: COLORS.error,
    marginTop: 10,
  },
  input: {
    borderColor: COLORS.border,
    borderWidth: 1,
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  signInText: {
    color: COLORS.primary,
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
