import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React, { memo, ReactNode } from 'react';
import { FONT_FAMILIES, FONT_SIZES } from '../../constants/fonts.constants';
import { useThemeStore } from '../../store/themeStore';
import { LightColors } from '../../themes/colors';

type AppTextProps = {
  children: ReactNode;
  textStyles?: StyleProp<TextStyle>;
  textAlign?: 'center' | 'left' | 'right';
  containerStyles?: StyleProp<ViewStyle>;
  fontFamily?: string;
  fontSize?: number;
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
  selectable?: boolean;
  testID?: string;
};

const AppText = ({
  children,
  textStyles,
  textAlign,
  containerStyles,
  fontFamily = FONT_FAMILIES.IBMPlexSans.Regular,
  fontSize = FONT_SIZES.Body,
  numberOfLines,
  ellipsizeMode = 'tail',

  selectable = false,
  testID,
}: AppTextProps) => {
  const { Colors } = useThemeStore();

  return (
    <View style={containerStyles}>
      <Text
        style={[
          styles.defaultText,
          textStyles,
          { fontFamily: fontFamily, fontSize, color: Colors.Text.PRIMARY, textAlign: textAlign },
        ]}
        numberOfLines={numberOfLines}
        ellipsizeMode={ellipsizeMode}
        selectable={selectable}
        testID={testID}
      >
        {children}
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  defaultText: {
    fontSize: 16,
    color: LightColors.Text.PRIMARY,
  },
});

export default memo(AppText);