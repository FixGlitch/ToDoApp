import axios, { AxiosError } from 'axios';
import { Dispatch } from 'redux';
import { setUser, setLoading, setError } from '../reducers/userReducer';
import { REACT_APP_BACKEND_URL } from '@env';

export const createUser =
  (userData: { username: string; password: string }) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.post(
        `${REACT_APP_BACKEND_URL}/user`,
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
  (userData: { username: string; password: string }) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.post(
        `${REACT_APP_BACKEND_URL}/user/login`,
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
    await axios.post(`${REACT_APP_BACKEND_URL}/user/logout`);
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
