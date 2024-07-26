import React from 'react';
import { View, Text, Button } from 'react-native';
import { Task } from '../../../redux/types/taskTypes';
import { styles } from './styles';

interface TaskRowProps {
  task: Task;
  completeTask: (taskId: string) => void;
  onEdit: () => void;
}

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

export default TaskRow;
