import React from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  configureFonts,
  DarkTheme as PaperDarkTheme,
  DefaultTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {Provider, useSelector} from 'react-redux';
import {RootState, store} from './redux/store';

import AppRouter from './screens/AppRouter';
import {Colors} from './config/Theme';
import { createStackNavigator } from '@react-navigation/stack';


const MainStack = createStackNavigator()

const MainApp = () => {
  const {darkmode} = useSelector((state: RootState) => state.ui);
  const CombinedDefaultTheme = {
    ...PaperDefaultTheme,
    ...NavigationDefaultTheme,
    colors: {
      ...PaperDefaultTheme.colors,
      ...NavigationDefaultTheme.colors,
      primary: Colors.PRIMARY,
      accent: Colors.ACCENT,
      background: '#fff',
    },
    fonts: configureFonts({
      android: {
        regular: {
          fontFamily: 'Roboto-Regular',
          fontWeight: 'normal',
        },
        medium: {
          fontFamily: 'Roboto-Medium',
          fontWeight: 'normal',
        },
        light: {
          fontFamily: 'Roboto-Light',
          fontWeight: 'normal',
        },
        thin: {
          fontFamily: 'Roboto-Thin',
          fontWeight: 'normal',
        },
      },
    }),
  };
  const CombinedDarkTheme = {
    ...PaperDarkTheme,
    ...NavigationDarkTheme,
    colors: {
      ...PaperDarkTheme.colors,
      ...NavigationDarkTheme.colors,
      primary: Colors.PRIMARY,
      accent: Colors.ACCENT,
      background: Colors.DARK_PRIMARY,
      surface: 'rgba(142,190,225,255)',
      placeholder: '#c1dcee',
    },
    fonts: configureFonts({
      android: {
        regular: {
          fontFamily: 'OpenSans-Regular',
          fontWeight: 'normal',
        },
        medium: {
          fontFamily: 'OpenSans-Medium',
          fontWeight: 'normal',
        },
        light: {
          fontFamily: 'OpenSans-Light',
          fontWeight: 'normal',
        },
        thin: {
          fontFamily: 'OpenSans-Light',
          fontWeight: 'normal',
        },
      },
    }),
  };

  return (
    <PaperProvider theme={darkmode ? CombinedDarkTheme : CombinedDefaultTheme}>
      <NavigationContainer
        theme={darkmode ? CombinedDarkTheme : CombinedDefaultTheme}>
        <MainStack.Navigator initialRouteName="main">
          <MainStack.Screen
            name="main"
            options={{headerShown: false}}
            component={AppRouter}
            
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};
const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};
export default App;
