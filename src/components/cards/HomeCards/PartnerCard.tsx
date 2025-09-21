import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { PartnerCardProps } from '../../../constants/interface/partnerCard';
import { screenWidth } from '../../../utils/screens.util';
import { getShadow } from '../../../utils/shadow.util';
import { useThemeStore } from '../../../store/themeStore';
import AppText from '../../texts/AppText';
import { FONT_FAMILIES, FONT_SIZES } from '../../../constants/fonts.constants';
import AppButton from '../../buttons/AppButton';
import { LightColors } from '../../../themes/colors';

const PartnerCard = ({ item, onActionPress }: PartnerCardProps) => {
  const { Colors } = useThemeStore();

  return (
    <View
      style={[
        styles.cardContainer,
        { backgroundColor: Colors.Background.PRIMARY },
      ]}
    >
      <Image source={item.image} style={styles.image} resizeMode="cover" />

      <View style={styles.content}>
        <AppText
          fontSize={FONT_SIZES.MediumTitle}
          textColor={Colors.Text.PRIMARY}
          fontFamily={FONT_FAMILIES.IBMPlexSans.Regular}
          textStyles={styles.title}
        >
          {item.title}
        </AppText>

        <AppText
          fontSize={FONT_SIZES.Caption}
          textColor={Colors.Text.PRIMARY}
          fontFamily={FONT_FAMILIES.IBMPlexSans.Regular}
          textStyles={styles.description}
        >
          {item.description}
        </AppText>

        <AppButton
          style={styles.actionButton}
          textStyles={{
            fontFamily: FONT_FAMILIES.IBMPlexSans.Medium,
            ...styles.actionButtonText,
          }}
          textColor={Colors.Text.ACCENT}
          text={item.actionTitle}
          onPress={() => onActionPress(item.id)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: screenWidth * 0.9,
    alignSelf: 'center',
    borderRadius: 12,
    marginVertical: 15,
    ...getShadow(5),
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  content: {
    padding: 20,
  },
  title: {
    fontWeight: '800',
    marginBottom: 10,
  },
  description: {
    color: LightColors.Text.DESCRIPTION,
    marginBottom: 20,
    lineHeight: 24,
  },
  actionButton: {
    backgroundColor: LightColors.Button.PRIMARY,
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
    width: '60%',
    justifyContent: 'center',
  },
  actionButtonText: {
    fontWeight: '800',
  },
});

export default PartnerCard;
