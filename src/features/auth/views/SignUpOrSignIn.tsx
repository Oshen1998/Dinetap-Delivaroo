import { StyleSheet} from 'react-native';
import React from 'react';
import AppButton from '../../../components/buttons/AppButton';
import { useThemeStore } from '../../../store/themeStore';
import { FONT_SIZES } from '../../../constants/fonts.constants';
import { LightColors } from '../../../themes/colors';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../constants/enums/navigation.enum';

const SignUpOrSignIn = () => {
  const { Colors } = useThemeStore();
  const { navigate } = useNavigation();

  const onPressSignUp = () => {
    navigate(ROUTES.REGISTRATION as never);
  };

  return (
    <>
      <AppButton
        text="Sign Up or Log In"
        iconTintColor={Colors.Icon.ACCENT}
        textStyles={styles.socialButton}
        textColor={Colors.Text.ACCENT}
        style={{
          backgroundColor: LightColors.Background.THEME,
          ...styles.button,
        }}
        onPress={onPressSignUp}
      />
    </>
  );
};

const styles = StyleSheet.create({
  socialButton: {
    fontWeight: '700',
    fontSize: FONT_SIZES.HeroTitle,
  },
  button: {
    width: '90%',
    marginVertical: 10,
  },
});

export default SignUpOrSignIn;
