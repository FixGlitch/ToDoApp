import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { createUser } from '../../redux/actions/userActions';
import { RootState } from '../../redux/store';
import TouchableButton from '../components/button/TouchableButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Register'
>;

interface RegisterScreenProps {
  navigation: RegisterScreenNavigationProp;
}

const COLORS = {
  primary: '#6200ee',
  error: 'red',
  border: '#ddd',
};

const RegisterScreen = ({ navigation }: RegisterScreenProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state: RootState) => state.user);

  const handleRegister = async () => {
    if (!username || !password) {
      Alert.alert('Please enter username and password');
      return;
    }

    try {
      await dispatch(createUser({ username, password })).unwrap();
      navigation.replace('Home');
    } catch (err) {
      Alert.alert(
        'Registration failed',
        'Please check your credentials and try again.',
      );
      console.error('Registration error:', err);
    }
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
        <TouchableButton text="Register" onPress={handleRegister} />
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
