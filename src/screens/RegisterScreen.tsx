import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {registerUser} from '../redux/actions/userActions';
import {selectError, selectLoading} from '../redux/reducers/userReducer';
import TouchableButton from '../components/button/TouchableButton';

const RegisterScreen: React.FC<{navigation: any}> = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);

  const handleRegister = async () => {
    await dispatch(registerUser({username, password}));
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
        <ActivityIndicator size="large" color="#6200ee" />
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  signInText: {
    color: '#6200ee',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});

export default RegisterScreen;
