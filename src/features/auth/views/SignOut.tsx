import { StyleSheet } from 'react-native';
import React, { memo } from 'react';
import { useAuthStore } from '../../../store/authStore';
import UserProfile from '../../../navigations/UserProfile';
import AppButton from '../../../components/buttons/AppButton';
import { FONT_SIZES } from '../../../constants/fonts.constants';
import { LightColors } from '../../../themes/colors';

const SignOut = () => {
  const { user, isGoogleSigIn, clearUser } = useAuthStore();
  return (
    <>
      {user && user.user && isGoogleSigIn && (
        <>
          <UserProfile
            name={user.user.name ?? ''}
            email={user.user.email ?? ''}
            photoUrl={user.user.photo ?? ''}
          />
          <AppButton
            text="Sign out"
            textStyles={styles.socialButton}
            textColor={LightColors.Text.ACCENT}
            height={55}
            style={{
              backgroundColor: LightColors.Button.ERROR,
              ...styles.button,
            }}
            onPress={clearUser}
          />
        </>
      )}
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
    alignSelf: 'center',
  },
});

export default memo(SignOut);
