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
  PRIMARY: '#039be5',
  DARK_PRIMARY: '#37474f',
  LIGTH_PRIMARY: '#45aaf2',
  TEXT_ICONS: '#FBFFF1',
  ACCENT: '#0fb9b1',
  PRIMARY_TEXT: '#212121',
  SECONDARY_TEXT: '#a5b1c2',
  DIVIDER_COLOR: '#BDBDBD',
  GREY_LIGHT: '#fafafa',
  DANGER: "#d32f2f"
};

export const THEME_PAPER = {
  colors: {primary: Colors.PRIMARY, background: '#fff'},
};
export const theme = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing * 1.2,
  
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  /* textInput:{
    marginBottom: Spacing * 0.68,
    height: dimensionsTheme.ITEM_HEIGHT / 3.85,
  },
  fontMd:{
    color: Colors.GREY_LIGHT, fontSize: hp(2.5), flex: 2
  },
  btn: {
    //height: Spacing * 5,
    height: dimensionsTheme.ITEM_HEIGHT/3.8,
    backgroundColor: Colors.ACCENT,
  },
  btn_primary:{
    height: dimensionsTheme.ITEM_HEIGHT/3.8,
    backgroundColor: Colors.PRIMARY,
  }
  ,
  btn_disabled: {
    borderRadius: dimensionsTheme.RADIUS * 0.5,
    height: Spacing * 5,

    backgroundColor: Colors.DIVIDER_COLOR,
  },
  btn_new_survey: {
    borderRadius: dimensionsTheme.RADIUS*2,
    height: Spacing * 10,
    
    
    backgroundColor: Colors.PRIMARY,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItemContainer: {
    backgroundColor: Colors.GREY_LIGHT,
    borderRadius: dimensionsTheme.RADIUS,
    padding: Spacing * 0.7,
    borderColor: Colors.DIVIDER_COLOR,
    borderWidth: 1,
    elevation: 1,
  },
  viewBottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  contentModal: {
    backgroundColor: 'white',
    padding: 22,

    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  }, */
});
