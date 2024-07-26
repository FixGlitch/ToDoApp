import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { createUser } from '../../../redux/actions/userActions';
import { RootState } from '../../../redux/store';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
import FGButton from '../../components/FGButton/FGButton';
import { COLORS, styles } from './styles';

type RegisterNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Register'
>;

interface RegisterProps {
  navigation: RegisterNavigationProp;
}

const Register = ({ navigation }: RegisterProps) => {
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
        <FGButton text="Register" onPress={handleRegister} />
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

export default Register;
