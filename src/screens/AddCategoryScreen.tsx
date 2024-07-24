import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { createCategory } from '../../redux/actions/categoryActions';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type AddCategoryScreenProps = StackScreenProps<
  RootStackParamList,
  'AddCategoryScreen'
>;

const COLORS = {
  border: 'gray',
};

const AddCategoryScreen = ({ navigation }: AddCategoryScreenProps) => {
  const [name, setName] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const { userDetail } = useSelector((state: RootState) => state.user);

  const handleSubmit = () => {
    if (userDetail) {
      const categoryData = {
        name,
        isEditable: true,
        user_id: userDetail.user_id,
      };
      dispatch(createCategory(categoryData));
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Category</Text>
      <TextInput
        style={styles.input}
        placeholder="Category Name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderColor: COLORS.border,
    borderWidth: 1,
    height: 40,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default AddCategoryScreen;
