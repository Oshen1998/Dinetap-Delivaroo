import React, { useCallback } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { animations } from '../themes/animations';
import AppText from '../components/texts/AppText';
import AppButton from '../components/buttons/AppButton';
import { LightColors } from '../themes/colors';
import { FONT_FAMILIES, FONT_SIZES } from '../constants/fonts.constants';
import NetInfo from '@react-native-community/netinfo';
import { MODAL_STACK } from './modal.constants';
import { useThemeStore } from '../store/themeStore';
import { openBottomSheet } from '../utils/modal.utils';

const NoInternet = () => {
  const { Colors } = useThemeStore();
  const handleRetry = useCallback(async () => {
    const state = await NetInfo.fetch();
    if (state.isConnected) {
      setTimeout(() => {
        openBottomSheet(MODAL_STACK.NETWORK_MODAL);
      }, 5000);
    } 
  }, []);

  return (
    <View
      style={[styles.container, { backgroundColor: Colors.Background.PRIMARY }]}
      accessible
      accessibilityRole="alert"
    >
      {animations.noWifi ? (
        <LottieView
          source={animations.noWifi}
          autoPlay
          loop
          style={styles.lottie}
          resizeMode="cover"
        />
      ) : (
        <ActivityIndicator size="large" />
      )}

      <AppText
        fontFamily={FONT_FAMILIES.IBMPlexSans.Medium}
        fontSize={FONT_SIZES.Subtitle}
        textColor={Colors.Text.PRIMARY}
        textStyles={styles.title}
      >
        No Internet Connection
      </AppText>

      <AppText
        fontFamily={FONT_FAMILIES.IBMPlexSans.Medium}
        fontSize={FONT_SIZES.Body}
        textColor={Colors.Text.PRIMARY}
        textStyles={styles.description}
      >
        Please check your connection and try again.
      </AppText>

      <AppButton
        onPress={handleRetry}
        text="Retry"
        textColor={LightColors.Text.ACCENT}
        style={styles.retryButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingBottom: 15,
  },
  lottie: {
    width: 180,
    height: 180,
    marginBottom: 12,
  },
  title: {
    marginBottom: 6,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    marginBottom: 14,
  },
  retryButton: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: LightColors.Button.PRIMARY,
  },
  retryLabel: {
    color: 'white',
    fontWeight: '600',
  },
});

export default NoInternet;
