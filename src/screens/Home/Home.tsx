import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { logoutUser } from '../../../redux/actions/userActions';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootStackParamList } from '../../navigation/types';
import { createStyles } from './styles';
import { darkTheme, lightTheme } from '../../../theme/theme';
import { useAppSelector } from '../../../redux/hooks';
import FGButtonInProgress from '../../components/FGButtonInProgress/FGButtonInProgress';
import FGButtonDone from '../../components/FGButtonDone/FGButtonDone';
import FGButtonToDo from '../../components/FGButtonToDo/FGButtonToDo';
import History from '../History/History';
import Burger from '../../components/Icons/Burger';

type DrawerNavProp = DrawerNavigationProp<RootStackParamList, 'Home'>;

const Home = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const userDetail = useSelector((state: RootState) => state.user.userDetail);
  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
  const styles = createStyles(currentTheme);
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<DrawerNavProp>();

  const handleTaskList = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      navigation.navigate('TaskList');
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerUser}>
        <View style={styles.containerUserDetail}>
          <View style={styles.userProfile} />
          <Text style={styles.userData}>{userDetail?.username}</Text>
        </View>
        <View style={styles.containerSideBar}>
          <TouchableOpacity
            style={styles.sidebarButton}
            onPress={() => navigation.openDrawer()}
          >
            <Burger color={currentTheme.colors.background} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.title}>My Task</Text>
      <FGButtonToDo
        title="To Do"
        subTitle="13 task now - 1 started"
        onPress={handleTaskList}
        buttonStyle={styles.containerTask}
        titleStyle={styles.info}
        subTitleStyle={styles.subInfo}
      />
      <FGButtonInProgress
        title="In Progress"
        subTitle="5 task now - 5 started"
        onPress={handleTaskList}
        buttonStyle={styles.containerTask}
        titleStyle={styles.info}
        subTitleStyle={styles.subInfo}
      />
      <FGButtonDone
        title="Done"
        subTitle="21 task now - 21 started"
        onPress={handleTaskList}
        buttonStyle={styles.containerTask}
        titleStyle={styles.info}
        subTitleStyle={styles.subInfo}
      />
      <View style={styles.containerDate}>
        <History />
      </View>
    </View>
  );
};

export default Home;
