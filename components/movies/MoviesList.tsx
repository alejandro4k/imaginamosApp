import React, { FC } from 'react';
import {View,  FlatList} from 'react-native';
import {Caption, Subheading} from 'react-native-paper';

import ListMovieItem from './ListMovieItem';
import {dimensionsTheme, Spacing, theme} from '../../config/Theme';

import { IMovie } from '../../redux/types/types';
const {ITEM_WITH} = dimensionsTheme;
interface props {
  title:string,
  movies:IMovie[],
  onPress?:Function
}
const MovieList:FC<props> = ({title,movies,onPress}) => {
  return (
    <View style={{marginTop:Spacing*2.5}}>
      <View style={[theme.row,{marginBottom:Spacing*2}]}>
        <Subheading>{title}</Subheading>
        <Caption>See all</Caption>
      </View>

      <FlatList
        data={movies}
        horizontal
        snapToInterval={ITEM_WITH + Spacing * 2}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{width: Spacing * 2}} />}
        renderItem={({item}) => (
          <ListMovieItem key={item.id.toString()} movie={item}/>
        )}
      />
    </View>
  );
};

export default MovieList;
