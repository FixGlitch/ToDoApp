import { StyleSheet } from 'react-native';

const COLORS = {
  primary: '#6200ee',
  white: '#ffffff',
  blackOverlay: 'rgba(0,0,0,0.5)',
  green: 'green',
  highCount: '#216e39',
  mediumHighCount: '#30a14e',
  mediumCount: '#40c463',
  lowCount: '#9be9a8',
  noCount: '#ebedf0',
};

export const getColor = (count: number) => {
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

export const styles = StyleSheet.create({
  closeButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    marginTop: 20,
    padding: 10,
  },
  closeButtonText: {
    color: COLORS.white,
    fontSize: 16,
  },
  completeButton: {
    color: COLORS.green,
    fontSize: 18,
  },
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
  modalContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.blackOverlay,
    flex: 1,
    justifyContent: 'center',
  },
  modalContent: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 20,
    width: 300,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  taskText: {
    fontSize: 16,
    marginBottom: 10,
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
