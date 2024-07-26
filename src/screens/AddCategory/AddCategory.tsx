import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';
import { RootStackParamList } from '../../navigation/types';
import { AppDispatch, RootState } from '../../../redux/store';
import { createCategory } from '../../../redux/actions/categoryActions';
import { styles } from './styles';

type AddCategoryProps = StackScreenProps<RootStackParamList, 'AddCategory'>;

const AddCategory = ({ navigation }: AddCategoryProps) => {
  const [name, setName] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const { userDetail } = useSelector((state: RootState) => state.user);
  const { colors } = useTheme();

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
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.onBackground }]}>
        Add Category
      </Text>
      <TextInput
        style={[styles.input, { borderColor: colors.onSurface }]}
        placeholder="Category Name"
        placeholderTextColor={colors.onSurface}
        value={name}
        onChangeText={setName}
      />
      <Button title="Submit" onPress={handleSubmit} color={colors.primary} />
    </View>
  );
};

export default AddCategory;
