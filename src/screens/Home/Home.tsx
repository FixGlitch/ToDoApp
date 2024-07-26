import React, { useCallback } from 'react';
import { View, Text, Button, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../redux/store';
import {
  getAllTasks,
  toggleTaskStatus,
} from '../../../redux/actions/taskActions';
import TaskRow from '../../components/Task/Task';
import { logoutUser } from '../../../redux/actions/userActions';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';
import ThemeToggleButton from '../../components/DarkSwitcher/DarkSwitcher';
import { styles } from './styles';

type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<HomeNavigationProp>();
  const { tasks, loading, error } = useSelector(
    (state: RootState) => state.tasks,
  );
  const { colors } = useTheme();

  const fetchTasks = useCallback(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  useFocusEffect(
    useCallback(() => {
      fetchTasks();
    }, [fetchTasks]),
  );

  const handleToggle = (taskId: string) => {
    dispatch(toggleTaskStatus(taskId));
  };

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      navigation.replace('SignIn');
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color={colors.primary} />;
  }

  if (error) {
    return (
      <Text style={[styles.errorText, { color: colors.error }]}>
        Error: {error}
      </Text>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ThemeToggleButton />
      <Button
        title="Create Task"
        onPress={() => navigation.navigate('CreateTask')}
        color={colors.primary}
      />
      <Button title="Logout" onPress={handleLogout} color={colors.primary} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskRow
            task={item}
            completeTask={() => handleToggle(item.task_id || '')}
            onEdit={() =>
              navigation.navigate('EditTask', {
                task_id: item.task_id || '',
              })
            }
          />
        )}
        keyExtractor={(item) => item.task_id || ''}
      />
    </View>
  );
};

export default Home;
