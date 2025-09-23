// DrawerContent.tsx
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { useThemeStore } from '../store/themeStore';
import ToggleButton from '../components/buttons/ToggleButton';
import SignUpOrSignIn from '../features/auth/views/SignUpOrSignIn';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { LightColors } from '../themes/colors';
import { images } from '../themes/images';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import UserProfile from './UserProfile'; // Import the new component
import { useAuthStore } from '../store/authStore';
import AppButton from '../components/buttons/AppButton';
import { FONT_SIZES } from '../constants/fonts.constants';

type CustomDrawerProps = DrawerContentComponentProps;

const DrawerContent: React.FC<CustomDrawerProps> = props => {
  const { Colors, switchTheme, isDarkMode } = useThemeStore();
  const { user, clearUser } = useAuthStore();

  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: Colors.Background.PRIMARY,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <View style={styles.header}>
        <Image source={images.logos.appLogo} style={styles.logo} />
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Image
            source={images.icons.close}
            tintColor={Colors.Button.PRIMARY}
          />
        </TouchableOpacity>
      </View>

      <DrawerContentScrollView>
        <View style={styles.buttonContainer}>
          <SignUpOrSignIn />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {user && user.user && (
        <UserProfile
          name={user.user.name ?? ''}
          email={user.user.email ?? ''}
          photoUrl={user.user.photo ?? ''}
        />
      )}

      {user && user.user && (
        <AppButton
          text="Sign out"
          textStyles={styles.socialButton}
          textColor={Colors.Text.ACCENT}
          height={55}
          style={{
            backgroundColor: LightColors.Button.ERROR,
            ...styles.button,
          }}
          onPress={clearUser}
        />
      )}

      <View style={styles.toggleContainer}>
        <ToggleButton
          text="Change Theme"
          toggleSwitch={switchTheme}
          isEnabled={isDarkMode}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  logo: {
    width: 100,
    height: 80,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  toggleContainer: {
    marginBottom: 20,
    backgroundColor: LightColors.Background.NOTIFICATION,
    width: '92%',
    alignSelf: 'center',
    borderRadius: 8,
  },
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

export default DrawerContent;
