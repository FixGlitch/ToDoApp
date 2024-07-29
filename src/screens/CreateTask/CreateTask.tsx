import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../redux/store';
import { createTask } from '../../../redux/actions/taskActions';
import { getAllCategories } from '../../../redux/actions/categoryActions';
import { Category } from '../../../redux/types/categoryTypes';
import { Picker } from '@react-native-picker/picker';
import { Task } from '../../../redux/types/taskTypes';
import { useAppSelector } from '../../../redux/hooks';
import { darkTheme, lightTheme } from '../../../theme/theme';
import { createStyles } from './styles';
import FGTextInput from '../../components/FGTextInput/FGTextInput';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Burger from '../../components/Icons/Burger';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootStackParamList } from '../../navigation/types';
import FGButton from '../../components/FGButton/FGButton';

type DrawerNavProp = DrawerNavigationProp<RootStackParamList, 'CreateTask'>;

const CreateTaskScreen = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
  const styles = createStyles(currentTheme);

  const dispatch = useDispatch<AppDispatch>();
  const userId = useSelector(
    (state: RootState) => state.user.userDetail?.user_id,
  );
  const { categories } = useSelector((state: RootState) => state.categories);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const navigation = useNavigation<DrawerNavProp>();

  useEffect(() => {
    dispatch(getAllCategories())
      .unwrap()
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [dispatch]);

  const handleSubmit = () => {
    if (!name || !description || !selectedCategoryId || !userId) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const newTask: Omit<Task, 'taskId'> = {
      name,
      description,
      isCompleted: false,
      category_id: selectedCategoryId,
      user_id: userId,
    };

    dispatch(createTask(newTask))
      .unwrap()
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => {
        Alert.alert('Error', error.message || 'An error occurred');
      });
  };

  if (loading) {
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: currentTheme.colors.background },
        ]}
      >
        <Text style={{ color: currentTheme.colors.onBackground }}>
          Loading...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerSideBar}>
        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => navigation.openDrawer()}
        >
          <Burger color={currentTheme.colors.onPrimary} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Create New Task</Text>
      <Text style={styles.subTitle}>Task name</Text>
      <FGTextInput
        placeholder="Enter task name"
        value={name}
        onChangeText={setName}
        containerStyle={styles.inputContainer}
        inputStyle={styles.input}
        placeholderTextColor={currentTheme.colors.onPrimary}
      />
      <Text style={styles.subTitle}>Description</Text>
      <FGTextInput
        placeholder="Enter task description"
        value={description}
        onChangeText={setDescription}
        containerStyle={styles.inputContainer}
        inputStyle={styles.input}
        placeholderTextColor={currentTheme.colors.onPrimary}
      />
      <View style={styles.containerCategory}>
        <Text style={styles.categoryTitle}>Category</Text>
        <Picker
          selectedValue={selectedCategoryId}
          onValueChange={(itemValue) => setSelectedCategoryId(itemValue)}
          style={[
            styles.picker,
            { borderColor: currentTheme.colors.onPrimary },
          ]}
        >
          <Picker.Item label="Select a category" value="" />
          {categories.map((category: Category) => (
            <Picker.Item
              key={category.category_id}
              label={category.name}
              value={category.category_id}
            />
          ))}
        </Picker>
        <FGButton
          text="Create Task"
          onPress={handleSubmit}
          buttonStyle={styles.buttonStyle}
          textStyle={styles.buttonText}
        />
      </View>
    </View>
  );
};

export default CreateTaskScreen;
