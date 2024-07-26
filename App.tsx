import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUser } from './redux/reducers/userReducer';
import Navigation from './src/navigation/Navigation';
import { darkTheme, lightTheme } from './theme/theme';
import { PaperProvider } from 'react-native-paper';
import { RootState } from './redux/store';

const AppContent = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: RootState) => state.theme.theme);

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

  return (
    <PaperProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <Navigation />
    </PaperProvider>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;
