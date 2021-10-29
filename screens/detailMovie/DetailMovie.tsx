import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  InteractionManager,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Colors, dimensionsTheme, Spacing, theme} from '../../config/Theme';
import {RootState} from '../../redux/store';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {setActiveMovie} from '../../redux/actions/moviesActions';
import {
  ActivityIndicator,
  Caption,
  Paragraph,
  Subheading,
  Title,
  useTheme,
} from 'react-native-paper';
import {AirbnbRating} from 'react-native-ratings';
import {getMovieCast, getMovieDetail} from '../../helpers/movies';
import {IDetailMovie, IMovieCast} from '../../interface/movie';
import ListMovieCastItem from '../../components/movies/ListMovieCastItem';
import {SharedElement} from 'react-navigation-shared-element';
import { joinArrString } from '../../utils/utils';
const {ITEM_HEIGHT, ITEM_WITH, RADIUS} = dimensionsTheme;

const DetailMovie = () => {
  const {activeMovie} = useSelector((state: RootState) => state.movies);
  const [movieDetail, setMovieDetail] = useState<IDetailMovie | null>(null);
  const [movieCast, setMovieCast] = useState<IMovieCast[] | null>(null);
  const [isReady, setIsReady] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleGoBack = () => {
    dispatch(setActiveMovie(null));
    navigation.goBack();
  };
  useEffect(() => {
    if (activeMovie) {
      const fetchDetail = async (idMovie: number) => {
        const resp = await getMovieDetail(idMovie);
        const {cast} = await getMovieCast(idMovie);
        setMovieDetail(resp);
        setMovieCast(cast);
      };
      fetchDetail(activeMovie.id);
    }
    InteractionManager.runAfterInteractions(() => {
      setIsReady(true);
    });
  }, []);
  return (
    <View style={{flex: 1}}>
      {activeMovie && (
        <>
          <View>
            <TouchableOpacity
              style={{
                position: 'absolute',
                left: Spacing * 2,
                top: Spacing * 3,
                zIndex: 1,
              }}
              onPress={handleGoBack}>
              <Ionicons
                name="arrow-back"
                color={Colors.TEXT_ICONS}
                size={ITEM_HEIGHT / 8}
              />
            </TouchableOpacity>
            <SharedElement id={`${activeMovie.id}.poster`}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/original${activeMovie.poster_path}`,
                }}
                style={{
                  height: ITEM_HEIGHT * 1.9,
                  width: '100%',
                  resizeMode: 'stretch',
                }}
              />
            </SharedElement>
          </View>
          <ScrollView>
            <View style={theme.container}>
              <SharedElement id={`${activeMovie.id}.title`}>
                <Title style={{fontWeight: 'bold'}}>{activeMovie.title}</Title>
              </SharedElement>
              <View
                style={[
                  theme.row,
                  {marginTop: Spacing, marginBottom: Spacing * 3},
                ]}>
                <TouchableOpacity
                  style={theme.btnWatch}>
                  <Paragraph style={{fontWeight: 'bold', alignSelf: 'center'}}>
                    WATCH NOW
                  </Paragraph>
                </TouchableOpacity>
                <SharedElement id={`${activeMovie.id}.rating`}>
                  <AirbnbRating
                    count={5}
                    showRating={false}
                    reviews={['Bad', 'Regular', 'OK', 'Good', 'Very Good']}
                    defaultRating={Math.round(activeMovie.vote_average)}
                    size={20}
                    isDisabled
                  />
                </SharedElement>
              </View>
              {movieDetail && movieCast && isReady ? (
                <>
                  <Paragraph
                    style={{
                      color: Colors.SECONDARY_TEXT,
                      textAlign: 'justify',
                      lineHeight: 25,
                    }}>
                    {movieDetail.overview}
                  </Paragraph>
                  <FlatList
                    data={movieCast}
                    horizontal
                    style={{marginTop: Spacing}}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => (
                      <View style={{width: Spacing * 2}} />
                    )}
                    renderItem={({item}) => (
                      <ListMovieCastItem key={item.id} cast={item} />
                    )}
                  />
                  <View style={{marginTop: Spacing, marginBottom: Spacing}}>
                    <View style={{flexDirection: 'row'}}>
                      <Paragraph style={{fontWeight: 'bold', marginRight: 20}}>
                        Studio:
                      </Paragraph>
                      <Paragraph>{joinArrString(movieDetail.production_companies,",",true)}</Paragraph>
                    </View>
                  </View>
                  <View style={{marginTop: Spacing, marginBottom: Spacing}}>
                    <View style={{flexDirection: 'row'}}>
                      <Paragraph style={{fontWeight: 'bold', marginRight: 20}}>
                        Genre:
                      </Paragraph>
                      <Paragraph>{joinArrString(movieDetail.genres,",",true)}</Paragraph>
                      
                    </View>
                  </View>
                  <View style={{marginTop: Spacing, marginBottom: Spacing}}>
                    <View style={{flexDirection: 'row'}}>
                      <Paragraph style={{fontWeight: 'bold', marginRight: 20}}>
                        Release:
                      </Paragraph>
                      <Paragraph style={{color: Colors.SECONDARY_TEXT}}>
                        {movieDetail.release_date}
                      </Paragraph>
                    </View>
                  </View>
                </>
              ) : (
                <View
                  style={[
                    theme.container,
                    {justifyContent: 'center', alignItems: 'center'},
                  ]}>
                  <ActivityIndicator size="large" color={Colors.PRIMARY} />

                  <Caption style={{fontSize: 18, marginTop: Spacing}}>
                    Loading data...
                  </Caption>
                </View>
              )}
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default DetailMovie;
