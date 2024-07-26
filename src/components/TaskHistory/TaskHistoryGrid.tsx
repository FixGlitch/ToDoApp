import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { format } from 'date-fns';
import { getColor, styles } from './styles';

interface CompletedTasksDate {
  date: string;
  count: number;
}

interface HistoryGridProps {
  completedTasks: CompletedTasksDate[];
  handleDayPress: (date: string) => void;
}

const TaskHistoryGrid = ({
  completedTasks,
  handleDayPress,
}: HistoryGridProps) => {
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const getDayStyle = (date: string | null, count: number) => ({
    backgroundColor: date ? getColor(count) : 'transparent',
  });

  return (
    <View>
      <View style={styles.weekDaysContainer}>
        {weekDays.map((day, index) => (
          <Text key={index} style={styles.weekDay}>
            {day}
          </Text>
        ))}
      </View>
      <View style={styles.gridContainer}>
        {completedTasks.map((day, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.day, getDayStyle(day.date, day.count)]}
            onPress={() => day.date && handleDayPress(day.date)}
          >
            <Text style={styles.dayText}>
              {day.date ? format(new Date(day.date), 'd') : ''}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default TaskHistoryGrid;
