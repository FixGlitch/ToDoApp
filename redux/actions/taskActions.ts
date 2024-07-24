import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { Task } from '../types/taskTypes';
import { REACT_APP_BACKEND_URL } from '@env';

export const createTask = createAsyncThunk<Task, Omit<Task, 'taskId'>>(
  'tasks/createTask',
  async (taskData, thunkAPI) => {
    try {
      const response = await axios.post(
        `${REACT_APP_BACKEND_URL}/tasks`,
        taskData,
      );
      return response.data;
    } catch (error: unknown) {
      console.error('Error creating task:', error);
      return thunkAPI.rejectWithValue(handleAxiosError(error));
    }
  },
);

export const getAllTasks = createAsyncThunk<Task[]>(
  'tasks/getAllTasks',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${REACT_APP_BACKEND_URL}/tasks`);
      return response.data;
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(handleAxiosError(error));
    }
  },
);

export const getTaskById = createAsyncThunk<Task, string>(
  'tasks/getTaskById',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.get(
        `${REACT_APP_BACKEND_URL}/tasks/${taskId}`,
      );
      return response.data;
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(handleAxiosError(error));
    }
  },
);

export const updateTask = createAsyncThunk<
  Task,
  { taskId: string; taskData: Partial<Task> }
>('tasks/updateTask', async ({ taskId, taskData }, thunkAPI) => {
  try {
    const response = await axios.put(
      `${REACT_APP_BACKEND_URL}/tasks/${taskId}`,
      taskData,
    );
    return response.data;
  } catch (error: unknown) {
    return thunkAPI.rejectWithValue(handleAxiosError(error));
  }
});

export const deleteTask = createAsyncThunk<string, string>(
  'tasks/deleteTask',
  async (taskId, thunkAPI) => {
    try {
      await axios.delete(`${REACT_APP_BACKEND_URL}/tasks/${taskId}`);
      return taskId;
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(handleAxiosError(error));
    }
  },
);

export const toggleTaskStatus = createAsyncThunk<Task, string>(
  'tasks/toggleTaskStatus',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.patch(
        `${REACT_APP_BACKEND_URL}/tasks/${taskId}/toggle`,
      );
      return response.data;
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(handleAxiosError(error));
    }
  },
);

export const getAllTasksByCategoryAndUser = createAsyncThunk<
  Task[],
  { categoryId: string; userId: string }
>(
  'tasks/getAllTasksByCategoryAndUser',
  async ({ categoryId, userId }, thunkAPI) => {
    try {
      const response = await axios.get(
        `${REACT_APP_BACKEND_URL}/tasks/category/${categoryId}`,
        {
          params: { userId },
        },
      );
      return response.data;
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(handleAxiosError(error));
    }
  },
);

export const getTaskForToday = createAsyncThunk<Task, string>(
  'tasks/getTaskForToday',
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(
        `${REACT_APP_BACKEND_URL}/tasks/fortoday`,
        {
          params: { userId },
        },
      );
      return response.data;
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(handleAxiosError(error));
    }
  },
);

export const getAllCompletedTasks = createAsyncThunk<Task[], string>(
  'tasks/getAllCompletedTasks',
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(
        `${REACT_APP_BACKEND_URL}/tasks/completed`,
        {
          params: { userId },
        },
      );
      return response.data;
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(handleAxiosError(error));
    }
  },
);

const handleAxiosError = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      return `Request failed with status ${axiosError.response.status}`;
    } else if (axiosError.request) {
      return 'Request failed. No response received.';
    } else {
      return 'Error setting up request.';
    }
  } else {
    return 'An unexpected error occurred.';
  }
};
