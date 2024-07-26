export type RootStackParamList = {
  SignIn: undefined;
  Register: undefined;
  Home: undefined;
  History: undefined;
  CreateTask: undefined;
  EditTask: { task_id: string };
  TaskDetail: { task_id: string };
  CategoryList: undefined;
  AddCategory: undefined;
  EditCategory: { category_id: string };
};
