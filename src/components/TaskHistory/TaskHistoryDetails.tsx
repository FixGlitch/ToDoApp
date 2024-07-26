import React from 'react';
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { styles } from './styles';

interface ModalBoxProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  selectedDate: string | null;
  tasksForSelectedDate: { title: string; completed: boolean; date: string }[];
}

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

export default TaskHistoryDetails;
