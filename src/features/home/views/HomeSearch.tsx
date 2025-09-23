import { StyleSheet, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import AppInput from '../../../components/inputs/AppInput';
import { FONT_SIZES } from '../../../constants/fonts.constants';
import { images } from '../../../themes/images';
import { LightColors } from '../../../themes/colors';
import { useThemeStore } from '../../../store/themeStore';
import { getShadow } from '../../../utils/shadow.util';
import i18n from '../../../i18n/index';
import { useDefaultHooks } from '../../../hooks/useLanguage';

type AppSearchProps = {};

const HomeSearch = ({}: AppSearchProps) => {
  const { Colors } = useThemeStore();

  const [text, changeText] = useState();

  const handleText = useCallback(() => {
    changeText(text);
  }, [text]);

  useDefaultHooks();

  return (
    <View
      style={[
        styles.mainContainer,
        { backgroundColor: Colors.Background.PRIMARY },
      ]}
    >
        <View
          style={[
            styles.container,
            { backgroundColor: Colors.Background.PRIMARY },
          ]}
        >
          <AppInput
            textOverflowMode="ellipsis"
            leftIcon={images.icons.navigate}
            showRightButton
            style={styles.appInputDeco}
            rightButtonText="Search"
            onChangeText={handleText}
            placeholder='e.g. EC4R 3TE'
            placeholderTextColor={LightColors.Text.DESCRIPTION}
            rightButtonStyle={styles.rightBtn}
            tintColor={Colors.Icon.THEME}
            rightButtonTextColor={LightColors.Text.ACCENT}
            rightButtonTextStyle={styles.rightBtnText}
            label={i18n.generic.description}
            labelStyle={styles.rightBtnLabel}
            inputWrapperStyle={styles.inputWrapper}
          />
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    maxHeight: '30%'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    width: '90%',
    height: 150,
    ...getShadow(5),
    top: 30,
  },
  appInputDeco: {
    borderRadius: 30,
    width: '63%',
    paddingHorizontal: 10,
  },
  rightBtn: {
    backgroundColor: LightColors.Button.PRIMARY,
    borderRadius: 30,
    paddingHorizontal: 10,
  },
  rightBtnText: {
    fontWeight: '600',
  },
  rightBtnLabel: {
    fontSize: FONT_SIZES.Body,
    fontWeight: '400',
  },
  inputWrapper: { borderRadius: 30 },
});

export default HomeSearch;
