import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/SignIn/SignIn';
import Home from '../screens/Home/Home';
import CreateTask from '../screens/CreateTask/CreateTask';
import EditTask from '../screens/EditTask/EditTask';
import CategoryList from '../screens/CategoryList/CategoryList';
import AddCategory from '../screens/AddCategory/AddCategory';
import EditCategory from '../screens/EditCategory/EditCategory';
import TaskList from '../screens/TaskList/TaskList';
import Sidebar from '../screens/SideBar/SideBar';
import { RootStackParamList } from './types';
import Register from '../screens/Register/Register';

const Drawer = createDrawerNavigator<RootStackParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerContent={(props) => <Sidebar {...props} />}
    screenOptions={({ route }) => ({
      headerShown: false,
      drawerPosition: 'right',
      drawerStyle: {
        display:
          route.name === 'SignIn' || route.name === 'Register'
            ? 'none'
            : 'flex',
      },
    })}
  >
    <Drawer.Screen name="HomeBack" component={Home} />
    <Drawer.Screen name="CreateTask" component={CreateTask} />
    <Drawer.Screen name="EditTask" component={EditTask} />
    <Drawer.Screen name="CategoryList" component={CategoryList} />
    <Drawer.Screen name="AddCategory" component={AddCategory} />
    <Drawer.Screen name="EditCategory" component={EditCategory} />
    <Drawer.Screen name="TaskList" component={TaskList} />
  </Drawer.Navigator>
);

const RootNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="Home" component={DrawerNavigator} />
  </Stack.Navigator>
);

const Navigation = () => (
  <NavigationContainer>
    <RootNavigator />
  </NavigationContainer>
);

export default Navigation;
