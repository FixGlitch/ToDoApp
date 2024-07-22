import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { createUser } from '../redux/actions/userActions';
import { selectError, selectLoading } from '../redux/reducers/userReducer';
import TouchableButton from '../components/button/TouchableButton';

const COLORS = {
  primary: '#6200ee',
  error: 'red',
  border: '#ddd',
};

const RegisterScreen = ({ navigation }: { navigation: any }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);

  const handleRegister = async () => {
    await dispatch(createUser({ username, password }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : (
        <TouchableButton text="Register" onClick={handleRegister} />
      )}
      {error && <Text style={styles.errorText}>{error}</Text>}
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.signInText}>
          Already have an account? Sign In here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default RegisterScreen;
