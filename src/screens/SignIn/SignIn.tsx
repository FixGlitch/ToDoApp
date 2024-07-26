import React, { useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { loginUser } from '../../../redux/actions/userActions';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
import FGTextInput from '../../components/FGTextInput/FGTextInput';
import FGButton from '../../components/FGButton/FGButton';
import { COLORS, styles } from './styles';

type SignInNavigationProp = StackNavigationProp<RootStackParamList, 'SignIn'>;

interface SignInProps {
  navigation: SignInNavigationProp;
}

const SignIn = ({ navigation }: SignInProps) => {
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
      <FGTextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        containerStyle={styles.inputContainer}
        inputStyle={styles.input}
      />
      <FGTextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        containerStyle={styles.inputContainer}
        inputStyle={styles.input}
      />
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : (
        <FGButton
          text="Sign In"
          onPress={handleSignIn}
          buttonStyle={styles.buttonStyle}
          textStyle={styles.buttonText}
        />
      )}
      {error && <Text style={styles.errorText}>{error}</Text>}
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>Not registered? Sign up here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
