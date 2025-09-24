import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../../texts/AppText';
import { useThemeStore } from '../../../store/themeStore';
import { FONT_FAMILIES, FONT_SIZES } from '../../../constants/fonts.constants';
import { LightColors } from '../../../themes/colors';

export const SectionHeader = ({ title }: { title: string }) => {
  const { Colors } = useThemeStore();

  return (
    <View style={[styles.sectionHeader, { backgroundColor: Colors.Background.OFF_WHITE}]}>
      <AppText
        fontFamily={FONT_FAMILIES.IBMPlexSans.SemiBold}
        fontSize={FONT_SIZES.SmallTitle}
        textColor={Colors.Text.PRIMARY}
        textStyles={styles.sectionHeaderText}
      >
        {title}
      </AppText>
      <View style={styles.sectionDivider} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 0.2,
    borderBottomColor: LightColors.Border.DASHED,
    height: 60,
    justifyContent: 'center',
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#334155',
    textTransform: 'uppercase',
  },
  sectionDivider: {
    height: 2,
    borderRadius: 1,
    width: 60,
    marginTop: 4,
  },
});
