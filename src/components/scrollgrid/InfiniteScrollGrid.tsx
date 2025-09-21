import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { useThemeStore } from '../../store/themeStore';
import AnimatedImageRow, {
  LocalImageSource,
} from './AnimatedImageRow';
import { images } from '../../themes/images';

const SPACING = 10;
const { width } = Dimensions.get('window');

 const ROW_1_IMAGES: LocalImageSource[] = [
  images.images.foods.food4,
  images.images.foods.food5,
  images.images.foods.food9,
  images.images.foods.food2,
  images.images.foods.food6,
  images.images.foods.food8,
];

const ROW_2_IMAGES: LocalImageSource[] = [
  images.images.foods.food1,
  images.images.foods.food2,
  images.images.foods.food4,
  images.images.foods.food5,
  images.images.foods.food7,
  images.images.foods.food8,
];

const INFINITE_ROW_1 = [
  ...ROW_1_IMAGES,
  ...ROW_1_IMAGES,
  ...ROW_1_IMAGES,
  ...ROW_1_IMAGES,
  ...ROW_1_IMAGES,
];

const INFINITE_ROW_2 = [
  ...ROW_2_IMAGES,
  ...ROW_2_IMAGES,
  ...ROW_2_IMAGES,
  ...ROW_2_IMAGES,
  ...ROW_2_IMAGES,
];

const InfiniteScrollGrid = () => {
  const { Colors } = useThemeStore();

  return (
    <View
      style={[
        styles.mainContainer,
        { backgroundColor: Colors.Background.PRIMARY },
      ]}
    >
      <View style={styles.row}>
        <AnimatedImageRow   data={INFINITE_ROW_1} duration={40000} />
      </View>
      <View style={[styles.row, { marginTop: SPACING }]}>
        <AnimatedImageRow  data={INFINITE_ROW_2} duration={30000} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: width,
    overflow: 'hidden',
    paddingVertical: 20,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
});

export default InfiniteScrollGrid;
