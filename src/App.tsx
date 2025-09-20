import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LightColors } from './themes/colors';
import { API_URL } from '@env';
import AppText from './components/texts/AppText';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <AppText textAlign="center" textStyles={{ textAlign: 'center' }}>
          Hello Generated artifact:
          /Users/Oshen/Documents/Delivaroo/DelivarooClone/ios/build/generated/ios/RCTAppDependencyProvide
        </AppText>
        <AppText>{API_URL}</AppText>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: LightColors.Background.THEME,
    paddingHorizontal: 10,
  },
});

export default App;
