import {Dispatch} from 'redux';
import axios, {AxiosError} from 'axios';
import {setUser, setLoading, setError} from '../reducers/userReducer';

export const registerUser =
  (userData: {username: string; password: string}) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.post(
        'http://localhost:3001/todo-api-docs/user/register',
        userData,
      );
      dispatch(setUser(response.data));
    } catch (error: any) {
      handleAxiosError(error, dispatch);
    } finally {
      dispatch(setLoading(false));
    }
  };

export const loginUser =
  (userData: {username: string; password: string}) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.post(
        'http://localhost:3001/todo-api-docs/user/login',
        userData,
      );
      dispatch(setUser(response.data));
    } catch (error: any) {
      handleAxiosError(error, dispatch);
    } finally {
      dispatch(setLoading(false));
    }
  };

export const logoutUser = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));
    await axios.post('http://localhost:3001/todo-api-docs/user/logout');
    dispatch(setUser(null));
  } catch (error: any) {
    handleAxiosError(error, dispatch);
  } finally {
    dispatch(setLoading(false));
  }
};

const handleAxiosError = (error: any, dispatch: Dispatch) => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      dispatch(
        setError(`Request failed with status ${axiosError.response.status}`),
      );
    } else if (axiosError.request) {
      dispatch(setError('Request failed. No response received.'));
    } else {
      dispatch(setError('Error setting up request.'));
    }
  } else {
    dispatch(setError(String(error)));
  }
};
