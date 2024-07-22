import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Task from '../Task/Task';
import { TaskType } from '../../models/task';

const COLORS = {
  titleText: '#333',
};

interface TaskListProps {
  tasks: TaskType[];
  completeTask: (index: number) => void;
}

const TaskList = ({ tasks, completeTask }: TaskListProps) => {
  const groupedTasks = tasks.reduce(
    (acc: { [key: string]: TaskType[] }, task) => {
      (acc[task.date] = acc[task.date] || []).push(task);
      return acc;
    },
    {},
  );

  return (
    <>
      <Text style={styles.title}>To-Do List</Text>
      <ScrollView style={styles.scrollView}>
        {Object.keys(groupedTasks).map((date) => (
          <View key={date}>
            <Text style={styles.dateHeader}>{date}</Text>
            {groupedTasks[date].map((task, index) => (
              <Task
                key={index}
                task={task}
                index={index}
                completeTask={completeTask}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  dateHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  scrollView: {
    flex: 1,
    marginBottom: 20,
  },
  title: {
    color: COLORS.titleText,
    fontFamily: 'YourNewFont',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default TaskList;
