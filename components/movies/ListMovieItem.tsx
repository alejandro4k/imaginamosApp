import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Paragraph} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {dimensionsTheme, Spacing} from '../../config/Theme';
import {setActiveMovie} from '../../redux/actions/moviesActions';
import {IMovie} from '../../redux/types/types';
import {Rating, AirbnbRating} from 'react-native-ratings';
const {ITEM_WITH, RADIUS, ITEM_HEIGHT} = dimensionsTheme;
interface props {
  movie: IMovie;
}

const ListMovieItem: FC<props> = ({movie}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleDetailMovie = () => {
    dispatch(setActiveMovie(movie));
    // @ts-ignore
    navigation.navigate('DetailMovie');
  };
  return (
    <TouchableOpacity
      style={{
        width: ITEM_WITH,
        height: ITEM_HEIGHT * 1.34,
        overflow: 'hidden',
      }}
      onPress={handleDetailMovie}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
        }}
        style={{
          resizeMode: 'cover',
          height: ITEM_HEIGHT,
          width: ITEM_WITH,
          borderRadius: RADIUS * 2,
        }}
      />
      <Paragraph>{movie.title}</Paragraph>
      <AirbnbRating
        ratingContainerStyle={{position: 'absolute', bottom: 0}}
        count={5}
        showRating={false}
        reviews={['Bad', 'Regular', 'OK', 'Good', 'Very Good']}
        defaultRating={Math.round(movie.vote_average)}
        size={20}
        isDisabled
      />
    </TouchableOpacity>
  );
};

export default ListMovieItem;
