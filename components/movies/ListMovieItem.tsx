import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Caption, Paragraph} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {dimensionsTheme, Spacing} from '../../config/Theme';
import {setActiveMovie} from '../../redux/actions/moviesActions';
import {IMovie} from '../../redux/types/types';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {SharedElement} from 'react-navigation-shared-element';
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
    navigation.navigate('DetailMovie', {movie});
  };
  return (
    <TouchableOpacity
      style={{
        width: ITEM_WITH,
        height: ITEM_HEIGHT * 1.34,
        overflow: 'hidden',
      }}
      onPress={handleDetailMovie}>
      <SharedElement id={`${movie.id}.poster`}
       
      >
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
      </SharedElement>
      <SharedElement id={`${movie.id}.title`}>

      <Paragraph>{movie.title}</Paragraph>
      </SharedElement>
      <SharedElement id={`${movie.id}.rating`} style={{position: 'absolute', bottom: 0}}>

      <AirbnbRating
        ratingContainerStyle={{position: 'absolute', bottom: 0}}
        count={5}
        showRating={false}
        reviews={['Bad', 'Regular', 'OK', 'Good', 'Very Good']}
        defaultRating={Math.round(movie.vote_average)}
        size={20}
        isDisabled
      />
      </SharedElement>
    </TouchableOpacity>
  );
};

export default ListMovieItem;
