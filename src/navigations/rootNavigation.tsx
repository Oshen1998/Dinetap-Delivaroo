import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerHeaderProps,
} from '@react-navigation/drawer';
import HomeScreen from '../features/home/HomeScreen';
import AuthScreen from '../features/auth/AuthScreen';
import Header, { HeaderAction } from './header';
import { images } from '../themes/images';
import DrawerContent from './drawer';
import { useNavigation } from '@react-navigation/native';
import { useThemeStore } from '../store/themeStore';

export type DrawerParamList = {
  Home: undefined;
  Account: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const InitialHeader = (
  navigation: DrawerHeaderProps,
  actions: HeaderAction[],
) => (
  <Header
    logoSource={images.logos.appLogo}
    onLogoPress={() => navigation.navigation.toggleDrawer()}
    actions={actions}
  />
);

const InitDrawerContent = (props: DrawerContentComponentProps) => (
  <DrawerContent {...props} />
);

const RootNavigation = () => {

  const {Colors} = useThemeStore();
  const nav = useNavigation();

  const actions = [
    {
      key: 'call',
      icon: images.icons.home,
      onPress: () => nav.navigate('Home' as never),
    },
    {
      key: 'video',
      icon: images.icons.person,
      onPress: () => nav.navigate('Account' as never),
    },
  ];

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => InitDrawerContent(props)}
      screenOptions={{
        drawerType: 'slide',
        header: navigation => InitialHeader(navigation, actions),
        drawerActiveTintColor: Colors.Text.PRIMARY, 
        drawerInactiveTintColor: Colors.Text.PRIMARY, 
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Account" component={AuthScreen} />
    </Drawer.Navigator>
  );
};

export default RootNavigation;
