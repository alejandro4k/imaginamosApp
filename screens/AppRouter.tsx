import React from 'react';
import Splash from './splash/Splash';
import { HomeRouter } from './home/HomeRouter';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()
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
