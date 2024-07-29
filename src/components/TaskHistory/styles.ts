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
  title: '#1d1b1d',
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
    borderRadius: 5,
    height: 30,
    justifyContent: 'center',
    margin: 3,
    width: 40,
  },
  dayText: {
    color: COLORS.blackOverlay,
    fontSize: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  modalContainer: {
    alignItems: 'center',
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
    color: COLORS.blackOverlay,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 40,
  },
  weekDaysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
