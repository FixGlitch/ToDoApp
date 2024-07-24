import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import {
  getCategoryById,
  updateCategory,
} from '../../redux/actions/categoryActions';
import { Category } from '../../redux/types/categoryTypes';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type EditCategoryScreenProps = StackScreenProps<
  RootStackParamList,
  'EditCategoryScreen'
>;

const COLORS = {
  border: '#ccc',
};

const EditCategoryScreen = ({ route, navigation }: EditCategoryScreenProps) => {
  const { category_id } = route.params;
  const dispatch = useDispatch<AppDispatch>();
  const { selectedCategory, loading, error } = useSelector(
    (state: RootState) => state.categories,
  );
  const [name, setName] = useState<string>('');

  useEffect(() => {
    if (category_id) {
      dispatch(getCategoryById(category_id));
    }
  }, [dispatch, category_id]);

  useEffect(() => {
    if (selectedCategory) {
      setName(selectedCategory.name);
    }
  }, [selectedCategory]);

  const handleSubmit = () => {
    if (!name) {
      Alert.alert('Error', 'Please enter a category name');
      return;
    }

    if (selectedCategory) {
      const categoryData: Omit<Category, 'category_id'> = {
        name,
        isEditable: true,
        user_id: selectedCategory.user_id,
      };
      dispatch(updateCategory({ categoryId: category_id, categoryData }));
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Category</Text>
      {loading && <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
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

export default EditCategoryScreen;
