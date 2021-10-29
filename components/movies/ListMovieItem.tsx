import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {Paragraph} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {dimensionsTheme, theme} from '../../config/Theme';
import {setActiveMovie} from '../../redux/actions/moviesActions';
import {IMovie} from '../../redux/types/types';
import {AirbnbRating} from 'react-native-ratings';
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
    navigation.navigate('DetailMovie', {movie});
  };
  return (
    <TouchableOpacity
      style={[theme.itemCardContainer]}
      onPress={handleDetailMovie}>
      <SharedElement id={`${movie.id}.poster`}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
          }}
          style={theme.itemCardImg}
        />
      </SharedElement>
      <SharedElement id={`${movie.id}.title`}>
        <Paragraph>{movie.title}</Paragraph>
      </SharedElement>
      <SharedElement
        id={`${movie.id}.rating`}
        style={{position: 'absolute', bottom: 0}}>
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
