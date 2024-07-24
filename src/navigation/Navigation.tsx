import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types';
import SignInScreen from '../screens/SignInScreen';
import HomeScreen from '../screens/HomeScreen';
import CreateTaskScreen from '../screens/CreateTaskScreen';
import EditTaskScreen from '../screens/EditTaskScreen';
import CategoryListScreen from '../screens/CategoryListScreen';
import AddCategoryScreen from '../screens/AddCategoryScreen';
import EditCategoryScreen from '../screens/EditCategoryScreen';

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CreateTaskScreen" component={CreateTaskScreen} />
      <Stack.Screen name="EditTaskScreen" component={EditTaskScreen} />
      <Stack.Screen name="CategoryListScreen" component={CategoryListScreen} />
      <Stack.Screen name="AddCategoryScreen" component={AddCategoryScreen} />
      <Stack.Screen name="EditCategoryScreen" component={EditCategoryScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
