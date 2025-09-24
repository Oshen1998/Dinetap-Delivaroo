import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  ListRenderItem,
} from 'react-native';
import FoodCard, { CardType } from '../Card';
import AppText from '../../texts/AppText';
import { FONT_FAMILIES, FONT_SIZES } from '../../../constants/fonts.constants';

const { width: screenWidth } = Dimensions.get('window');

interface BaseCardData {
  id: number;
  type: CardType;
  title: string;
  image: string;
  calories: number;
  price: string;
}

interface DiscountCardData extends BaseCardData {
  type: 'discount';
  discount: string;
  description: string;
  tags?: string[];
}

interface PopularCardData extends BaseCardData {
  type: 'popular';
}

type FoodCardData = DiscountCardData | PopularCardData;

// Example data
const foodData: FoodCardData[] = [
  {
    id: 1,
    type: 'discount',
    title: 'Chicken Caesar Salad',
    image:
      'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
    calories: 450,
    price: '$12.99',
    discount: '20% OFF',
    description:
      'Fresh romaine lettuce with grilled chicken, parmesan cheese, and creamy caesar dressing',
  },
  {
    id: 2,
    type: 'popular',
    title: 'Margherita Pizza',
    image:
      'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop',
    calories: 680,
    price: '$15.50',
  },
  {
    id: 3,
    type: 'discount',
    title: 'Grilled Salmon Bowl',
    image:
      'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop',
    calories: 520,
    price: '$18.99',
    discount: '15% OFF',
    description:
      'Perfectly grilled salmon served with quinoa, avocado, and mixed vegetables',
  },
  {
    id: 4,
    type: 'popular',
    title: 'Classic Burger',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    calories: 750,
    price: '$13.25',
  },
  {
    id: 5,
    type: 'discount',
    title: 'Vegetarian Wrap',
    image:
      'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop',
    calories: 380,
    price: '$9.99',
    discount: '25% OFF',
    description:
      'Fresh vegetables wrapped in a whole wheat tortilla with hummus spread',
  },
];

interface HorizontalFoodListProps {
  title?: string;
  onFoodPress?: (item: FoodCardData) => void;
}

const HorizontalScrollList: React.FC<HorizontalFoodListProps> = ({
  onFoodPress,
}) => {
  const renderFoodCard: ListRenderItem<FoodCardData> = ({ item }) => (
    <FoodCard
      {...item}
      style={styles.cardContainer}
      onPress={() => onFoodPress?.(item)}
    />
  );

  const keyExtractor = (item: FoodCardData) => String(item.id);

  return (
    <View style={styles.container}>
      <AppText
        fontFamily={FONT_FAMILIES.IBMPlexSans.Medium}
        fontSize={FONT_SIZES.SmallTitle}
        containerStyles={styles.textStyles}
      >
        Popular With Other People
      </AppText>
      <FlatList
        data={foodData}
        renderItem={renderFoodCard}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        snapToInterval={screenWidth * 0.8 + 16}
        snapToAlignment="start"
        decelerationRate="fast"
        pagingEnabled={false}
        removeClippedSubviews
        initialNumToRender={3}
        maxToRenderPerBatch={5}
        windowSize={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  cardContainer: {
    width: screenWidth * 0.35,
    marginRight: 16,
  },
  textStyles: {
    paddingHorizontal: 20,
    marginVertical: 8
  },
});

export default HorizontalScrollList;
