import React, { useState, useRef, useMemo, useCallback } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { CategoryTabs } from './components/CategoryTabs';
import { SectionHeader } from './components/SectionHeader';
import { DishItem } from './components/DishItem';
import { bigDataset } from '../../constants';
import { ListItem } from '../../constants/interface/spyList';
import { useThemeStore } from '../../store/themeStore';

const ITEM_HEIGHT = 80;
const SECTION_HEADER_HEIGHT = 60;

const SpyFlatList = () => {
  const { Colors } = useThemeStore();
  const [activeCategory, setActiveCategory] = useState(0);
  const [isUserScrolling, setIsUserScrolling] = useState(false);

  const flatListRef = useRef<FlatList<ListItem>>(null);
  const headerScrollRef = useRef<ScrollView>(null);

  const DATA: ListItem[] = useMemo(() => {
    const items: ListItem[] = [];
    bigDataset.forEach((cat, catIndex) => {
      cat.dishes.forEach(dish => {
        items.push({
          ...dish,
          categoryIndex: catIndex,
          category: cat.categoryName,
        });
      });
    });
    return items;
  }, []);

  const categories = useMemo(
    () =>
      bigDataset.map((cat, index) => ({
        name: cat.categoryName,
        index,
        startIndex: DATA.findIndex(d => d.categoryIndex === index),
      })),
    [DATA],
  );

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (isUserScrolling) return;

      const scrollY = event.nativeEvent.contentOffset.y;
      let accumulatedHeight = 0;
      let newActiveCategory = 0;

      for (let i = 0; i < DATA.length; i++) {
        const item = DATA[i];
        const isFirstInSection =
          i === 0 || DATA[i - 1].category !== item.category;

        if (isFirstInSection) accumulatedHeight += SECTION_HEADER_HEIGHT;
        if (scrollY < accumulatedHeight) {
          newActiveCategory = item.categoryIndex;
          break;
        }
        accumulatedHeight += ITEM_HEIGHT;
      }

      if (newActiveCategory !== activeCategory) {
        setActiveCategory(newActiveCategory);
      }
    },
    [DATA, activeCategory, isUserScrolling],
  );

  const handleCategoryPress = (categoryIndex: number) => {
    const category = categories.find(c => c.index === categoryIndex);
    if (!category || !flatListRef.current) return;

    setIsUserScrolling(true);
    setActiveCategory(categoryIndex);

    flatListRef.current.scrollToIndex({
      index: category.startIndex,
      animated: true,
      viewPosition: 0.1,
    });

    setTimeout(() => setIsUserScrolling(false), 800);
  };

  const renderItem = ({ item, index }: { item: ListItem; index: number }) => {
    const isFirstInSection =
      index === 0 || DATA[index - 1].category !== item.category;

    return (
      <View>
        {isFirstInSection && <SectionHeader title={item.category} />}
        <DishItem
          name={item.dishName}
          description={item.description}
          calories={item.calories}
          price={item.price}
          currency={item.currency}
          tags="Vegan"
        />
      </View>
    );
  };

  const keyExtractor = (item: ListItem) => String(item.dishId);

  return (
    <View
      style={[styles.container, { backgroundColor: Colors.Background.PRIMARY }]}
    >
      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onCategoryPress={handleCategoryPress}
        scrollRef={headerScrollRef}
      />
      <FlatList
        ref={flatListRef}
        data={DATA}
        renderItem={renderItem}
        nestedScrollEnabled
        keyExtractor={keyExtractor}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default SpyFlatList;
