import React from 'react';
import { FlatList, Alert, StyleSheet, View } from 'react-native';
import { MenuItemData } from '../../../constants/interface/restaurant';
import MenuItemCard from '../../../components/cards/restaurantCard/RestaurantItem';
import { images } from '../../../themes/images';

const DUMMY_DATA: MenuItemData[] = [
  {
    restaurantId: 'R1',
    name: 'Shawarma Powerbowl + Drink + Side or Snack',
    price: '£15.99',
    description:
      'A complete meal deal featuring our signature powerbowl, drink, and a choice of side.',
    restaurantImage: images.images.foods.food1,
    isPopular: false,
  },
  {
    restaurantId: 'R2',
    name: 'Shawarma Powerbowl + Drink',
    price: '£13.99',
    description:
      'Our classic shawarma bowl with your choice of refreshing drink.',
    restaurantImage: images.images.foods.food2,
    isPopular: true, 
  },
  {
    restaurantId: 'R3',
    name: 'Avocado Caesar Salad + Drink',
    price: '£13.99',
    description:
      'Fresh romaine, creamy avocado, classic Caesar dressing, and grilled chicken.',
    restaurantImage: images.images.foods.food4,
    isPopular: false,
  },
  {
    restaurantId: 'R4',
    name: 'Parmesan Chicken Salad + Drink',
    price: '£12.99',
    description:
      'Crispy chicken fillet with shaved parmesan cheese and a zesty vinaigrette.',
    restaurantImage: images.images.foods.food6,
    isPopular: false,
  },
  {
    restaurantId: 'R5',
    name: 'Avocado Caesar Salad + Drink + Side or Snack',
    price: '£15.99',
    description:
      'A complete healthy deal with salad, drink, and an extra snack.',
    restaurantImage: images.images.foods.food8,
    isPopular: false,
  },
];

const RestaurantMenuList = () => {
  const handleCardPress = (restaurantId: string) => {
    Alert.alert('Navigate', `Pressed item with ID: ${restaurantId}`);
  };

  const renderItem = ({ item }: { item: MenuItemData }) => (
    <MenuItemCard item={item} onPress={handleCardPress} />
  );

  return (
    <View style={listStyles.container}>
      <FlatList
        data={DUMMY_DATA}
        renderItem={renderItem}
        keyExtractor={item => item.restaurantId}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={listStyles.contentContainer}
      />
    </View>
  );
};

const listStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 0,
    paddingBottom: 50,
  },
});

export default RestaurantMenuList;
