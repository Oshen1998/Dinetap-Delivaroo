import { StyleSheet } from 'react-native';
import React from 'react';
import AppButton from '../../../components/buttons/AppButton';
import { useThemeStore } from '../../../store/themeStore';
import { FONT_SIZES } from '../../../constants/fonts.constants';
import { LightColors } from '../../../themes/colors';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../constants/enums/navigation.enum';
import { useAuthStore } from '../../../store/authStore';
import { MODAL_STACK } from '../../../modals/modal.constants';
import { useModal } from 'react-native-modalfy';

const SignUpOrSignIn = () => {
  const { Colors } = useThemeStore();
  const { navigate } = useNavigation();
  const { openModal, closeModal } = useModal();

  /**
   * This approach is not ideal for a showcase.
   */
  const { loginUser } = useAuthStore();

  const onPressSignUp = async () => {
    openModal(MODAL_STACK.LOADING, {
      title: 'Just a moment...',
      description: 'Verifying your details. Thanks for your patience!',
    });
    const response = await loginUser();
    if (response.accessToken) navigate(ROUTES.REGISTRATION as never);

    setTimeout(() => {
      closeModal(MODAL_STACK.LOADING);
    }, 1000);
  };

  return (
    <>
      <AppButton
        text="Sign Up or Log In"
        textStyles={styles.socialButton}
        textColor={Colors.Text.ACCENT}
        height={55}
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
    width: '95%',
    marginVertical: 10,
  },
});

export default SignUpOrSignIn;
