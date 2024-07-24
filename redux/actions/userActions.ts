import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { User } from '../types/userTypes';
import { REACT_APP_BACKEND_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const createUser = createAsyncThunk<
  User,
  { username: string; password: string }
>('user/createUser', async (userData, thunkAPI) => {
  try {
    const response = await axios.post(
      `${REACT_APP_BACKEND_URL}/user`,
      userData,
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(handleAxiosError(error));
  }
});

export const loginUser = createAsyncThunk<
  User,
  { username: string; password: string }
>('user/loginUser', async (userData, thunkAPI) => {
  try {
    const response = await axios.post(
      `${REACT_APP_BACKEND_URL}/user/login`,
      userData,
    );
    const user = response.data.user;
    await AsyncStorage.setItem('user', JSON.stringify(user));
    return user;
  } catch (error) {
    return thunkAPI.rejectWithValue(handleAxiosError(error));
  }
});

export const logoutUser = createAsyncThunk<void>(
  'user/logoutUser',
  async (_, thunkAPI) => {
    try {
      await axios.post(`${REACT_APP_BACKEND_URL}/user/logout`);
      await AsyncStorage.removeItem('user');
    } catch (error) {
      return thunkAPI.rejectWithValue(handleAxiosError(error));
    }
  },
);

export const getAllUsers = createAsyncThunk<User[]>(
  'user/getAllUsers',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${REACT_APP_BACKEND_URL}/user`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(handleAxiosError(error));
    }
  },
);

export const getUserById = createAsyncThunk<User, string>(
  'user/getUserById',
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(
        `${REACT_APP_BACKEND_URL}/user/${userId}`,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(handleAxiosError(error));
    }
  },
);

export const updateUser = createAsyncThunk<
  User,
  { userId: string; userData: { username?: string; password?: string } }
>('user/updateUser', async ({ userId, userData }, thunkAPI) => {
  try {
    const response = await axios.put(
      `${REACT_APP_BACKEND_URL}/user/${userId}`,
      userData,
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(handleAxiosError(error));
  }
});

export const deleteUser = createAsyncThunk<string, string>(
  'user/deleteUser',
  async (userId, thunkAPI) => {
    try {
      await axios.delete(`${REACT_APP_BACKEND_URL}/user/${userId}`);
      return userId;
    } catch (error) {
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
