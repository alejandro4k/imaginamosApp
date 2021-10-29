import React, {FC} from 'react';
import {View, Text, Image} from 'react-native';
import {Caption, Paragraph, Avatar} from 'react-native-paper';
import {Colors, dimensionsTheme, Spacing} from '../../config/Theme';
import {IMovieCast, IProductionCompany} from '../../interface/movie';
const {ITEM_HEIGHT, ITEM_WITH, RADIUS} = dimensionsTheme;
interface props {
  cast: IMovieCast;
}
const ListMovieCastItem: FC<props> = ({cast}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        height: ITEM_HEIGHT * 0.7,
        width: ITEM_WITH / 2,
        justifyContent: 'center',
        
      }}>
      <Avatar.Image
        source={{
          uri: `https://image.tmdb.org/t/p/original${cast.profile_path}`,
        }}
        style={{position:'absolute',top:0}}
      />
      <Caption style={{marginTop:Spacing*4}} >{cast.name}</Caption>
    </View>
  );
};

export default ListMovieCastItem;
