import {
  ActivityIndicator,
  ColorValue,
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import React, { memo } from 'react';
import AppText from '../texts/AppText';

interface SocialLoginButtonProps extends Omit<TouchableOpacityProps, 'style'> {
  text?: string;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  textStyles?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  customIcon?: ImageSourcePropType;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  height?: number;
  loading?: boolean;
  loadingText?: string;
  iconTintColor?: ColorValue;
  isStart?: boolean;
  isNear?: boolean;
}

const AppButton = ({
  text,
  onPress,
  disabled = false,
  style,
  textStyles,
  iconStyle,
  customIcon,
  textColor,
  backgroundColor,
  borderColor,
  borderWidth,
  borderRadius = 8,
  height = 48,
  loading = false,
  iconTintColor,
  isNear,
  isStart,
  ...props
}: SocialLoginButtonProps) => {
  const buttonStyle: ViewStyle[] = [
    styles.button,
    {
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderWidth: borderWidth,
      borderRadius,
      height,
    },
    disabled && styles.disabled,
    style,
  ].filter(Boolean) as ViewStyle[];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      {...props}
    >
      <View style={styles.content}>
        {customIcon && isStart && !isNear && (
          <View style={styles.iconWrapper}>
            <Image
              source={customIcon}
              tintColor={iconTintColor}
              style={iconStyle}
            />
          </View>
        )}
        {loading ? (
          <ActivityIndicator />
        ) : (
          <React.Fragment>
            <View style={styles.iconContainer}>
              {customIcon && isNear && !isStart && (
                <Image
                  source={customIcon}
                  tintColor={iconTintColor}
                  style={iconStyle}
                />
              )}
              <AppText textStyles={textStyles} textColor={textColor}>
                {text}
              </AppText>
            </View>
          </React.Fragment>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    minHeight: 48,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  iconWrapper: {
    marginRight: -20,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.6,
  },
});

export default memo(AppButton);
