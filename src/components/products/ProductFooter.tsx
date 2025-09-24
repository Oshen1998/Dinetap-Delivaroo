import { StyleSheet, TouchableOpacity, View } from 'react-native';
import AppText from '../texts/AppText';
import { useThemeStore } from '../../store/themeStore';
import { LightColors } from '../../themes/colors';
import { FONT_FAMILIES, FONT_SIZES } from '../../constants/fonts.constants';

export type ProductFooterProp = {
  quantity: number;
  onQuantityChange: (qty: number) => void;
  totalPrice?: number;
};

const ProductFooter = ({ quantity, onQuantityChange }: ProductFooterProp) => {
  const { Colors } = useThemeStore();

  return (
    <View
      style={[
        footerStyles.container,
        { backgroundColor: Colors.Background.PRIMARY },
      ]}
    >
      <View style={footerStyles.quantityControl}>
        <TouchableOpacity
          style={footerStyles.quantityButton}
          onPress={() => onQuantityChange(-1)}
          accessibilityLabel="Decrease quantity"
        >
          <AppText textStyles={footerStyles.quantityButtonText}>-</AppText>
        </TouchableOpacity>
        <View>
          <AppText textStyles={footerStyles.quantityText}>{quantity}</AppText>
        </View>
        <TouchableOpacity
          style={footerStyles.quantityButton}
          onPress={() => onQuantityChange(1)}
          accessibilityLabel="Increase quantity"
        >
          <AppText textStyles={footerStyles.quantityButtonText}>+</AppText>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={footerStyles.addButton}
        onPress={() => {}} // Add 'add to basket' logic here
        accessibilityLabel="Add item to basket"
      >
        <AppText
          fontFamily={FONT_FAMILIES.IBMPlexSans.Medium}
          fontSize={FONT_SIZES.Caption}
          textColor={Colors.Text.ACCENT}
          textStyles={footerStyles.addButtonText}
        >
          Add for £ 233.66
        </AppText>
      </TouchableOpacity>
    </View>
  );
};

const footerStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 8,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 16,
    paddingHorizontal: 10,
    width: '100%',
  },
  quantityButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e5e7eb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4b5563',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4b5563',
    width: 40,
    textAlign: 'center',
  },
  addButton: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: LightColors.Button.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductFooter;
