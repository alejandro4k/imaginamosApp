import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Paper, {
  Button,
  Title,
  useTheme,
  Searchbar,
  Switch,
  Paragraph,
} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import MovieList from '../../components/movies/MoviesList';
import {Colors, theme, dimensionsTheme} from '../../config/Theme';
import {setDarkMode} from '../../redux/actions/uiActions';
import {RootState} from '../../redux/store';

const {RADIUS, Spacing} = dimensionsTheme;

const Home = () => {
  const {darkmode} = useSelector((state: RootState) => state.ui);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const {moviesRecomended, moviesRated} = useSelector(
    (state: RootState) => state.movies,
  );
  const {colors: ColorsThemePaper} = useTheme();

  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  useEffect(() => {
    dispatch(setDarkMode(isSwitchOn));
  }, [isSwitchOn]);
  return (
    <View style={{flex: 1}}>
      <View style={theme.header}>
        <View
          style={{position: 'absolute', top: Spacing, flexDirection: 'row'}}>
          <Switch
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            color={Colors.BLUE_DARK}
          />
          <Paragraph>Dark mode</Paragraph>
        </View>
        <Title style={{fontSize: 30}}>Hello, what do you want to watch ?</Title>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          style={[
            theme.searchBar,
            {
              backgroundColor: ColorsThemePaper.surface,
            },
          ]}
          value={searchQuery}
        />
      </View>

      <View
        style={[
          theme.containerList,
          {
            backgroundColor: ColorsThemePaper.background,
          },
        ]}>
        <View style={theme.container}>
          <ScrollView>
            <MovieList movies={moviesRecomended} title="RECOMMENDED FOR YOU" />
            <MovieList movies={moviesRated} title="TOP RATED" />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Home;
