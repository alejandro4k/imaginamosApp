import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './splash/Splash';
import { HomeRouter } from './home/HomeRouter';
const Stack = createNativeStackNavigator();
const AppRouter = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="App"
        options={{headerShown: false}}
        component={HomeRouter}
      />
    </Stack.Navigator>
  );
};

export default AppRouter;
