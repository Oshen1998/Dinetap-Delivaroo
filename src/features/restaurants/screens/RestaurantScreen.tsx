import { StyleSheet, View } from 'react-native';
import React from 'react';
// import RestaurantMenuList from '../views/RestaurantMenuList';
import { useThemeStore } from '../../../store/themeStore';
import AppText from '../../../components/texts/AppText';
import { FONT_FAMILIES, FONT_SIZES } from '../../../constants/fonts.constants';
import RestaurantMenuList from '../views/RestaurantMenuList';
import { getShadow } from '../../../utils/shadow.util';

const RestaurantScreen = () => {
  const { Colors } = useThemeStore();

  return (
    <View
      style={[styles.container, { backgroundColor: Colors.Background.PRIMARY }]}
    >
      <View style={styles.titleContainer}>
        <AppText
          fontFamily={FONT_FAMILIES.IBMPlexSans.Medium}
          fontSize={FONT_SIZES.Title}
        >
        Our Favorite Local Restaurants
        </AppText>
      </View>
      <RestaurantMenuList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    paddingHorizontal: 15,
    paddingBottom: 5,
    marginVertical: 12,
    ...getShadow(5)
  },
});

export default RestaurantScreen;
