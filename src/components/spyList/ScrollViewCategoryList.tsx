import React, { useState, useRef, useMemo, useEffect } from 'react';
import {
  View,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Image,
  TouchableOpacity,
  LayoutChangeEvent,
  StyleSheet,
  ImageSourcePropType,
  Alert,
} from 'react-native';
import { CategoryTabs } from './components/CategoryTabs';
import { SectionHeader } from './components/SectionHeader';
import { DishItem } from './components/DishItem';
import { useThemeStore } from '../../store/themeStore';
import AppText from '../texts/AppText';
import { FONT_FAMILIES, FONT_SIZES } from '../../constants/fonts.constants';
import { getShadow } from '../../utils/shadow.util';
import { LightColors } from '../../themes/colors';
import { images } from '../../themes/images';
import { Category } from '../../constants/interface/spyList';
import useRestaurantStore from '../../store/restaurantStore';
import { generateRandomNumber, titleCase } from '../../utils';
import { screenWidth } from '../../utils/screens.util';
import HorizontalScrollList from '../cards/horizontalList/HorizontalScrollList';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constants/enums/navigation.enum';

export interface ScrollViewCategoryList {
  name: string;
  distance: string;
  openTime: string;
  openDay: string;
  minimumOrder: string;
  deliveryFee: string;
  rating: number;
  reviewCount: number;
  restaurantImage: ImageSourcePropType;
}

export interface ScrollViewCategoryListProps {
  restaurantData: ScrollViewCategoryList;
  dateSet: Category[];
  onBack?: () => void;
  onStartGroupOrder: () => void;
  onChangeDelivery?: () => void;
}

