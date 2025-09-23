import {
  ActivityIndicator,
  ColorValue,
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import React, { memo } from 'react';

interface IconButtonsProps extends Omit<TouchableOpacityProps, 'style'> {
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  iconStyle?: StyleProp<ImageStyle>;
  customIcon?: ImageSourcePropType;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  loading?: boolean;
  iconTintColor?: ColorValue;
  height?: number;
}

const IconButton = ({
  onPress,
  disabled,
  style,
  loading,
  backgroundColor,
  borderColor,
  borderWidth,
  borderRadius,
  height,
  customIcon,
  iconTintColor,
  iconStyle,
  ...props
}: IconButtonsProps) => {
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
        {loading ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.iconContainer}>
            {customIcon && (
              <Image
                source={customIcon}
                tintColor={iconTintColor}
                style={iconStyle}
              />
            )}
          </View>
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
    minHeight: 42,
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
  disabled: {
    opacity: 0.6,
  },
});


export default memo(IconButton);
