import { useEffect, useRef } from "react";
import { Animated, Dimensions, Easing, Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import { images } from "../../themes/images";

const { width } = Dimensions.get('window');

export type LocalImageSource = ImageSourcePropType;

const ROW_1_IMAGES: LocalImageSource[] = [
  images.images.foods.food4,
  images.images.foods.food5,
  images.images.foods.food9,
  images.images.foods.food2,
  images.images.foods.food6,
  images.images.foods.food8,
];

 const INFINITE_ROW_1 = [
  ...ROW_1_IMAGES,
  ...ROW_1_IMAGES,
  ...ROW_1_IMAGES,
  ...ROW_1_IMAGES,
  ...ROW_1_IMAGES,
];


const IMAGE_WIDTH = 120;
const SPACING = 10;
const ITEM_SIZE = IMAGE_WIDTH + SPACING;
const TOTAL_WIDTH_ROW = INFINITE_ROW_1.length * ITEM_SIZE;
const RESET_POINT = ROW_1_IMAGES.length * ITEM_SIZE;

interface ImageRowProps {
  data: LocalImageSource[];
  duration: number;
}

const AnimatedImageRow  = ({ data, duration }: ImageRowProps) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = () => {
      scrollX.setValue(0);
      Animated.timing(scrollX, {
        toValue: -RESET_POINT,
        duration: duration,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => animate());
    };

    animate();

    return () => scrollX.stopAnimation();
  }, [duration, scrollX]);

  return (
    <Animated.View
      style={[
        styles.rowWrapper,
        {
          width: TOTAL_WIDTH_ROW,
          transform: [{ translateX: scrollX }],
        },
      ]}
    >
      {data.map((source, index) => (
        <View key={index} style={styles.imageContainer}>
          <Image source={source} style={styles.image} resizeMode="cover" />
        </View>
      ))}
    </Animated.View>
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
  rowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: IMAGE_WIDTH,
  },
  imageContainer: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    borderRadius: 8,
    marginRight: SPACING,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default AnimatedImageRow