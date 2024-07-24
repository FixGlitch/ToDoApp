import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { Category } from '../types/categoryTypes';
import { REACT_APP_BACKEND_URL } from '@env';

export const createCategory = createAsyncThunk<
  Category,
  Omit<Category, 'category_id'>
>('category/createCategory', async (categoryData, thunkAPI) => {
  try {
    const response = await axios.post(
      `${REACT_APP_BACKEND_URL}/categories`,
      categoryData,
    );
    return response.data;
  } catch (error: unknown) {
    return thunkAPI.rejectWithValue(handleAxiosError(error));
  }
});

export const getAllCategories = createAsyncThunk<Category[]>(
  'category/getAllCategories',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${REACT_APP_BACKEND_URL}/categories`);
      return response.data;
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(handleAxiosError(error));
    }
  },
);

export const getCategoryById = createAsyncThunk<Category, string>(
  'category/getCategoryById',
  async (categoryId, thunkAPI) => {
    try {
      const response = await axios.get(
        `${REACT_APP_BACKEND_URL}/categories/${categoryId}`,
      );
      return response.data;
    } catch (error: unknown) {
      return thunkAPI.rejectWithValue(handleAxiosError(error));
    }
  },
);

export const updateCategory = createAsyncThunk<
  Category,
  { categoryId: string; categoryData: Omit<Category, 'category_id'> }
>('category/updateCategory', async ({ categoryId, categoryData }, thunkAPI) => {
  try {
    const response = await axios.put(
      `${REACT_APP_BACKEND_URL}/categories/${categoryId}`,
      categoryData,
    );
    return response.data;
  } catch (error: unknown) {
    return thunkAPI.rejectWithValue(handleAxiosError(error));
  }
});

export const deleteCategory = createAsyncThunk<void, string>(
  'category/deleteCategory',
  async (categoryId, thunkAPI) => {
    try {
      await axios.delete(`${REACT_APP_BACKEND_URL}/categories/${categoryId}`);
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
