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
import { LightColors } from '../../themes/colors';

type CardType = 'discount' | 'popular';

interface BaseCardProps {
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
          <AppText textStyles={[styles.badgeText, { color: Colors.Button.BUTTON_TEXT }]}>{props.discount}</AppText>
        </View>
      )}

      <View style={styles.content}>
        <AppText textStyles={styles.title}>{props.title}</AppText>

        {props.type === 'discount' && (
          <AppText textStyles={styles.description} numberOfLines={2}>
            {props.description}
          </AppText>
        )}

        <AppText textStyles={styles.subText}>{props.calories} kcal</AppText>

        <View style={styles.footer}>
          <AppText textStyles={styles.price}>{props.price}</AppText>

          {props.type === 'discount' && props.tags && (
            <AppText textStyles={styles.tag}>{props.tags.join(' · ')}</AppText>
          )}
        </View>
      </View>

      {props.type === 'popular' && (
        <TouchableOpacity
          style={[
            styles.plusButton,
            { backgroundColor: Colors.Button.PRIMARY },
          ]}
          onPress={props.onPress}
        >
          <AppText
            textStyles={[styles.plusText, { color: Colors.Button.BUTTON_TEXT }]}
          >
            +
          </AppText>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: LightColors.SHADOW.BACKGROUND,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  discountCard: {
    borderWidth: 1,
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
    fontSize: 13,
    color: '#555',
    marginBottom: 6,
  },
  subText: {
    fontSize: 12,
    color: '#777',
    marginBottom: 4,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
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
    elevation: 2,
    shadowColor:  LightColors.SHADOW.LIGHT_BG,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  plusText: {
    fontSize: 30,
    fontWeight: '400',
  },
});

export default FoodCard;
