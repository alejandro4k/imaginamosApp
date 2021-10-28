import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './home/Home';
import Splash from './splash/Splash';
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
        name="Home"
        options={{headerShown: false}}
        component={Home}
      />
    </Stack.Navigator>
  );
};

export default AppRouter;
