import { StyleSheet, TouchableOpacity, View } from 'react-native';
import AppText from '../texts/AppText';

export type RoundedCheckboxProp = {
  id: number;
  label: string;
  subLabel?: string;
  price?: number;
  isSelected: boolean;
  onClick: (id: number) => void;
};

export type RoundedCheckboxItem = {
  id: number;
  label: string;
  subLabel?: string;
  price: number;
};

const RoundedCheckbox = ({
  id,
  label,
  subLabel,
  isSelected,
  onClick,
}: RoundedCheckboxProp) => (
  <TouchableOpacity
    style={[checkboxStyles.container, isSelected && checkboxStyles.selected]}
    onPress={() => onClick?.(id)}
  >
    <View style={checkboxStyles.textContainer}>
      <AppText textStyles={checkboxStyles.label}>{label}</AppText>
      {subLabel && (
        <AppText textStyles={checkboxStyles.subLabel}>{subLabel}</AppText>
      )}
    </View>
    <View style={checkboxStyles.rightContainer}>
      {/* <AppText textStyles={checkboxStyles.price}>+£{price.toFixed(2)}</AppText> */}
      <View
        style={[
          checkboxStyles.outerCircle,
          isSelected && checkboxStyles.outerCircleSelected,
        ]}
      >
        {isSelected && <View style={checkboxStyles.innerCircle} />}
      </View>
    </View>
  </TouchableOpacity>
);

const checkboxStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
  },
  selected: {
    borderColor: '#3b82f6',
    backgroundColor: '#eff6ff',
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1f2937',
  },
  subLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4b5563',
    marginRight: 8,
  },
  outerCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#d1d5db',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerCircleSelected: {
    borderColor: '#3b82f6',
  },
  innerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#3b82f6',
  },
});

export default RoundedCheckbox;
