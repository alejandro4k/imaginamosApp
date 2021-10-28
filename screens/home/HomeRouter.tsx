import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailMovie from '../detailMovie/DetailMovie';
import Home from './Home';

const HomeStack = createNativeStackNavigator();
export const HomeRouter = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="DetailMovie"
        component={DetailMovie}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};
