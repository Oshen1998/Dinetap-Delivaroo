import { Platform } from 'react-native';

const SHADOW_OPACITY = 0.15;
const SHADOW_RADIUS = 3.84;
const SHADOW_OFFSET = { width: 0, height: 2 };
const ELEVATION_VALUE = 5;

const createShadowStyle = (elevation = ELEVATION_VALUE) => {
  if (Platform.OS === 'ios') {
    return {
      shadowColor: '#000',
      shadowOffset: SHADOW_OFFSET,
      shadowOpacity: SHADOW_OPACITY,
      shadowRadius: SHADOW_RADIUS,
    };
  } else {
    return {
      elevation: elevation,
    };
  }
};


export const Shadows = {
  small: {
    ...createShadowStyle(2),
  },

  medium: {
    ...createShadowStyle(5),
  },

  deep: {
    ...createShadowStyle(10),
    ...(Platform.OS === 'ios' && {
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.4,
      shadowRadius: 7,
    }),
  },
};

export const getShadow = createShadowStyle;