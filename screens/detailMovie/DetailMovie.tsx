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
import {getMovieDetail} from '../../helpers/movies';
import {IDetailMovie} from '../../interface/movie';
import ProductionCompanyItem from '../../components/movies/ProductionCompanyItem';
const {ITEM_HEIGHT, ITEM_WITH, RADIUS} = dimensionsTheme;

const DetailMovie = () => {
  const {activeMovie} = useSelector((state: RootState) => state.movies);
  const [movieDetail, setMovieDetail] = useState<IDetailMovie | null>(null);
  const [isReady, setIsReady] = useState(false)
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {colors: ColorsThemePaper} = useTheme();

  const handleGoBack = () => {
    dispatch(setActiveMovie(null));
    navigation.goBack();
  };
  useEffect(() => {
    if (activeMovie) {
      const fetchDetail = async (idMovie: number) => {
        const resp = await getMovieDetail(idMovie);
        setMovieDetail(resp);
      };
      fetchDetail(activeMovie.id);
    }
    InteractionManager.runAfterInteractions(() => {
        setIsReady(true);
      });
  }, []);
  if (!isReady) {
    return (
        <View
        style={[
          theme.container,
          {justifyContent: 'center', alignItems: 'center'},
        ]}>
        <ActivityIndicator size="large" color={Colors.PRIMARY} />

        <Caption style={{fontSize: 18,marginTop: Spacing}}>Loading...</Caption>
      </View>
    );
  }
  return (
    <View style={{flex: 1}}>
      {movieDetail && (
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
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/original${movieDetail.poster_path}`,
              }}
              style={{
                height: ITEM_HEIGHT * 1.9,
                width: '100%',
                resizeMode: 'stretch',
              }}
            />
          </View>
          <ScrollView>
            <View style={theme.container}>
              <Title style={{fontWeight: 'bold'}}>{movieDetail.title}</Title>
              <View
                style={[
                  theme.row,
                  {marginTop: Spacing, marginBottom: Spacing * 3},
                ]}>
                <TouchableOpacity
                  style={{
                    padding: Spacing,
                    width: ITEM_WITH,
                    borderRadius: RADIUS * 3,
                    backgroundColor: Colors.PLACEHOLDER,
                  }}>
                  <Paragraph style={{fontWeight: 'bold', alignSelf: 'center'}}>
                    WATCH NOW
                  </Paragraph>
                </TouchableOpacity>
                <AirbnbRating
                  count={5}
                  showRating={false}
                  reviews={['Bad', 'Regular', 'OK', 'Good', 'Very Good']}
                  defaultRating={Math.round(movieDetail.vote_average)}
                  size={20}
                  isDisabled
                />
              </View>

              <Paragraph
                style={{
                  color: Colors.SECONDARY_TEXT,
                  textAlign: 'justify',
                  lineHeight: 25,
                }}>
                {movieDetail.overview}
              </Paragraph>
              <Subheading>PRODUCTION COMPANIES:</Subheading>

              <FlatList
                data={movieDetail.production_companies}
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => (
                  <View style={{width: Spacing * 2}} />
                )}
                renderItem={({item}) => (
                  <ProductionCompanyItem
                    key={item.id}
                    productionCompany={item}
                  />
                )}
              />
              
              <View style={{marginTop: Spacing,marginBottom:Spacing}}>
                <View style={{flexDirection: 'row'}}>
                  <Paragraph style={{fontWeight: 'bold',marginRight:20}}>Genre:</Paragraph>
                  <View style={{flexDirection: 'row'}}>
                    {movieDetail.genres.map((gen,index) => (
                      <Paragraph key={gen.id} style={{color: Colors.SECONDARY_TEXT}}>
                        {gen.name}
                        {index < movieDetail.genres.length-1 &&
                        ","
                        }
                      </Paragraph>
                    ))}
                  </View>
                </View>
              </View>
              <View style={{marginTop: Spacing,marginBottom:Spacing}}>
                <View style={{flexDirection: 'row'}}>
                  <Paragraph style={{fontWeight: 'bold',marginRight:20}}>Release:</Paragraph>
                  <Paragraph style={{color: Colors.SECONDARY_TEXT}}>
                        {movieDetail.release_date}
                      </Paragraph>
                </View>
              </View>
            </View>
          </ScrollView>
        </>
      ) }
    </View>
  );
};

export default DetailMovie;
