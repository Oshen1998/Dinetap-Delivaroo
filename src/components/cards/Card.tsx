import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import AppText from '../texts/AppText';
import { useThemeStore } from '../../store/themeStore';
import { getShadow } from '../../utils/shadow.util';
import { FONT_FAMILIES } from '../../constants/fonts.constants';
import { images } from '../../themes/images';

export type CardType = 'discount' | 'popular';

interface BaseCardProps {
  id: number;
  type: CardType;
  title: string;
  image: string;
  calories: number;
  price: string;
  style?: ViewStyle;
  onPress?: () => void;
}

interface DiscountCardProps extends BaseCardProps {
  type: 'discount';
  discount: string;
  description: string;
  tags?: string[];
}

interface PopularCardProps extends BaseCardProps {
  type: 'popular';
}

type CardProps = DiscountCardProps | PopularCardProps;

const FoodCard = (props: CardProps) => {
  const { Colors } = useThemeStore();

  return (
    <TouchableOpacity
      style={[
        props?.style,
        styles.card,
        props.type === 'discount' && styles.discountCard,
        { backgroundColor: Colors.Background.PRIMARY },
      ]}
      activeOpacity={0.9}
      onPress={props.onPress}
    >
      <Image source={{ uri: props.image }} style={styles.image} />

      {/* Discount Badge */}
      {props.type === 'discount' && (
        <View style={styles.badge}>
          <AppText
            textStyles={[
              styles.badgeText,
              { color: Colors.Button.BUTTON_TEXT },
            ]}
          >
            {props.discount}
          </AppText>
        </View>
      )}

      <View style={styles.content}>
        <AppText textStyles={styles.title} numberOfLines={1}>
          {props.title}
        </AppText>

        {/* {props.type === 'discount' && (
          <AppText
            textColor={Colors.Text.DESCRIPTION}
            fontFamily={FONT_FAMILIES.IBMPlexSans.Regular}
            textStyles={styles.description}
            numberOfLines={2}
          >
            {props.description}
          </AppText>
        )} */}

        <AppText
          textColor={Colors.Text.DESCRIPTION}
          fontFamily={FONT_FAMILIES.IBMPlexSans.Regular}
          textStyles={styles.description}
        >
          {props.calories} kcal
        </AppText>

        <View style={styles.footer}>
          <AppText
            textColor={Colors.Text.DESCRIPTION}
            fontFamily={FONT_FAMILIES.IBMPlexSans.Regular}
            textStyles={styles.description}
          >
            {props.price}
          </AppText>

          {props.type === 'discount' && props.tags && (
            <AppText textStyles={styles.tag}>{props.tags.join(' · ')}</AppText>
          )}
        </View>
      </View>

      <TouchableOpacity
        style={[styles.plusButton, { backgroundColor: Colors.Button.ACCENT }]}
        onPress={props.onPress}
      >
        <Image
          source={images.icons.add}
          style={styles.icon}
          tintColor={Colors.Button.BUTTON_TEXT}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: '#eee',
    ...getShadow(5),
  },
  discountCard: {
    borderWidth: 0.5,
    borderColor: '#eee',
  },
  image: {
    width: '100%',
    height: 140,
  },
  badge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'red',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  badgeText: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  content: {
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    marginBottom: 6,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  tag: {
    fontSize: 13,
    color: 'green',
    paddingHorizontal: 6,
  },
  plusButton: {
    position: 'absolute',
    bottom: 75,
    right: 5,
    borderRadius: 20,
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    ...getShadow(2)
  },
  plusText: {
    fontSize: 30,
    fontWeight: '400',
  },
  icon: { height: 30, width: 30 },
});

export default FoodCard;
