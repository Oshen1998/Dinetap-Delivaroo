import React, { RefObject } from 'react';
import { ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import AppText from '../../texts/AppText';
import { useThemeStore } from '../../../store/themeStore';
import { LightColors } from '../../../themes/colors';
import { getShadow } from '../../../utils/shadow.util';

interface CategoryTabsProps {
  categories: { name: string; index: number }[];
  activeCategory: number;
  onCategoryPress: (index: number) => void;
  scrollRef?: RefObject<ScrollView | null>;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  activeCategory,
  onCategoryPress,
  scrollRef,
}) => {
  const { Colors } = useThemeStore();

  return (
    <ScrollView
      ref={scrollRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[
        styles.headerScrollContent,
        { backgroundColor: Colors.Background.PRIMARY },
      ]}
    >
      {categories.map(category => (
        <TouchableOpacity
          key={category.index}
          style={[
            styles.tab,
            activeCategory === category.index && styles.activeTab,
          ]}
          onPress={() => onCategoryPress(category.index)}
        >
          <AppText
            textStyles={[
              styles.tabText,
              activeCategory === category.index && styles.activeTabText,
            ]}
          >
            {category.name}
          </AppText>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerScrollContent: {
    paddingHorizontal: 20,
    alignItems: 'center',
    height: 60,
    borderTopColor: LightColors.Border.DASHED,
    borderTopWidth: 0.4,
    marginBottom: 10,
    ...getShadow(2),
  },
  tab: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 5,
    ...getShadow(2),
  },
  activeTab: {
    backgroundColor: LightColors.Button.PRIMARY,
  },
  tabText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  activeTabText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
});
