import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerHeaderProps,
} from '@react-navigation/drawer';
import Header, { HeaderAction } from './Header';
import { images } from '../themes/images';
import DrawerContent from './Drawer';
import { useThemeStore } from '../store/themeStore';
import RestaurantScreen from '../features/restaurants/screens/RestaurantScreen';
import { ROUTES } from '../constants/enums/navigation.enum';
import { StyleSheet } from 'react-native';
import HomeScreen from '../features/home/screens/HomeScreen';
import { screenWidth } from '../utils/screens.util';

export type DrawerParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.RESTAURANTS]: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();


export const MainHeader = (
  { navigation }: DrawerHeaderProps,
  actions: HeaderAction[],
) => {
  return (
    <Header
      logoSource={images.logos.appLogo}
      actions={actions}
      onLogoPress={() => navigation.navigate(ROUTES.HOME)}
    />
  );
};

const InitDrawerContent = (props: DrawerContentComponentProps) => (
  <DrawerContent {...props} />
);

const RootNavigation = () => {
  const { Colors } = useThemeStore();

  return (
    <Drawer.Navigator
      initialRouteName={ROUTES.HOME}
      drawerContent={props => InitDrawerContent(props)}
      screenOptions={{
        drawerStyle: {
          width: screenWidth
        },
        drawerItemStyle: {
          ...styles.drawerItem,
        },
        drawerType: 'slide',
        drawerPosition: 'right',
        header: navigation => {
          const actions = [
            ...(navigation.route.name !== ROUTES.HOME
              ? [
                  {
                    key: 'HOME',
                    icon: images.icons.home,
                    onPress: () => navigation.navigation.navigate(ROUTES.HOME),
                  },
                ]
              : []),
            {
              key: 'SIGNUP',
              icon: images.icons.person,
              onPress: () => navigation.navigation.toggleDrawer(),
            },
          ];
          return MainHeader(navigation, actions);
        },
        drawerActiveTintColor: Colors.Text.PRIMARY,
        drawerInactiveTintColor: Colors.Text.PRIMARY,
      }}
    >
      <Drawer.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Drawer.Screen name={ROUTES.RESTAURANTS} component={RestaurantScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerItem: {
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
  },
});

export default RootNavigation;