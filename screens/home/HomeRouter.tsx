import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetailMovie from '../detailMovie/DetailMovie';
import Home from './Home';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { IMovie } from '../../redux/types/types';

const HomeStack = createSharedElementStackNavigator();

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
        sharedElements={(route,otherRoute)=>{
          const {movie} = route.params as any;
          const {id} = movie as IMovie
          return [
            {
              id: `${id}.poster`,
              animation: 'move'
            },
            {
              id: `${id}.title`,
              animation: 'fade-in'
            },
            {
              id: `${id}.rating`,
              animation: 'move'
            }
            
          ];
        }}
      />
    </HomeStack.Navigator>
  );
};
