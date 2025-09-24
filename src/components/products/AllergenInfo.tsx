import { StyleSheet, View } from 'react-native';
import AppText from '../texts/AppText';
import AppPressableText from '../texts/AppPressableText';
import { FONT_FAMILIES, FONT_SIZES } from '../../constants/fonts.constants';

const AllergenInfo = () => (
  <View style={allergenStyles.container}>
    <AppText  fontFamily={FONT_FAMILIES.IBMPlexSans.Regular}
          fontSize={FONT_SIZES.Body} textStyles={allergenStyles.subText}>
      Contains{' '}
      <AppText
        fontFamily={FONT_FAMILIES.IBMPlexSans.Medium}
        fontSize={FONT_SIZES.Body}
        textStyles={{top: 4}}
      >
        no known allergens
      </AppText>{' '}
      Questions about allergens, ingredients or cooking methods?
      <AppPressableText
        onPress={() => null}
        text="Please contact the restaurant."
      />
    </AppText>
  </View>
);

const allergenStyles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f9fafb',
    borderWidth: 0.5,
    borderColor: '#e5e7eb',
    borderRadius: 5,
    marginTop: 12,
  },
  subText: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 8,
  },
});

export default AllergenInfo;
