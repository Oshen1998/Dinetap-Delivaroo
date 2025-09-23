import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AppText from '../../texts/AppText';
import { useThemeStore } from '../../../store/themeStore';
import { FONT_FAMILIES, FONT_SIZES } from '../../../constants/fonts.constants';
import { getShadow } from '../../../utils/shadow.util';
import { images } from '../../../themes/images';
import { LightColors } from '../../../themes/colors';

export interface DishItemProps {
  name: string;
  price: string;
  currency: string;
  tags?: string;
  calories?: string;
  description?: string;
}

export const DishItem = ({
  name,
  price,
  currency,
  tags,
  calories,
  description,
}: DishItemProps) => {
  const { Colors } = useThemeStore();

  return (
    <View
      style={[styles.container, { backgroundColor: Colors.Background.PRIMARY }]}
    >
      <View style={styles.textContainer}>
        <AppText
          fontFamily={FONT_FAMILIES.IBMPlexSans.SemiBold}
          fontSize={FONT_SIZES.SmallTitle}
          textColor={Colors.Text.PRIMARY}
          textStyles={styles.nameText}
        >
          {name}
        </AppText>

        <AppText
          fontFamily={FONT_FAMILIES.IBMPlexSans.Regular}
          ellipsizeMode="tail"
          numberOfLines={2}
          textColor={Colors.Text.DESCRIPTION}
          textStyles={styles.descriptionText}
        >
          {description}
        </AppText>

        <AppText
          fontFamily={FONT_FAMILIES.IBMPlexSans.Regular}
          fontSize={FONT_SIZES.Body}
          textColor={Colors.Text.DESCRIPTION}
          textStyles={styles.caloriesText}
        >
          {calories}
        </AppText>

        <AppText
          fontFamily={FONT_FAMILIES.IBMPlexSans.SemiBold}
          fontSize={FONT_SIZES.Body}
          textColor={Colors.Text.DESCRIPTION}
          textStyles={styles.priceText}
        >
          {currency} {price}{' '}
          {tags && (
            <>
              <AppText
                textColor={Colors.Text.LIGHT_AMOUNT}
                textStyles={styles.dots}
              >
                •
              </AppText>{' '}
              <AppText
                fontFamily={FONT_FAMILIES.IBMPlexSans.SemiBold}
                textColor={Colors.Text.LIGHT_AMOUNT}
                textStyles={styles.tagsText}
              >
                {tags}
              </AppText>
            </>
          )}
        </AppText>
      </View>

      <View style={styles.imageWrapper}>
        <Image style={styles.dishImage} source={images.images.foods.food1} />
        <TouchableOpacity
          style={[styles.addButton, { backgroundColor: Colors.Button.ACCENT }]}
        >
          <AppText
            fontFamily={FONT_FAMILIES.IBMPlexSans.SemiBold}
            fontSize={FONT_SIZES.Title}
            textColor={Colors.Button.PRIMARY}
            textStyles={styles.plusSign}
          >
            +
          </AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 1,
    padding: 10,
    borderBottomWidth: 0.2,
    paddingHorizontal: 20,
    borderBottomColor: LightColors.Border.DASHED,
  },
  dots: { top: 4 },
  textContainer: {
    flex: 1,
    paddingRight: 16,
  },
  nameText: {
    fontSize: 20,
    fontWeight: '600',
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: '400',
    marginTop: 4,
  },
  caloriesText: {
    marginTop: 2,
  },
  priceText: {
    marginTop: 2,
    fontSize: 14,
  },
  tagsText: {
    top: 4,
  },
  imageWrapper: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  dishImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  addButton: {
    position: 'absolute',
    bottom: -10,
    right: -10,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 0.1,
    ...getShadow(6),
  },
  plusSign: {
    fontSize: 24,
    lineHeight: 24,
    marginTop: 8,
  },
});
