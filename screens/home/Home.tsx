import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Paper, {Button, Title, useTheme, Searchbar,Switch, Paragraph} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import MovieList from '../../components/movies/MoviesList';
import {Colors, theme, dimensionsTheme} from '../../config/Theme';
import {setDarkMode} from '../../redux/actions/uiActions';
import {RootState} from '../../redux/store';

const {RADIUS, Spacing} = dimensionsTheme;

const Home = () => {
  const {darkmode} = useSelector((state: RootState) => state.ui);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const {moviesRecomended,moviesRated} = useSelector((state:RootState) => state.movies)
  const {colors: ColorsThemePaper} = useTheme();

  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  useEffect(() => {
    dispatch(setDarkMode(isSwitchOn))
  }, [isSwitchOn])
  return (
    
    <View style={{flex: 1}}>
     
      <View
        style={{
          flex: 1.45,
          backgroundColor: Colors.PRIMARY,
          paddingHorizontal: Spacing*6.3,
          paddingTop: Spacing*5,
        }}>
          <View 
          style={{position:'absolute',top:Spacing,flexDirection:'row'}}
          >

          <Switch
          value={isSwitchOn} onValueChange={onToggleSwitch}
          color={Colors.BLUE_DARK}
          
          />
          <Paragraph>Dark mode</Paragraph>
          </View>
        <Title style={{fontSize: 30}}>Hello, what do you want to watch ?</Title>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          style={{
            borderRadius: RADIUS * 3,
            backgroundColor: ColorsThemePaper.surface,
            height: 40,
            marginTop: Spacing * 2,
          }}
          value={searchQuery}
        />
      </View>
    
      
      <View
        style={{
          flex: 4,
          borderRadius: RADIUS * 3,
          width: '100%',
          marginTop:-30,
          backgroundColor: ColorsThemePaper.background,
        }}>
        <View style={theme.container}>
          <ScrollView>

          <MovieList movies={moviesRecomended} title='RECOMMENDED FOR YOU'/>
          <MovieList movies={moviesRated} title='TOP RATED'/>
          </ScrollView>
         
          {/* <Button mode="contained" onPress={() => dispatch(setDarkMode())}>
            DARK MODE
          </Button>

          <Title>{`DARK MODE ${darkmode ? 'ON' : 'OFF'}`}</Title> */}
        </View>
      </View>
    

      
    </View>
  );
};

export default Home;
