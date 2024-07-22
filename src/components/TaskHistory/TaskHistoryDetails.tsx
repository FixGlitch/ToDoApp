import React from 'react';
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

interface ModalBoxProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  selectedDate: string | null;
  tasksForSelectedDate: { title: string; completed: boolean; date: string }[];
}

const COLORS = {
  primary: '#6200ee',
  white: '#ffffff',
  blackOverlay: 'rgba(0,0,0,0.5)',
  green: 'green',
};

const TaskHistoryDetails = ({
  modalVisible,
  setModalVisible,
  selectedDate,
  tasksForSelectedDate,
}: ModalBoxProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Tasks for {selectedDate}</Text>
              {tasksForSelectedDate.length > 0 ? (
                tasksForSelectedDate.map((task, index) => (
                  <Text key={index} style={styles.taskText}>
                    {task.title} <Text style={styles.completeButton}>✔</Text>
                  </Text>
                ))
              ) : (
                <Text style={styles.taskText}>
                  No tasks completed on this day.
                </Text>
              )}
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
});

export default TaskHistoryDetails;
