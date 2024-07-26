import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './reducers/taskReducer';
import userReducer from './reducers/userReducer';
import categoryReducer from './reducers/categoryReducer';
import themeReducer from './reducers/themeReducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    tasks: taskReducer,
    categories: categoryReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
