import { StyleSheet, View } from 'react-native';
import React from 'react';
import { images } from '../../../themes/images';
import ScrollViewCategoryList from '../../../components/spyList/ScrollViewCategoryList';

const RestaurantCategoryScreen = () => {
  const minimalRestaurantData = {
    name: 'Local Cafe',
    categories: ['Coffee', 'Snacks'],
    distance: '0.5 mi',
    openTime: '7:00 AM',
    openDay: 'Everyday',
    minimumOrder: '$5.00',
    deliveryFee: 'Free',
    rating: 4.2,
    reviewCount: 50,
    restaurantImage: images.images.foods.food10,
  };

  return (
    <View style={styles.container}>
      <ScrollViewCategoryList onStartGroupOrder={() => null} restaurantData={minimalRestaurantData} dateSet={[]}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RestaurantCategoryScreen;
