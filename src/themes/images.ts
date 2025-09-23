import { ImageSourcePropType } from 'react-native';

export const images = {
  icons: {
    socialLogins: {
      google: require('../assets/icons/google/google.png') as ImageSourcePropType,
      facebook:
        require('../assets/icons/facebook/fb.png') as ImageSourcePropType,
      apple: require('../assets/icons/apple/apple.png') as ImageSourcePropType,
    },
    person: require('../assets/icons/person/person.png') as ImageSourcePropType,
    home: require('../assets/icons/home/home.png') as ImageSourcePropType,
    email: require('../assets/icons/email/email.png') as ImageSourcePropType,
    navigate: require('../assets/icons/navigator/Send.png') as ImageSourcePropType,
    drawer: require('../assets/icons/menu/Menu.png') as ImageSourcePropType,
    arrow_back: require('../assets/icons/back_arrow/back_arrow.png') as ImageSourcePropType,
    expand_arrow: require('../assets/icons/expand_arrow/expand_arrow.png') as ImageSourcePropType,
    star: require('../assets/icons/star/star.png') as ImageSourcePropType,
    close: require('../assets/icons/close/close.png') as ImageSourcePropType,
    bike: require('../assets/icons/bike/bike.png') as ImageSourcePropType,
    translate: require('../assets/icons/translate/translate.png') as ImageSourcePropType,
    swaps: require('../assets/icons/swap/swap.png') as ImageSourcePropType,
  },

  images:{
    homeDeco: require('../assets/images/home.png') as ImageSourcePropType,
    foods: {
      food1: require('../assets/images/foods/food.png') as ImageSourcePropType,
      food2: require('../assets/images/foods/food2.png') as ImageSourcePropType,
      food4: require('../assets/images/foods/food4.png') as ImageSourcePropType,
      food5: require('../assets/images/foods/food5.png') as ImageSourcePropType,
      food6: require('../assets/images/foods/food6.png') as ImageSourcePropType,
      food7: require('../assets/images/foods/food7.png') as ImageSourcePropType,
      food8: require('../assets/images/foods/food8.png') as ImageSourcePropType,
      food9: require('../assets/images/foods/food9.png') as ImageSourcePropType,
      food10: require('../assets/images/foods/food10.png') as ImageSourcePropType,
    }
  },

  logos:{
    appLogo: require('../assets/logos/Vector.png') as ImageSourcePropType,
  }
};
