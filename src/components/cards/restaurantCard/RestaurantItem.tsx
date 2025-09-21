import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuItemCardProps } from '../../../constants/interface/restaurant';
import { useThemeStore } from '../../../store/themeStore';
import AppText from '../../texts/AppText';
import { LightColors } from '../../../themes/colors';
import { getShadow } from '../../../utils/shadow.util';

const MenuItemCard = ({ item, onPress }: MenuItemCardProps) => {
  const { Colors } = useThemeStore();

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: Colors.Background.PRIMARY }]}
      onPress={() => onPress(item.restaurantId)}
      activeOpacity={0.8}
    >
      <View style={styles.textContainer}>
        <AppText textStyles={styles.name}>{item.name}</AppText>
        <View style={styles.priceRow}>
          <AppText textStyles={styles.price}>{item.price}</AppText>
          {item.isPopular && <AppText textStyles={styles.popularTag}> • Popular</AppText>}
        </View>
        <AppText textColor={LightColors.Text.DESCRIPTION} textStyles={styles.description} numberOfLines={2}>
          {item.description}
        </AppText>
      </View>
      <Image
        source={item.restaurantImage}
        style={styles.image}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 15,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0', // Light separator line
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
  },
  popularTag: {
    fontSize: 14,
    fontWeight: '700',
  },
  description: {
    fontSize: 13,
    fontWeight: '400',
  },
  image: {
    width: 90, 
    height: 90,
    borderRadius: 8,
    ...getShadow(8)
   
  },
});

export default MenuItemCard;
