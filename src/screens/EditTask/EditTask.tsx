import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../redux/store';
import { getTaskById, updateTask } from '../../../redux/actions/taskActions';
import { Task } from '../../../redux/types/taskTypes';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
import { styles } from './styles';

type EditTaskProps = StackScreenProps<RootStackParamList, 'EditTask'>;

const EditTask = ({ route, navigation }: EditTaskProps) => {
  const { task_id } = route.params;
  const dispatch = useDispatch<AppDispatch>();
  const {
    task,
    loading: taskLoading,
    error: taskError,
  } = useSelector((state: RootState) => state.tasks);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    dispatch(getTaskById(task_id));
  }, [dispatch, task_id]);

  useEffect(() => {
    if (task) {
      setName(task.name);
      setDescription(task.description);
    }
  }, [task]);

  const handleSubmit = () => {
    if (!name || !description) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const updatedTask: Partial<Task> = {
      name,
      description,
    };

    dispatch(updateTask({ taskId: task_id, taskData: updatedTask }))
      .unwrap()
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => {
        Alert.alert('Error', 'Failed to update task');
        console.error('Update task error:', error);
      });
  };

  if (taskLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (taskError) {
    return <Text>Error: {taskError}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter task name"
      />
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter task description"
      />
      <Button title="Update Task" onPress={handleSubmit} />
    </View>
  );
};

export default EditTask;
