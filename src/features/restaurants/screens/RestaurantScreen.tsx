import { StyleSheet, View } from 'react-native';
import React from 'react';
import RestaurantMenuList from '../views/RestaurantMenuList';
import { useThemeStore } from '../../../store/themeStore';
import AppText from '../../../components/texts/AppText';
import { FONT_FAMILIES, FONT_SIZES } from '../../../constants/fonts.constants';

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
          Explore today's and choose your perfect meal.
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
    marginVertical: 10,
  },
});

export default RestaurantScreen;
