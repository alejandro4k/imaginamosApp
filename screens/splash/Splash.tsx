import React, { useEffect, useState } from 'react';
import {View, Text} from 'react-native';
import {ActivityIndicator, Caption} from 'react-native-paper';

import { useDispatch } from 'react-redux';
import {Colors, Spacing, theme} from '../../config/Theme';
import { startLoadMoviesRated, startLoadMoviesRecomended } from '../../redux/actions/moviesActions';

const Splash = (props: any) => {
    const {navigation}=props
    const dispatch = useDispatch();
    const [showError, setShowError] = useState(false)

    useEffect(() => {
        const fetchMovies = async()=>{
            try {
                
                await dispatch( startLoadMoviesRecomended() )
                await dispatch( startLoadMoviesRated() );
                navigation.replace('App');

            } catch (error) {
                console.log(error)
                setShowError(true)

                
            }
        }
        fetchMovies()
    }, [])

  return (
    <View
      style={[
        theme.container,
        {justifyContent: 'center', alignItems: 'center'},
      ]}>
      <ActivityIndicator size="large" color={Colors.PRIMARY} />
      {!showError?
      <Caption style={{fontSize: 18, marginTop: Spacing}}>Loading...</Caption>
      :
      <Caption style={{fontSize: 18, marginTop: Spacing, color:Colors.DANGER}}>Plase try again.</Caption>

      }
    </View>
  );
};

export default Splash;
