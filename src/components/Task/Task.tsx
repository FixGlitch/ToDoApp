import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Task } from '../../../redux/types/taskTypes';

interface TaskRowProps {
  task: Task;
  completeTask: (taskId: string) => void;
  onEdit: () => void;
}

const COLORS = {
  border: '#ccc',
};

const TaskRow = ({ task, completeTask, onEdit }: TaskRowProps) => {
  return (
    <View style={styles.row}>
      <Text>{task.name}</Text>
      <Text>{task.description}</Text>
      <Button
        title={task.isCompleted ? 'Completed' : 'Complete'}
        onPress={() => completeTask(task.task_id || '')}
        disabled={task.isCompleted}
      />
      <Button title="Edit" onPress={onEdit} />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    borderBottomColor: COLORS.border,
    borderBottomWidth: 1,
    padding: 16,
  },
});

export default TaskRow;
