import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { format } from 'date-fns';
import { TaskType } from '../models/task';
import TaskList from '../components/TaskList/TaskList';
import TouchableButton from '../components/button/TouchableButton';

const TASKS_STORAGE_KEY = '@tasks';
const COMPLETED_TASKS_STORAGE_KEY = '@completedTasks';

const COLORS = {
  background: '#f5f5f5',
  dateButtonBackground: '#ddd',
  dateButtonText: '#333',
  inputBackground: '#fff',
  border: '#ddd',
};

const loadTasks = async (key: string): Promise<TaskType[]> => {
  try {
    const tasksString = await AsyncStorage.getItem(key);
    if (tasksString !== null) {
      return JSON.parse(tasksString);
    }
  } catch (error) {
    console.error(`Failed to load tasks from storage (${key}):`, error);
  }
  return [];
};

const saveTasks = async (key: string, tasks: TaskType[]) => {
  try {
    const tasksString = JSON.stringify(tasks);
    await AsyncStorage.setItem(key, tasksString);
  } catch (error) {
    console.error(`Failed to save tasks to storage (${key}):`, error);
  }
};

const HomeScreen = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [completedTasks, setCompletedTasks] = useState<TaskType[]>([]);
  const [task, setTask] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const fetchTasks = async () => {
      const loadedTasks = await loadTasks(TASKS_STORAGE_KEY);
      setTasks(loadedTasks);
      const loadedCompletedTasks = await loadTasks(COMPLETED_TASKS_STORAGE_KEY);
      setCompletedTasks(loadedCompletedTasks);
    };

    fetchTasks();
  }, []);

  const addTask = () => {
    if (task.length > 0) {
      const newTask = {
        title: task,
        completed: false,
        date: format(date, 'yyyy-MM-dd'),
      };
      const newTasks = [...tasks, newTask];
      setTasks(newTasks);
      saveTasks(TASKS_STORAGE_KEY, newTasks);
      setTask('');
    } else {
      Alert.alert('Task cannot be empty');
    }
  };

  const completeTask = (index: number) => {
    const newTasks = [...tasks];
    const completedTask = { ...newTasks[index], completed: true };
    newTasks.splice(index, 1);
    setTasks(newTasks);
    saveTasks(TASKS_STORAGE_KEY, newTasks);

    const newCompletedTasks = [...completedTasks, completedTask];
    setCompletedTasks(newCompletedTasks);
    saveTasks(COMPLETED_TASKS_STORAGE_KEY, newCompletedTasks);
  };

  return (
    <View style={styles.container}>
      <TaskList tasks={tasks} completeTask={completeTask} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task"
          value={task}
          onChangeText={setTask}
        />
      </View>
      <View style={styles.dateTimeContainer}>
        <TouchableOpacity
          style={styles.dateButton}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.dateButtonText}>{date.toDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) {
                setDate(selectedDate);
              }
            }}
          />
        )}
      </View>
      <View>
        <TouchableButton text="Add" onClick={addTask} />
        <TouchableButton
          text="View History"
          onClick={() => navigation.navigate('History')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    padding: 20,
  },
  dateButton: {
    backgroundColor: COLORS.dateButtonBackground,
    borderRadius: 5,
    padding: 10,
  },
  dateButtonText: {
    color: COLORS.dateButtonText,
    fontSize: 18,
  },
  dateTimeContainer: {
    marginBottom: 10,
  },
  input: {
    backgroundColor: COLORS.inputBackground,
    borderColor: COLORS.border,
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 20,
    height: 60,
    paddingHorizontal: 15,
  },
  inputContainer: {
    marginBottom: 10,
  },
});

export default HomeScreen;
