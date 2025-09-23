import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import RootNavigation from './RootNavigation';
import AuthScreen from '../features/auth/screens/AuthScreen';
import Header, { HeaderAction } from './Header';
import { images } from '../themes/images';
import { ROUTES } from '../constants/enums/navigation.enum';
import RestaurantCategoryScreen from '../features/restaurants/screens/RestaurantCategoryScreen';

export type StackParamsList = {
  [ROUTES.MAIN_DRAWER]: undefined;
  [ROUTES.REGISTRATION]: undefined;
  [ROUTES.CATEGORIES]: undefined;
};


const Stack = createNativeStackNavigator();

export const MainHeader = (
  { navigation }: NativeStackHeaderProps,
  actions: HeaderAction[],
) => {
  return (
    <Header
      logoSource={images.logos.appLogo}
      actions={actions}
      onLogoPress={() => navigation.navigate(ROUTES.MAIN_DRAWER)}
    />
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.MAIN_DRAWER}
        component={RootNavigation}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={ROUTES.REGISTRATION}
        component={AuthScreen}
        options={{
          headerShown: true,
          header: navigate =>
            MainHeader(navigate, [
              {
                key: 'HOME',
                icon: images.icons.home,
                onPress: () => navigate.navigation.navigate(ROUTES.MAIN_DRAWER),
              },
            ]),
        }}
      />
      <Stack.Screen
        name={ROUTES.CATEGORIES}
        component={RestaurantCategoryScreen}
        options={{
          headerShown: true,
          header: navigate =>
            MainHeader(navigate, [
              {
                key: 'HOME',
                icon: images.icons.home,
                onPress: () => navigate.navigation.navigate(ROUTES.MAIN_DRAWER),
              },
            ]),
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
