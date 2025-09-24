import { TouchableOpacity, StyleSheet } from 'react-native';
import React, { memo } from 'react';
import AppText from './AppText';
import { LightColors } from '../../themes/colors';

type AppPressableTextProps = {
  onPress?: () => void;
  text: string;
};

const AppPressableText = ({ onPress, text }: AppPressableTextProps) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <AppText
          textColor={LightColors.Border.THEME}
          textStyles={styles.textStyle}
        >
          {text}
        </AppText>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    textDecorationLine: 'none',
    color: LightColors.Border.THEME,
    top: 4
  },
});

export default memo(AppPressableText);
