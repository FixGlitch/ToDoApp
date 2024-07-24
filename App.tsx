import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from './redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUser } from './redux/reducers/userReducer';
import Navigation from './src/navigation/Navigation';

const AppContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadUser = async () => {
      try {
        const user = await AsyncStorage.getItem('user');
        if (user) {
          dispatch(setUser(JSON.parse(user)));
        }
      } catch (error) {
        console.error('Error loading user from AsyncStorage:', error);
      }
    };

    loadUser();
  }, [dispatch]);

  return <Navigation />;
};

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;
