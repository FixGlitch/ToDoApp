import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types';
import SignIn from '../screens/SignIn/SignIn';
import Home from '../screens/Home/Home';
import CreateTask from '../screens/CreateTask/CreateTask';
import EditTask from '../screens/EditTask/EditTask';
import CategoryList from '../screens/CategoryList/CategoryList';
import AddCategory from '../screens/AddCategory/AddCategory';
import EditCategory from '../screens/EditCategory/EditCategory';

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateTask"
        component={CreateTask}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditTask"
        component={EditTask}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CategoryList"
        component={CategoryList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddCategory"
        component={AddCategory}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditCategory"
        component={EditCategory}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
