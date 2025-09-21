import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerHeaderProps,
} from '@react-navigation/drawer';
import HomeScreen from '../features/home/screens/HomeScreen';
import Header, { HeaderAction } from './Header';
import { images } from '../themes/images';
import DrawerContent from './Drawer';
import { useThemeStore } from '../store/themeStore';
import RestaurantScreen from '../features/restaurants/screens/RestaurantScreen';
import { ROUTES } from '../constants/enums/navigation.enum';

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
      onLogoPress={() => navigation.navigate('Home')}
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
        drawerType: 'slide',
        drawerPosition: 'right',
        header: navigation => {
          const actions = [
            {
              key: 'SIGNUP',
              icon: images.icons.drawer,
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


export default RootNavigation;
