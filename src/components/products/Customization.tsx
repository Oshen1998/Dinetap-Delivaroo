import { StyleSheet, View } from 'react-native';
import AppText from '../texts/AppText';
import RoundedCheckbox, { RoundedCheckboxItem } from './RoundCheckBox';
import { FONT_FAMILIES, FONT_SIZES } from '../../constants/fonts.constants';

export type CustomizationOptionsProp = {
  id: number;
  options: RoundedCheckboxItem[];
  selectedOption: RoundedCheckboxItem;
  onSelect: (id: RoundedCheckboxItem) => void;
};

const CustomizationOptions = ({
  options,
  selectedOption,
  onSelect,
}: CustomizationOptionsProp) => (
  <View style={customizationStyles.container}>
    <View style={customizationStyles.header}>
      <AppText
        fontFamily={FONT_FAMILIES.IBMPlexSans.Regular}
        fontSize={FONT_SIZES.SmallTitle}
        textStyles={customizationStyles.title}
      >
        Customize you meal
      </AppText>
      <AppText
        fontFamily={FONT_FAMILIES.IBMPlexSans.Regular}
        fontSize={FONT_SIZES.Body}
        textStyles={customizationStyles.subtitle}
      >
        Required*
      </AppText>
    </View>
    <View style={customizationStyles.optionsList}>
      {options.map((option: RoundedCheckboxItem) => (
        <RoundedCheckbox
          id={option.id}
          key={option.id}
          label={option.label}
          subLabel={option.subLabel}
          price={option.price}
          isSelected={selectedOption.id === option.id}
          onClick={() => onSelect(option)}
        />
      ))}
    </View>
  </View>
);

const customizationStyles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  header: {
    marginBottom: 16,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
  optionsList: {
    marginTop: 8,
  },
});

export default CustomizationOptions;