const ScrollViewCategoryList = ({
  restaurantData,
  onBack,
  onChangeDelivery,
  onStartGroupOrder,
}: ScrollViewCategoryListProps) => {
  const { Colors } = useThemeStore();
  const { navigate } = useNavigation();
  const { categories } = useRestaurantStore();
  const [activeCategory, setActiveCategory] = useState(0);
  const [sectionOffsets, setSectionOffsets] = useState<number[]>([]);

  const scrollRef = useRef<ScrollView>(null);
  const tabsScrollRef = useRef<ScrollView>(null);

  const {
    name,
    distance,
    openTime,
    openDay,
    minimumOrder,
    deliveryFee,
    rating,
    reviewCount,
    restaurantImage,
  } = restaurantData;

  useEffect(() => {
    if (!tabsScrollRef.current) return;

    const tabWidth = 120;
    const screenCenter = screenWidth / 2;

    const offset = activeCategory * tabWidth - screenCenter + tabWidth / 2;

    tabsScrollRef.current.scrollTo({ x: Math.max(0, offset), animated: true });
  }, [activeCategory]);

  const formattedCategories = useMemo(
    () =>
      categories.map((cat, index) => ({
        name: cat.categoryName,
        index,
      })),
    [categories],
  );

  const handleSectionLayout = (index: number, event: LayoutChangeEvent) => {
    const { y } = event.nativeEvent.layout;
    setSectionOffsets(prev => {
      const copy = [...prev];
      copy[index] = y;
      return copy;
    });
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    for (let i = 0; i < sectionOffsets.length; i++) {
      const nextOffset = sectionOffsets[i + 1] ?? Infinity;
      if (scrollY >= sectionOffsets[i] - 80 && scrollY < nextOffset - 80) {
        if (activeCategory !== i) {
          setActiveCategory(i);
        }
        break;
      }
    }
  };

  const handleCategoryPress = (categoryIndex: number) => {
    if (scrollRef.current && sectionOffsets[categoryIndex] != null) {
      scrollRef.current.scrollTo({
        y: sectionOffsets[categoryIndex] + 500,
        animated: true,
      });
      setActiveCategory(categoryIndex);
    }
  };

  const handleOnPressItem = (id: number) => {
    Alert.alert(`Selected Dish Id ${id}`);
    navigate(ROUTES.PRODUCT as never);
  };

  return (
    <ScrollView
      ref={scrollRef}
      nestedScrollEnabled
      stickyHeaderIndices={[5]}
      onScroll={handleScroll}
      contentContainerStyle={{ backgroundColor: Colors.Background.PRIMARY }}
      scrollEventThrottle={16}
    >
      {/* Fixed Header Section */}
      <View style={styles.headerContainer}>
        <View style={styles.heroSection}>
          <Image source={restaurantImage} style={styles.heroImage} />

          {/* Back Button */}
          <TouchableOpacity style={styles.backButton} onPress={onBack}>
            <AppText
              fontFamily={FONT_FAMILIES.IBMPlexSans.SemiBold}
              fontSize={FONT_SIZES.MediumTitle}
              textStyles={styles.backButtonText}
              textColor={Colors.Button.PRIMARY}
            >
              ←
            </AppText>
          </TouchableOpacity>

          {/* Group Order Button */}
          <TouchableOpacity
            style={[
              styles.groupOrderButton,
              { backgroundColor: Colors.Background.PRIMARY },
            ]}
            onPress={onStartGroupOrder}
          >
            <AppText textStyles={styles.groupOrderIcon}>👥</AppText>
            <AppText
              fontFamily={FONT_FAMILIES.IBMPlexSans.Regular}
              fontSize={FONT_SIZES.Caption}
              textColor={Colors.Text.PRIMARY}
            >
              Start group order
            </AppText>
          </TouchableOpacity>
        </View>

        {/* Restaurant Info */}
        <View
          style={[
            styles.restaurantInfo,
            { backgroundColor: Colors.Background.PRIMARY },
          ]}
        >
          <AppText
            fontSize={FONT_SIZES.Title}
            textStyles={styles.restaurantName}
          >
            {name}
          </AppText>
          <AppText
            textStyles={styles.categoriesText}
            fontFamily={FONT_FAMILIES.IBMPlexSans.Regular}
            fontSize={FONT_SIZES.Body}
          >
            10 - 20 min {' · '}
            {[
              { name: 'Salad' },
              { name: 'Healthy' },
              { name: 'Delicious' },
              { name: 'Vegan' },
            ]
              .slice(0, generateRandomNumber(1, 4))
              .map(c => c.name)
              .join(' · ')}
          </AppText>
          <AppText
            textStyles={styles.categoriesText}
            textColor={Colors.Text.DESCRIPTION}
            fontFamily={FONT_FAMILIES.IBMPlexSans.Medium}
            fontSize={FONT_SIZES.Body}
          >
            {distance} · Opens at {openTime} on {openDay} · {minimumOrder}{' '}
            minimum · {deliveryFee} delivery
          </AppText>
        </View>
      </View>

      {/* Info Section */}
      <TouchableOpacity style={styles.infoRow}>
        <View style={styles.infoIcon}>
          <Image source={images.icons.info} />
        </View>
        <View style={styles.infoTextContainer}>
          <AppText
            fontFamily={FONT_FAMILIES.IBMPlexSans.Regular}
            fontSize={FONT_SIZES.Body}
            textStyles={styles.infoTitle}
          >
            Info
          </AppText>
          <AppText
            fontFamily={FONT_FAMILIES.IBMPlexSans.Regular}
            fontSize={FONT_SIZES.Body}
            textStyles={styles.infoTitle}
          >
            Map, allergens and hygiene rating
          </AppText>
        </View>
        <Image
          source={images.icons.expand_arrow}
          tintColor={LightColors.Button.PRIMARY}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.infoRow}>
        <View style={styles.ratingIcon}>
          <Image
            source={images.icons.star}
            tintColor={LightColors.Text.AVACADO}
          />
        </View>
        <View style={styles.infoTextContainer}>
          <AppText
            textStyles={styles.ratingText}
            textColor={LightColors.Text.AVACADO}
          >
            {rating} Excellent
          </AppText>
          <AppText textStyles={styles.reviewText}>
            See all {reviewCount} reviews
          </AppText>
        </View>
        <Image
          source={images.icons.expand_arrow}
          tintColor={LightColors.Button.PRIMARY}
        />
      </TouchableOpacity>

      <View style={styles.infoRow}>
        <View style={styles.deliveryIcon}>
          <Image source={images.icons.bike} style={styles.deliveryIconText} />
        </View>
        <View style={styles.infoTextContainer}>
          <AppText
            fontFamily={FONT_FAMILIES.IBMPlexSans.Regular}
            fontSize={FONT_SIZES.Caption}
          >
            Deliver in 10 - 20 min
          </AppText>
        </View>
        <TouchableOpacity onPress={onChangeDelivery}>
          <AppText
            textColor={LightColors.Button.PRIMARY}
            fontFamily={FONT_FAMILIES.IBMPlexSans.Medium}
            fontSize={FONT_SIZES.Caption}
          >
            Change
          </AppText>
        </TouchableOpacity>
      </View>

      <View>
        <HorizontalScrollList />
      </View>

      <View>
        <CategoryTabs
          categories={formattedCategories}
          activeCategory={activeCategory}
          onCategoryPress={handleCategoryPress}
          scrollRef={tabsScrollRef}
        />
      </View>

      <View
        style={[
          styles.flatListItem,
          { backgroundColor: Colors.Background.PRIMARY },
        ]}
      >
        {categories.map((category, catIndex) => (
          <View key={catIndex} onLayout={e => handleSectionLayout(catIndex, e)}>
            <SectionHeader title={category.categoryName} />
            {category.dishes.map((dish, dishIndex) => (
              <DishItem
                id={Number(dish.dishId)}
                key={dishIndex}
                name={dish.dishName}
                description={dish.description}
                calories={dish.calories}
                price={dish.price}
                onPressItem={handleOnPressItem}
                currency={dish.currency}
                image={dish.image}
                tags={titleCase(dish?.tags || '')}
              />
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  heroSection: {
    position: 'relative',
    height: 200,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: '#fff',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  backButtonText: {
    fontSize: 20,
    color: '#333',
  },
  groupOrderButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    ...getShadow(2),
  },
  groupOrderIcon: {
    marginRight: 8,
    fontSize: 16,
  },

  restaurantInfo: {
    padding: 16,
  },
  restaurantName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  categoriesText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  details: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 0.2,
    borderBottomColor: '#f0f0f0',
  },
  infoIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  ratingIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  star: {
    fontSize: 16,
  },
  deliveryIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  deliveryIconText: {
    height: 25,
    width: 25,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 2,
  },
  infoSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  ratingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4caf50',
    marginBottom: 2,
  },
  reviewText: {
    fontSize: 14,
    color: '#666',
  },
  chevron: {
    fontSize: 24,
    color: '#ccc',
  },

  flatListItem: { marginTop: -15 },
});

export default ScrollViewCategoryList;
