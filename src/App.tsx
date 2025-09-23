import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigations/Stack';
import { StyleSheet } from 'react-native';
import { ModalProvider } from 'react-native-modalfy';
import { ModalStack } from './modals';
import GlobalConfigs from './configs/globalConfigs';

function App() {
  return (
    <GestureHandlerRootView style={style.container}>
      <SafeAreaProvider>
        <NavigationContainer>
          <ModalProvider stack={ModalStack}>
            <AppNavigator />
            <GlobalConfigs />
          </ModalProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
