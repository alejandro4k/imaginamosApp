import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {DefaultTheme} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {Colors} from '../config/Theme';
import {RootState} from '../redux/store';

import Home from './home/Home';
const Stack = createNativeStackNavigator();
const AppRouter = () => {
  
  return (
   
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          options={{headerShown: false}}
          component={Home}
        />
      </Stack.Navigator>

  );
};

export default AppRouter;
