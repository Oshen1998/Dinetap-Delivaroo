import React, { memo } from 'react';
import { View, StyleSheet, ColorValue } from 'react-native';
import { LightColors } from '../../themes/colors';

type HorizontalLineProp = {
  color?: ColorValue;
};

const HorizontalLine = ({ color }: HorizontalLineProp) => {
  return (
    <View
      style={[
        styles.line,
        { borderBottomColor: color ?? LightColors.Border.DASHED },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: '100%',
  },
});

export default memo(HorizontalLine);
