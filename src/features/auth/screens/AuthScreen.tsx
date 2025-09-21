import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useCallback } from 'react';
import { useThemeStore } from '../../../store/themeStore';
import AppButton from '../../../components/buttons/AppButton';
import { LightColors } from '../../../themes/colors';
import { FONT_FAMILIES, FONT_SIZES } from '../../../constants/fonts.constants';
import { images } from '../../../themes/images';
import AppText from '../../../components/texts/AppText';
import TextWithSeparator from '../../../components/horizontalLine/TextWithSeparator';
import AppPressableText from '../../../components/texts/AppPressableText';

const AuthScreen = () => {
  const { Colors } = useThemeStore();

  const onPressGoogle = useCallback(() => {}, []);

  return (
    <View
      style={[styles.container, { backgroundColor: Colors.Background.PRIMARY }]}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        scrollEnabled
      >
        <React.Fragment>
          <AppText
            textAlign="left"
            fontFamily={FONT_FAMILIES.IBMPlexSans.SemiBold}
            fontSize={FONT_SIZES.Subtitle}
            containerStyles={styles.title}
          >
            Sign up or log in
          </AppText>
          <AppButton
            text="Continue with Facebook"
            customIcon={images.icons.socialLogins.facebook}
            iconTintColor={LightColors.Icon.ACCENT}
            iconStyle={styles.icon}
            isStart={false}
            isNear
            textStyles={styles.socialButton}
            textColor={Colors.Text.ACCENT}
            style={{
              backgroundColor: Colors.Button.FACEBOOK,
              ...styles.button,
            }}
            onPress={onPressGoogle}
          />
          <AppButton
            text="Continue with Google"
            customIcon={images.icons.socialLogins.google}
            iconStyle={styles.icon}
            isStart={false}
            isNear
            textStyles={styles.socialButton}
            textColor={LightColors.Text.PRIMARY}
            style={{
              backgroundColor: LightColors.Button.ACCENT,
              ...styles.googleButton,
            }}
            onPress={onPressGoogle}
          />
          <AppButton
            text="Continue with Apple"
            customIcon={images.icons.socialLogins.apple}
            iconTintColor={Colors.Icon.ACCENT}
            iconStyle={styles.icon}
            isStart={false}
            isNear
            textStyles={styles.socialButton}
            textColor={Colors.Text.ACCENT}
            style={{
              backgroundColor: LightColors.Button.BLACK,
              ...styles.button,
            }}
            onPress={onPressGoogle}
          />
          <>
            <TextWithSeparator
              separatorsColor={Colors.Border.DASHED}
              width="90%"
              text="Or"
              top={10}
            />
            <View style={styles.emailWrapper}>
              <AppButton
                text="Continue with Email"
                customIcon={images.icons.email}
                iconTintColor={Colors.Icon.ACCENT}
                iconStyle={styles.icon}
                isStart={false}
                isNear
                textStyles={styles.socialButton}
                textColor={Colors.Text.ACCENT}
                style={{
                  backgroundColor: LightColors.Background.THEME,
                  ...styles.button,
                }}
                onPress={onPressGoogle}
              />
              <AppText
                containerStyles={styles.textContentWrapper}
                textAlign="center"
              >
                By continuing you agree to our{' '} <AppPressableText text="T&C" />.
                Please also check out our{' '}
                <AppPressableText text="Privacy Policy" />. We use your data to
                offer you a personalized experience and to better understand and
                improve our services.{' '}
                <AppPressableText text="For more information see here." />
              </AppText>
            </View>
          </>
        </React.Fragment>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    top: 80,
  },
  title: {
    width: '90%',
    marginVertical: 10,
  },
  button: {
    width: '90%',
    marginVertical: 10,
  },
  socialButton: {
    fontWeight: '700',
    fontSize: FONT_SIZES.HeroTitle,
  },
  icon: {
    height: 20,
    width: 20,
    marginHorizontal: 10,
  },
  googleButton: {
    borderWidth: 1,
    width: '90%',
    marginVertical: 10,
  },
  separatorContainer: {
    flex: 1,
    width: '90%',
    height: 80,
    backgroundColor: 'red',
    top: 25,
    maxHeight: 80,
  },
  emailWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 280,
    width: '100%',
  },
  textContentWrapper: {
    width: '90%',
    marginTop: 10,
  },
});

export default AuthScreen;
