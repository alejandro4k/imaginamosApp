import React, {FC} from 'react';
import {View, Text, Image} from 'react-native';
import {Caption, Paragraph} from 'react-native-paper';
import {Colors, dimensionsTheme} from '../../config/Theme';
import {IProductionCompany} from '../../interface/movie';
const {ITEM_HEIGHT, ITEM_WITH, RADIUS} = dimensionsTheme;
interface props {
  productionCompany: IProductionCompany;
}
const ProductionCompanyItem: FC<props> = ({productionCompany}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        height: ITEM_HEIGHT * 0.70,
        width: ITEM_WITH / 2,
      }}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original${productionCompany.logo_path}`,
        }}
        style={{
          height: ITEM_HEIGHT / 2,
          width: ITEM_WITH / 2,
          resizeMode: 'contain',
          borderRadius: RADIUS,
        }}
      />
      <Caption>{productionCompany.name}</Caption>
    </View>
  );
};

export default ProductionCompanyItem;
