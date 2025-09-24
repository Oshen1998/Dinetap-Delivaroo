import { StyleSheet, View } from 'react-native';
import React, { useCallback } from 'react';
import ScrollViewCategoryList from '../../../components/spyList/ScrollViewCategoryList';
import { useNavigation } from '@react-navigation/native';
import { randomImage } from '../../../utils';
import { useThemeStore } from '../../../store/themeStore';

const RestaurantCategoryScreen = () => {
  const {  goBack } = useNavigation();
  const {Colors} = useThemeStore()
  const minimalRestaurantData = {
    name: "Tossed - St Martin's Lane",
    categories: ['Halal', 'Salad', 'Healthy'],
    distance: '0.5 mi',
    openTime: '7:00 AM',
    openDay: 'Everyday',
    minimumOrder: '$5.00 minimum',
    deliveryFee: '£0.49 delivery',
    rating: 4.2,
    reviewCount: 50,
    restaurantImage: randomImage(),
  };

  const onHandleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <View style={[styles.container, {backgroundColor: Colors.Background.PRIMARY}]}>
      <ScrollViewCategoryList
        onBack={onHandleGoBack}
        onStartGroupOrder={() => null}
        restaurantData={minimalRestaurantData}
        dateSet={[]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RestaurantCategoryScreen;
