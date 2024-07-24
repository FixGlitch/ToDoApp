import React, { useCallback } from 'react';
import { View, Text, Button, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { getAllTasks, toggleTaskStatus } from '../../redux/actions/taskActions';
import TaskRow from '../components/Task/Task';
import { logoutUser } from '../../redux/actions/userActions';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { tasks, loading, error } = useSelector(
    (state: RootState) => state.tasks,
  );

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
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View>
      <Button
        title="Create Task"
        onPress={() => navigation.navigate('CreateTaskScreen')}
      />
      <Button title="Logout" onPress={handleLogout} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskRow
            task={item}
            completeTask={() => handleToggle(item.task_id || '')}
            onEdit={() =>
              navigation.navigate('EditTaskScreen', {
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

export default HomeScreen;
