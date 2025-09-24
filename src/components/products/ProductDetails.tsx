import { StyleSheet, View } from 'react-native';
import AppText from '../texts/AppText';
import { FONT_FAMILIES, FONT_SIZES } from '../../constants/fonts.constants';

const ProductDetails = () => (
  <View style={productDetailsStyles.container}>
    <AppText
      fontFamily={FONT_FAMILIES.IBMPlexSans.Regular}
      fontSize={FONT_SIZES.SmallTitle}
      textStyles={productDetailsStyles.title}
    >
      Parmesan Chicken Salad
    </AppText>
  </View>
);

export default ProductDetails;

const productDetailsStyles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  ratingStar: {
    fontSize: 14,
    color: '#fbbf24',
    marginRight: 4,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1f2937',
    marginRight: 8,
  },
  caloriesText: {
    fontSize: 14,
    color: '#6b7280',
  },
  descriptionText: {
    fontSize: 16,
    color: '#4b5563',
    lineHeight: 24,
  },
});
