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
  },

  logos:{
    appLogo: require('../assets/logos/Vector.png') as ImageSourcePropType,
  }
};
