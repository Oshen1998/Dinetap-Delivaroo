import { ColorValue, DimensionValue, StyleSheet, View } from 'react-native';
import React from 'react';
import AppText from '../texts/AppText';
import { FONT_SIZES } from '../../constants/fonts.constants';

type TextWithSeparatorProps = {
  text: string;
  textColor?: ColorValue;
  separatorsColor?: ColorValue;
  width: DimensionValue;
  top: DimensionValue;
};

const TextWithSeparator = ({
  text = 'Or',
  width = '100%',
  textColor,
  top = 10,
  separatorsColor,
}: TextWithSeparatorProps) => {
  return (
    <View style={[styles.container, { width: width, top: top }]}>
      <View style={styles.col}>
        <View style={[styles.ColItem, { backgroundColor: separatorsColor }]} />
      </View>
      <View style={styles.center}>
        <AppText
          textAlign="center"
          textColor={textColor}
          fontSize={FONT_SIZES.Body}
        >
          {text}
        </AppText>
      </View>
      <View style={styles.col}>
        <View style={[styles.ColItem, { backgroundColor: separatorsColor }]} />
      </View>
    </View>
  );
};

export default TextWithSeparator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    top: 10,
  },
  col: {
    flex: 3,
    flexDirection: 'column',
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ColItem: {
    flexDirection: 'row',
    height: 1,
    width: '100%',
  },
  center: {
    flex: 1,
    flexDirection: 'column',
    height: '5%',
  },
});
