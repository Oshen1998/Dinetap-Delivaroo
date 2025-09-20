import { View } from 'react-native';
import React from 'react';
import AppButton from '../../components/buttons/AppButton';
import { useThemeStore } from '../../store/themeStore';
import AppText from '../../components/texts/AppText';

const HomeScreen = () => {
  const { switchTheme, Colors } = useThemeStore();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.Background.PRIMARY,
      }}
    >
      <AppText>Home Screen</AppText>
      
      <AppButton text="Toggle Theme" onPress={switchTheme} />
    </View>
  );
};

export default HomeScreen;
