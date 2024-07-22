import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { format } from 'date-fns';

interface CompletedTasksDate {
  date: string;
  count: number;
}

interface HistoryGridProps {
  completedTasks: CompletedTasksDate[];
  handleDayPress: (date: string) => void;
}

const COLORS = {
  highCount: '#216e39',
  mediumHighCount: '#30a14e',
  mediumCount: '#40c463',
  lowCount: '#9be9a8',
  noCount: '#ebedf0',
};

const getColor = (count: number) => {
  if (count > 4) {
    return COLORS.highCount;
  }
  if (count > 3) {
    return COLORS.mediumHighCount;
  }
  if (count > 2) {
    return COLORS.mediumCount;
  }
  if (count > 1) {
    return COLORS.lowCount;
  }
  return COLORS.noCount;
};

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

const styles = StyleSheet.create({
  day: {
    alignItems: 'center',
    height: 30,
    justifyContent: 'center',
    margin: 7,
    width: 30,
  },
  dayText: {
    fontSize: 12,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  weekDay: {
    fontWeight: 'bold',
    textAlign: 'center',
    width: 30,
  },
  weekDaysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
});

export default TaskHistoryGrid;
