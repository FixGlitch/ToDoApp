import React, { useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../redux/store';
import {
  deleteCategory,
  getAllCategories,
} from '../../../redux/actions/categoryActions';
import { Category } from '../../../redux/types/categoryTypes';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
import { styles } from './styles';

type CategoryListProps = StackScreenProps<RootStackParamList, 'CategoryList'>;

const CategoryList = ({ navigation }: CategoryListProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { categories, loading, error } = useSelector(
    (state: RootState) => state.categories,
  );

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const handleDelete = (categoryId: string) => {
    dispatch(deleteCategory(categoryId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      {loading && <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
      <FlatList
        data={categories}
        keyExtractor={(item: Category) => item.category_id}
        renderItem={({ item }: { item: Category }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Button
              title="Edit"
              onPress={() =>
                navigation.navigate('EditCategory', {
                  category_id: item.category_id,
                })
              }
            />
            <Button
              title="Delete"
              onPress={() => handleDelete(item.category_id)}
            />
          </View>
        )}
      />
      <Button
        title="Add Category"
        onPress={() => navigation.navigate('AddCategory')}
      />
    </View>
  );
};

export default CategoryList;
