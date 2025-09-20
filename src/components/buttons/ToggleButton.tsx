import { StyleSheet, Switch, View } from 'react-native';
import React, { memo } from 'react';
import { FONT_SIZES } from '../../constants/fonts.constants';
import { useThemeStore } from '../../store/themeStore';
import AppText from '../texts/AppText';

type AppSwitchProps = {
  isEnabled: boolean;
  toggleSwitch: () => void;
  text: string;
};

const ToggleButton = ({
  isEnabled,
  toggleSwitch,
  text = 'Toggle Theme',
}: AppSwitchProps) => {
  const { Colors } = useThemeStore();

  return (
    <View style={styles.container}>
      <AppText fontSize={FONT_SIZES.Body} textStyles={styles.textStyles}>
        {text}
      </AppText>
      <Switch
        trackColor={{ false: Colors.Toggle.ON , true:  Colors.Toggle.ON }}
        thumbColor={isEnabled ? Colors.Button.PRIMARY : Colors.Toggle.KNOB}
        ios_backgroundColor={Colors.Toggle.OFF}
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{ transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }] }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  textStyles: {
    fontWeight: '500',
  },
});

export default memo(ToggleButton);
