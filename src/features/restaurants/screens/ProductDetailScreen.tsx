import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ProductHeader from '../../../components/products/ProductHeader';
import ProductDetails from '../../../components/products/ProductDetails';
import AllergenInfo from '../../../components/products/AllergenInfo';
import CustomizationOptions from '../../../components/products/Customization';
import { RoundedCheckboxItem } from '../../../components/products/RoundCheckBox';
import ProductFooter from '../../../components/products/ProductFooter';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useThemeStore } from '../../../store/themeStore';

const ProductDetailsScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState<RoundedCheckboxItem>(
    {} as RoundedCheckboxItem,
  );
  const insets = useSafeAreaInsets();
  const { Colors } = useThemeStore();
  const basePrice = 10.99;

  const chickenOptions: RoundedCheckboxItem[] = [
    {
      id: 1,
      label: 'double grilled chicken thigh',
      subLabel: 'no known allergens 252 kcal',
      price: 3.49,
    },
    {
      id: 2,
      label: 'double vegan chicken',
      subLabel: 'Contains soybeans. 164 kcal',
      price: 3.49,
    },
  ];

  const handleOptionChange = (option: RoundedCheckboxItem) => {
    setSelectedOption(option);
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity + delta));
  };

  const calculateTotalPrice = () => {
    let totalPrice = basePrice;
    const selected = chickenOptions.find(opt => opt.id === selectedOption.id);
    if (selected) {
      totalPrice += selected.price;
    }
    return (totalPrice * quantity).toFixed(2);
  };

  return (
    <View
      style={[
        screenStyles.container,
        { paddingTop: insets.top, backgroundColor: Colors.Background.PRIMARY },
      ]}
    >
      {/* Scrollable content area */}
      <ScrollView
        contentContainerStyle={screenStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <ProductHeader />
        <View style={screenStyles.mainContent}>
          <ProductDetails />
          <AllergenInfo />
          <CustomizationOptions
            id={1}
            options={chickenOptions}
            selectedOption={selectedOption}
            onSelect={handleOptionChange}
          />
        </View>
      </ScrollView>

      {/* Fixed footer */}
      <ProductFooter
        quantity={quantity}
        onQuantityChange={handleQuantityChange}
        totalPrice={Number(calculateTotalPrice)}
      />
    </View>
  );
};

export default ProductDetailsScreen;

const screenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    paddingBottom: 112,
  },
  mainContent: {
    padding: 16,
    backgroundColor: '#fff',
  },
});
