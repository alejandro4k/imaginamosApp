import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Caption, Subheading} from 'react-native-paper';
import {useSelector} from 'react-redux';
import ListMovieItem from '../../components/custom/ListMovieItem';
import {Colors, dimensionsTheme, Spacing, theme} from '../../config/Theme';
import {RootState} from '../../redux/store';
const {ITEM_WITH} = dimensionsTheme;
const Recomended = () => {
  const {moviesRecomended} = useSelector((state: RootState) => state.movies);
  useEffect(() => {
    console.log(moviesRecomended);
  }, []);

  return (
    <View style={{marginTop:Spacing*2.5}}>
      <View style={[theme.row,{marginBottom:Spacing*2}]}>
        <Subheading>RECOMMENDED TO YOU</Subheading>
        <Caption>See all</Caption>
      </View>

      <FlatList
        data={moviesRecomended}
        horizontal
        snapToInterval={ITEM_WITH + Spacing * 2}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{width: Spacing * 2}} />}
        renderItem={({item}) => (
          <ListMovieItem key={item.id.toString()} movie={item} />
        )}
      />
    </View>
  );
};

export default Recomended;
