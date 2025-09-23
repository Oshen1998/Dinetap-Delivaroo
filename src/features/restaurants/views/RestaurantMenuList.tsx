import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { MenuItemData } from '../../../constants/interface/restaurant';
import MenuItemCard from '../../../components/cards/restaurantCard/RestaurantItem';
import useRestaurantStore from '../../../store/restaurantStore';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../constants/enums/navigation.enum';
import { RESTAURANT_DUMMIES } from '../../../constants';
import { useModal } from 'react-native-modalfy';
import { MODAL_STACK } from '../../../modals/modal.constants';

const RestaurantMenuList = () => {
  const { fetchData } = useRestaurantStore();
  const { navigate } = useNavigation();
  const { openModal, closeModal } = useModal();

  const handleCardPress = async (restaurantId: number) => {
    openModal(MODAL_STACK.LOADING, {
      title: 'Just a moment...',
      description: "We're getting things ready for you.",
    });
    await fetchData?.(Number(restaurantId));
    navigate(ROUTES.CATEGORIES as never);
    setTimeout(() => {
      closeModal(MODAL_STACK.LOADING);
    }, 3000);
  };

  const renderItem = ({ item }: { item: MenuItemData }) => (
    <MenuItemCard item={item} onPress={handleCardPress} />
  );

  return (
    <View style={listStyles.container}>
      <FlatList
        data={RESTAURANT_DUMMIES}
        renderItem={renderItem}
        keyExtractor={item => item.restaurantId.toString()}
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
