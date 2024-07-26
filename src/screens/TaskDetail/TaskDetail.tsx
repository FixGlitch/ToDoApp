import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../redux/store';
import { getTaskById } from '../../../redux/actions/taskActions';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
import { styles } from './styles';

type TaskDetailProps = StackScreenProps<RootStackParamList, 'TaskDetail'>;

const TaskDetail = ({ route }: TaskDetailProps) => {
  const { task_id } = route.params;
  const dispatch = useDispatch<AppDispatch>();
  const { task, loading, error } = useSelector(
    (state: RootState) => state.tasks,
  );

  useEffect(() => {
    if (task_id) {
      dispatch(getTaskById(task_id));
    }
  }, [dispatch, task_id]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      {task ? (
        <>
          <Text style={styles.title}>{task.name}</Text>
          <Text style={styles.description}>{task.description}</Text>
          <Text>Category ID: {task.category_id}</Text>
          <Text>User ID: {task.user_id}</Text>
        </>
      ) : (
        <Text>No task details available</Text>
      )}
    </View>
  );
};

export default TaskDetail;
