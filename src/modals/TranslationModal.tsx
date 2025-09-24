import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { screenHeight, screenWidth } from '../utils/screens.util';
import { images } from '../themes/images';
import { LightColors } from '../themes/colors';
import { useThemeStore } from '../store/themeStore';
import AppText from '../components/texts/AppText';
import { FONT_FAMILIES, FONT_SIZES } from '../constants/fonts.constants';
import { useAppStore } from '../store/appStore';
import { useModal } from 'react-native-modalfy';
import { MODAL_STACK } from './modal.constants';

const TranslationModal = () => {
  const { Colors } = useThemeStore();
  const { language, setLanguage } = useAppStore();
  const {closeModal} = useModal();


  const handleSwapLanguages = (lang: string) => {
    setLanguage(lang);
    closeModal(MODAL_STACK.TRANSLATIONS);
  };



  return (
    <View
      style={[styles.container, { backgroundColor: Colors.Background.PRIMARY }]}
    >
      <AppText
        fontFamily={FONT_FAMILIES.IBMPlexSans.Medium}
        fontSize={FONT_SIZES.MediumTitle}
        textColor={Colors.Text.PRIMARY}
      >
        Choose Preferred Language
      </AppText>
      <View style={styles.content}>
        <TouchableOpacity
          style={[
            styles.languageButton,
            language === 'en' && styles.activeLanguage,
          ]}
          onPress={() => handleSwapLanguages('en')}
        >
          <AppText
            fontFamily={FONT_FAMILIES.IBMPlexSans.Medium}
            fontSize={FONT_SIZES.Caption}
            textColor={Colors.Text.PRIMARY}
            textStyles={styles.languageText}
          >
            English
          </AppText>
        </TouchableOpacity>
        <Image source={images.icons.swaps} style={styles.swapIcon} />
        <TouchableOpacity
          style={[
            styles.languageButton,
            language === 'si' && styles.activeLanguage,
          ]}
          onPress={() => handleSwapLanguages('si')}
        >
          <AppText
            fontFamily={FONT_FAMILIES.IBMPlexSans.Medium}
            fontSize={FONT_SIZES.Caption}
            textColor={Colors.Text.PRIMARY}
            textStyles={styles.languageText}
          >
            සිංහල
          </AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: screenHeight * 0.2,
    width: screenWidth,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  languageButton: {
    paddingVertical: 15,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
    width: '40%',
  },
  activeLanguage: {
    backgroundColor: LightColors.Button.PRIMARY,
  },
  languageText: {
    alignSelf: 'center',
  },
  swapIcon: {
    transform: [
      {
        rotate: '0deg',
      },
    ],
    marginVertical: 15,
  },
  iconContainer: {
    alignSelf: 'center',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginVertical: 35,
  },
});

export default TranslationModal;
