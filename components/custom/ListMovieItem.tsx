import React, {FC} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { Paragraph } from 'react-native-paper';
import {dimensionsTheme} from '../../config/Theme';
import {IMovie} from '../../redux/types/types';
const {ITEM_WITH, RADIUS, ITEM_HEIGHT} = dimensionsTheme;
interface props {
  movie: IMovie;
}

const ListMovieItem: FC<props> = ({movie}) => {
  return (
    <TouchableOpacity
      style={{
        width: ITEM_WITH,
        height: ITEM_HEIGHT*1.3,
        overflow: 'hidden',
       
      }}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
        }}
        style={{resizeMode: 'cover', height: ITEM_HEIGHT, width: ITEM_WITH,
        borderRadius: RADIUS*2,
    
    }}
    />
    <Paragraph>{movie.title}</Paragraph>
    </TouchableOpacity>
  );
};

export default ListMovieItem;
