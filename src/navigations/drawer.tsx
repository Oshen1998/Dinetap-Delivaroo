import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { useThemeStore } from '../store/themeStore';
import ToggleButton from '../components/buttons/ToggleButton';
import SignUpOrSignIn from '../features/auth/views/SignUpOrSignIn';
import { StyleSheet, View } from 'react-native';

type CustomDrawerProps = DrawerContentComponentProps;

const DrawerContent: React.FC<CustomDrawerProps> = props => {
  const { Colors, switchTheme, isDarkMode } = useThemeStore();

  return (
    <DrawerContentScrollView
      {...props}
      style={{ backgroundColor: Colors.Background.PRIMARY }}
    >
      <DrawerItemList {...props} />
      <ToggleButton
        text="Change Theme"
        toggleSwitch={switchTheme}
        isEnabled={isDarkMode}
      />
      <View style={styles.buttonContainer}>
        <SignUpOrSignIn />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'center',
  },
});

export default DrawerContent;
