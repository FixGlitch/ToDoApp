import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../redux/actions/userActions';
import ThemeToggleButton from '../../components/DarkSwitcher/DarkSwitcher';
import { AppDispatch } from '../../../redux/store';
import { darkTheme, lightTheme } from '../../../theme/theme';
import { useAppSelector } from '../../../redux/hooks';
import { createStyles } from './styles';

const Sidebar = (props: DrawerContentComponentProps) => {
  const theme = useAppSelector((state) => state.theme.theme);
  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
  const styles = createStyles(currentTheme);
  const { navigation } = props;
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      navigation.navigate('SignIn');
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  return (
    <DrawerContentScrollView style={styles.sidebar} {...props}>
      <View>
        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => navigation.navigate('CreateTask')}
        >
          <Text style={styles.sidebarButtonText}>Create Task</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarButton} onPress={handleLogout}>
          <Text style={styles.sidebarButtonText}>Logout</Text>
        </TouchableOpacity>
        <ThemeToggleButton />
      </View>
    </DrawerContentScrollView>
  );
};

export default Sidebar;
