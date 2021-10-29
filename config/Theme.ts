import {Dimensions, StyleSheet} from 'react-native';

export const {width, height} = Dimensions.get('window');
export const Size = 64;
export const Icon_Size = Size * 0.6;
export const Spacing = 10;
const s = width * 0.35;

export const dimensionsTheme = {
  ITEM_WITH: s,
  ITEM_HEIGHT: s * 1.35,
  RADIUS: 18 * 0.5,
  Spacing,
  FULL_SIZE: s + Spacing * 2,
};

export const Colors = {
  PRIMARY: '#5da4d4',
  DARK_PRIMARY: '#2c3545',
  LIGTH_PRIMARY: '#8fbce0',
  TEXT_ICONS: '#dbe9f3',
  ACCENT: '#0fb9b1',
  PRIMARY_TEXT: '#212121',
  SECONDARY_TEXT: '#747c87',
  DIVIDER_COLOR: '#7b8590',
  GREY_LIGHT: '#fafafa',
  BLUE_DARK: '#40648c',
  DANGER: '#d32f2f',
  PLACEHOLDER: '#6b7480',
};

export const THEME_PAPER = {
  colors: {primary: Colors.PRIMARY, background: '#fff'},
};
export const theme = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:Spacing*2,
    paddingHorizontal:Spacing*3,
    paddingBottom:Spacing
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  header: {
    flex: 1.45,
    backgroundColor: Colors.PRIMARY,
    paddingHorizontal: Spacing * 6.3,
    paddingTop: Spacing * 5,
  },
  searchBar: {
    borderRadius: dimensionsTheme.RADIUS * 3,
    height: 40,
    marginTop: Spacing * 2,
  },
  containerList: {
    flex: 4,
    borderRadius: dimensionsTheme.RADIUS * 3,
    width: '100%',
    marginTop: -30,
  },
  itemCardContainer: {
    width: dimensionsTheme.ITEM_WITH,
    height: dimensionsTheme.ITEM_HEIGHT * 1.34,
    overflow: 'hidden',
  },
  itemCardImg: {
    resizeMode: 'cover',
    height: dimensionsTheme.ITEM_HEIGHT,
    width: dimensionsTheme.ITEM_WITH,
    borderRadius: dimensionsTheme.RADIUS * 2,
  },
  btnWatch: {
    padding: Spacing,
    width: dimensionsTheme.ITEM_WITH,
    borderRadius: dimensionsTheme.RADIUS * 3,
    backgroundColor: Colors.PLACEHOLDER,
  },
});
