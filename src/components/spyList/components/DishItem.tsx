import React, { useCallback } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import AppText from '../../texts/AppText';
import { useThemeStore } from '../../../store/themeStore';
import { FONT_FAMILIES, FONT_SIZES } from '../../../constants/fonts.constants';
import { getShadow } from '../../../utils/shadow.util';
import { LightColors } from '../../../themes/colors';
import { images } from '../../../themes/images';

export interface DishItemProps {
  id: number;
  name: string;
  price: string;
  image: ImageSourcePropType;
  currency: string;
  tags?: string;
  calories?: string;
  description?: string;
  onPressItem: (id: number) => void;
}

export const DishItem = ({
  id,
  name,
  price,
  currency,
  image,
  onPressItem,
  tags,
  calories,
  description,
}: DishItemProps) => {
  const { Colors } = useThemeStore();

  const handleItemPress = useCallback(
    (selectedId: number) => {
      onPressItem?.(selectedId);
    },
    [onPressItem],
  );


  return (
    <View
      style={[{ backgroundColor: Colors.Background.PRIMARY }]}
    >
      <TouchableOpacity style={styles.container} onPress={() => handleItemPress(id)}>
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
          <Image style={styles.dishImage} source={image} />
          <TouchableOpacity
            style={[
              styles.addButton,
              { backgroundColor: Colors.Background.PRIMARY },
            ]}
          >
            <Image tintColor={LightColors.Button.PRIMARY}  source={images.icons.add} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
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
