import { StyleSheet } from 'react-native';

export const COLORS = {
  primary: '#6200ee',
  error: 'red',
  border: '#ddd',
};

export const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: '#1D1D1B',
    borderRadius: 16,
    borderWidth: 3,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  buttonText: {
    color: '#1D1D1B',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  errorText: {
    color: COLORS.error,
    marginTop: 10,
  },
  input: {
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 3,
    color: '#FFFFFF',
    height: 40,
    marginHorizontal: 12,
    paddingHorizontal: 8,
    width: 300,
  },
  inputContainer: {
    marginBottom: 16,
  },
  registerText: {
    color: COLORS.primary,
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
