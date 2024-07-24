export type RootStackParamList = {
  SignIn: undefined;
  Register: undefined;
  Home: undefined;
  History: undefined;
  CreateTaskScreen: undefined;
  EditTaskScreen: { task_id: string };
  TaskDetailsScreen: { task_id: string };
  CategoryListScreen: undefined;
  AddCategoryScreen: undefined;
  EditCategoryScreen: { category_id: string };
};
