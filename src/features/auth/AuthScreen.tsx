import { View, Text } from 'react-native';
import React from 'react';
import { useThemeStore } from '../../store/themeStore';

const AuthScreen = () => {
  const { Colors } = useThemeStore();
  return (
    <View style={{ backgroundColor: Colors.Background.PRIMARY, flex: 1 }}>
      <Text>AuthScreen</Text>
    </View>
  );
};

export default AuthScreen;
