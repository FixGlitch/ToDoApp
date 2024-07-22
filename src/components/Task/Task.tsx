import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface TaskProps {
  task: {
    title: string;
    completed: boolean;
    date: string;
  };
  index: number;
  completeTask: (index: number) => void;
}

const COLORS = {
  completeButton: 'green',
  background: '#fff',
  shadow: '#000',
  taskText: '#333',
  taskTextCompleted: 'gray',
};

const Task = ({ task, index, completeTask }: TaskProps) => {
  return (
    <View style={styles.taskContainer}>
      <Text style={task.completed ? styles.taskTextCompleted : styles.taskText}>
        {task.title}
      </Text>
      <TouchableOpacity onPress={() => completeTask(index)}>
        <Text style={styles.completeButton}>Complete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  completeButton: {
    color: COLORS.completeButton,
    fontSize: 18,
  },
  taskContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.background,
    borderRadius: 10,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    padding: 15,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  taskText: {
    color: COLORS.taskText,
    fontSize: 18,
  },
  taskTextCompleted: {
    color: COLORS.taskTextCompleted,
    fontSize: 18,
    textDecorationLine: 'line-through',
  },
});

export default Task;
