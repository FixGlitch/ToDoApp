import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { createTask } from '../../redux/actions/taskActions';
import { getAllCategories } from '../../redux/actions/categoryActions';
import { Category } from '../../redux/types/categoryTypes';
import { Picker } from '@react-native-picker/picker';
import { Task } from '../../redux/types/taskTypes';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type CreateTaskScreenProps = StackScreenProps<
  RootStackParamList,
  'CreateTaskScreen'
>;

const COLORS = {
  border: 'lightgray',
};

const CreateTaskScreen = ({ navigation }: CreateTaskScreenProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const userId = useSelector(
    (state: RootState) => state.user.userDetail?.user_id,
  );
  const { categories } = useSelector((state: RootState) => state.categories);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    dispatch(getAllCategories())
      .unwrap()
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [dispatch]);

  const handleSubmit = () => {
    if (!name || !description || !selectedCategoryId || !userId) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const newTask: Omit<Task, 'taskId'> = {
      name,
      description,
      isCompleted: false,
      category_id: selectedCategoryId,
      user_id: userId,
    };

    dispatch(createTask(newTask))
      .unwrap()
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => {
        Alert.alert('Error', error.message || 'An error occurred');
      });
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
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
      <Text style={styles.label}>Category</Text>
      <Picker
        selectedValue={selectedCategoryId}
        onValueChange={(itemValue) => setSelectedCategoryId(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select a category" value="" />
        {categories.map((category: Category) => (
          <Picker.Item
            key={category.category_id}
            label={category.name}
            value={category.category_id}
          />
        ))}
      </Picker>
      <Button title="Create Task" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderColor: COLORS.border,
    borderRadius: 4,
    borderWidth: 1,
    height: 40,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  picker: {
    borderColor: COLORS.border,
    borderRadius: 4,
    borderWidth: 1,
    height: 50,
    marginBottom: 16,
    width: '100%',
  },
});

export default CreateTaskScreen;
