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
import {loginUser} from '../redux/actions/userActions';
import {selectError, selectLoading} from '../redux/reducers/userReducer';
import TouchableButton from '../components/button/TouchableButton';

const SignInScreen: React.FC<{navigation: any}> = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);

  const handleSignIn = async () => {
    await dispatch(loginUser({username, password}));
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
        <ActivityIndicator size="large" color="#6200ee" />
      ) : (
        <TouchableButton text="Sign In" onClick={handleSignIn} />
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
  registerText: {
    color: '#6200ee',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});

export default SignInScreen;
