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
import { useAuthStore } from '../store/authStore';
import SignOut from '../features/auth/views/SignOut';

type CustomDrawerProps = DrawerContentComponentProps;

const DrawerContent: React.FC<CustomDrawerProps> = props => {
  const { Colors, switchTheme, isDarkMode } = useThemeStore();
  const { isGoogleSigIn } = useAuthStore();

  const insets = useSafeAreaInsets();

  console.log(isGoogleSigIn,'isGoogleSigIn');
  


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
        {!isGoogleSigIn && (
          <View style={styles.buttonContainer}>
            <SignUpOrSignIn />
          </View>
        )}
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <SignOut />

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
});

export default DrawerContent;
