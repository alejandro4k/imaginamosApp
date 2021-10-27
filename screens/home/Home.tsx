import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Paper, {Button, Title, useTheme, Searchbar} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {Colors, theme, dimensionsTheme} from '../../config/Theme';
import {setDarkMode} from '../../redux/actions/uiActions';
import {RootState} from '../../redux/store';
const {RADIUS, Spacing} = dimensionsTheme;

const Home = () => {
  const {darkmode} = useSelector((state: RootState) => state.ui);
  const {colors: ColorsThemePaper} = useTheme();

  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1.5,
          backgroundColor: Colors.PRIMARY,
          paddingHorizontal: dimensionsTheme.ITEM_WITH / 8,
          paddingTop: dimensionsTheme.ITEM_HEIGHT * 0.3,
        }}>
        <Title style={{fontSize: 30}}>
          Hello, what do you want to watch ?
        </Title>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
         

          style={{
              borderRadius:RADIUS*3,
              backgroundColor:ColorsThemePaper.surface,
              height:40,
              marginTop:Spacing*4
          }}
          value={searchQuery}
        />
      </View>
      <View
        style={{
          flex: 4,
          borderRadius: RADIUS * 3,
          width: '100%',
          marginTop: -30,
          backgroundColor: ColorsThemePaper.background,
        }}>
        <View style={theme.container}>
          <Text> PANTALLA HOME</Text>
          <Button mode="contained" onPress={() => dispatch(setDarkMode())}>
            DARK MODE
          </Button>

          <Title>{`DARK MODE ${darkmode ? 'ON' : 'OFF'}`}</Title>
        </View>
      </View>
    </View>
  );
};

export default Home;
