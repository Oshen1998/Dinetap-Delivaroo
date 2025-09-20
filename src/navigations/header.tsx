import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import { useThemeStore } from '../store/themeStore';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import IconButton from '../components/buttons/IconButton';

export interface HeaderAction {
  key: string;
  icon?: ImageSourcePropType;
  text?: string;
  onPress: () => void;
  disabled?: boolean;
  style?: object;
  iconStyle?: object;
  textStyle?: object;
}

interface HeaderProps {
  logoSource?: ImageSourcePropType;
  onLogoPress?: () => void;
  title?: string;
  actions?: HeaderAction[];
  backgroundColor?: string;
  titleColor?: string;
  height?: number;
  showShadow?: boolean;
}

const Header = ({
  logoSource,
  onLogoPress,
  actions = [],
  height = 60,
}: HeaderProps) => {
  const { Colors } = useThemeStore();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        backgroundColor: Colors.Background.PRIMARY,
        paddingTop: insets.top,
      }}
    >
      <View
        style={[
          styles.container,
          {
            height,
          },
        ]}
      >
        <View style={styles.leftSection}>
          <TouchableOpacity style={styles.logoContainer} onPress={onLogoPress}>
            {logoSource && (
              <Image
                source={logoSource}
                style={styles.logo}
                resizeMode="contain"
              />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.rightSection}>
          {actions.map((action, index) => (
            <IconButton
              key={action.key || index}
              customIcon={action.icon}
              onPress={action.onPress}
              borderColor={Colors.Border.PRIMARY}
              borderRadius={8}
              borderWidth={1}
              iconTintColor={Colors.Icon.THEME}
              iconStyle={styles.iconStyle}
              style={styles.iconWidth}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#e0e0e0',
  },
  leftSection: {
    flex: 2,
    justifyContent: 'center',
  },
  logoContainer: {
    padding: 8,
    borderRadius: 8,
  },
  logo: {
    width: 120,
    height: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 15,
    flex: 1,
  },
  iconButtons: {
    borderWidth: 1,
    borderRadius: 8,
  },
  iconStyle: {
    height: 20,
    width: 20,
  },
  iconWidth: { width: '40%' },
});

export default Header;
