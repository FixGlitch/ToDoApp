import React, { useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../redux/store';
import { getAllTasks } from '../../../redux/actions/taskActions';
import TaskRow from '../../components/Task/Task';
import { Task } from '../../../redux/types/taskTypes';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
import { styles } from './styles';

type TaskListNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface TaskListProps {
  navigation: TaskListNavigationProp;
}

const TaskList = ({ navigation }: TaskListProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { tasks, loading, error } = useSelector(
    (state: RootState) => state.tasks,
  );

  useEffect(() => {
    dispatch(getAllTasks())
      .unwrap()
      .catch((err) => {
        Alert.alert('Error', 'Failed to load tasks');
        console.error('Fetch tasks error:', err);
      });
  }, [dispatch]);

  const renderItem = ({ item }: { item: Task }) => (
    <TaskRow
      task={item}
      completeTask={(taskId) => console.log('Complete task:', taskId)}
      onEdit={() =>
        navigation.navigate('EditTask', { task_id: item.task_id || '' })
      }
    />
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.task_id || ''}
      />
      <Button
        title="Add New Task"
        onPress={() => navigation.navigate('CreateTask')}
      />
    </View>
  );
};

export default TaskList;
