import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { useThemeStore } from '../store/themeStore';
import ToggleButton from '../components/buttons/ToggleButton';

type CustomDrawerProps = DrawerContentComponentProps;

const DrawerContent: React.FC<CustomDrawerProps> = props => {
  const { Colors, switchTheme, isDarkMode } = useThemeStore();

  return (
    <DrawerContentScrollView
      {...props}
      style={{ backgroundColor: Colors.Background.PRIMARY }}
    >
      <DrawerItemList {...props} />
      <ToggleButton text='Change Theme' toggleSwitch={switchTheme} isEnabled={isDarkMode} />
      {/* <DrawerItem
        labelStyle={{ color: Colors.Text.PRIMARY }}
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      /> */}
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
