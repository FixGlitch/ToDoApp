import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import SignInScreen from './src/screens/SignInScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import { RootStackParamList } from './src/navigation/types';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const HeaderLeft = ({ navigation }: { navigation: any }) => (
  <TouchableOpacity
    onPress={() => navigation.goBack()}
    style={styles.headerLeft}
  >
    <Icon name="arrow-back" size={30} color="#6200ee" />
  </TouchableOpacity>
);

const getScreenOptions = (navigation: any) => ({
  headerLeft: () => <HeaderLeft navigation={navigation} />,
});

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="History"
            component={HistoryScreen}
            options={({ navigation }) => getScreenOptions(navigation)}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 10,
  },
});

export default App;
