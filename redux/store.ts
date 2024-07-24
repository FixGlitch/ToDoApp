import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './reducers/taskReducer';
import userReducer from './reducers/userReducer';
import categoryReducer from './reducers/categoryReducer';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    user: userReducer,
    categories: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
