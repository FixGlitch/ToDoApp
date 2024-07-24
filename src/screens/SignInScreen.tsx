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
import { loginUser } from '../../redux/actions/userActions';
import TouchableButton from '../components/button/TouchableButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type SignInScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignIn'
>;

interface SignInScreenProps {
  navigation: SignInScreenNavigationProp;
}

const COLORS = {
  primary: '#6200ee',
  error: 'red',
  border: '#ddd',
};

const SignInScreen = ({ navigation }: SignInScreenProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.user);

  const handleSignIn = async () => {
    if (!username || !password) {
      Alert.alert('Please enter username and password');
      return;
    }

    try {
      const resultAction = await dispatch(
        loginUser({ username, password }),
      ).unwrap();
      if (resultAction) {
        navigation.replace('Home');
      }
    } catch (err) {
      console.error('Login error:', err);
      Alert.alert(
        'Login failed',
        'Please check your credentials and try again.',
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
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
        <TouchableButton text="Sign In" onPress={handleSignIn} />
      )}
      {error && <Text style={styles.errorText}>{error}</Text>}
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>Not registered? Sign up here</Text>
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

export default SignInScreen;
