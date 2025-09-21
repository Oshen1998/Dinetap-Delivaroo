import {
  ColorValue,
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, { memo, useCallback, useState } from 'react';
import { useThemeStore } from '../../store/themeStore';
import AppText from '../texts/AppText';
import { LightColors } from '../../themes/colors';

export type AppTextInputProps = TextInputProps & {
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;

  // Left icon props
  leftIcon?: ImageSourcePropType;
  leftIconStyle?: StyleProp<ImageStyle>;

  tintColor?: ColorValue;

  // Right button props
  showRightButton: boolean;
  rightButtonType?: 'text' | 'icon';
  rightButtonText?: string;
  rightButtonIcon?: ImageSourcePropType;
  rightButtonTextColor?: ColorValue;
  rightButtonStyle?: StyleProp<ImageStyle>;
  rightButtonTextStyle?: StyleProp<TextStyle>;
  onRightButtonPress?: () => void;

  // Input wrapper styling
  inputWrapperStyle?: ViewStyle;

  // Focus state styling
  focusedStyle?: ViewStyle;

  // Error state
  error?: boolean;
  errorStyle?: ViewStyle;

  // Label
  label?: string;
  labelStyle?: TextStyle;

  // Text overflow handling
  scrollEnabled?: boolean;
  textOverflowMode?: 'scroll' | 'ellipsis' | 'multiline';
  maxLength?: number;
};

const AppTextInput = ({
  containerStyle,
  inputStyle,
  leftIcon,
  leftIconStyle,
  tintColor,
  inputWrapperStyle,
  focusedStyle,

  showRightButton = false,
  rightButtonIcon,
  rightButtonStyle,
  rightButtonTextColor,
  rightButtonTextStyle,
  rightButtonType = 'text',
  rightButtonText = 'Button',
  onRightButtonPress,

  error = false,
  errorStyle,
  label,
  labelStyle,
  scrollEnabled = true,
  textOverflowMode = 'scroll',
  maxLength,
  ...textInputProps
}: AppTextInputProps) => {
  const { Colors } = useThemeStore();
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(
    (e: any) => {
      setIsFocused(true);
      textInputProps.onFocus?.(e);
    },
    [textInputProps],
  );

  const handleBlur = useCallback(
    (e: any) => {
      setIsFocused(false);
      textInputProps.onBlur?.(e);
    },
    [textInputProps],
  );

  const getTextInputProps = useCallback(() => {
    const baseProps = {
      onFocus: handleFocus,
      onBlur: handleBlur,
      maxLength,
      ...textInputProps,
    };

    switch (textOverflowMode) {
      case 'ellipsis':
        return {
          ...baseProps,
          numberOfLines: 1,
          scrollEnabled: false,
          ellipsizeMode: 'tail' as const,
        };

      case 'multiline':
        return {
          ...baseProps,
          multiline: true,
          numberOfLines: undefined,
          scrollEnabled,
          textAlignVertical: 'top' as const,
        };

      case 'scroll':
      default:
        return {
          ...baseProps,
          numberOfLines: 1,
          scrollEnabled,
        };
    }
  }, [
    handleBlur,
    handleFocus,
    maxLength,
    scrollEnabled,
    textInputProps,
    textOverflowMode,
  ]);

  const inputProps = getTextInputProps();

  const renderRightButton = useCallback(() => {
    if (!showRightButton) return null;

    return (
      <TouchableOpacity
        style={[
          styles.renderButton,
          rightButtonStyle,
          {
            borderRadius: inputWrapperStyle?.borderRadius || 8,
          },
        ]}
        onPress={onRightButtonPress}
        activeOpacity={0.7}
      >
        {rightButtonType === 'text' ? (
          <AppText
            textColor={rightButtonTextColor}
            textStyles={rightButtonTextStyle}
          >
            {rightButtonText}
          </AppText>
        ) : (
          <Image
            source={rightButtonIcon}
            tintColor={tintColor}
            style={rightButtonStyle}
          />
        )}
      </TouchableOpacity>
    );
  }, [
    inputWrapperStyle?.borderRadius,
    onRightButtonPress,
    rightButtonIcon,
    rightButtonStyle,
    rightButtonTextColor,
    rightButtonText,
    rightButtonTextStyle,
    rightButtonType,
    showRightButton,
    tintColor,
  ]);

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <AppText textStyles={[styles.label, labelStyle]}>{label}</AppText>
      )}

      {/* Input Container */}
      <View
        style={[
          styles.inputWrapper,
          inputWrapperStyle,
          isFocused && styles.focused,
          isFocused && focusedStyle,
          error && styles.error,
          error && errorStyle,
          textOverflowMode === 'multiline' && styles.multilineWrapper,
        ]}
      >
        {/* Left Icon */}
        {leftIcon && (
          <View
            style={[
              styles.leftIcon,
              textOverflowMode === 'multiline' && styles.leftIconMultiline,
            ]}
          >
            <Image
              source={leftIcon}
              tintColor={tintColor}
              style={leftIconStyle}
            />
          </View>
        )}
        {/* Text Input */}
        <TextInput
          style={[
            {
              backgroundColor: Colors.Background.PRIMARY,
              color: Colors.Text.PRIMARY,
            },
            styles.input,
            leftIcon ? styles.inputWithLeftIcon : undefined,
            textOverflowMode === 'multiline' && styles.multilineInput,
            textOverflowMode === 'ellipsis' && styles.ellipsisInput,
            inputStyle,
          ]}
          {...inputProps}
        />
        {/* Right Button */}
        {renderRightButton()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    maxWidth: '95%',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: LightColors.Text.PRIMARY,
    marginBottom: 6,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    minHeight: 48,
  },
  multilineWrapper: {
    alignItems: 'flex-start',
    minHeight: 80,
  },
  focused: {
    borderColor: LightColors.Border.THEME,
    borderWidth: 2,
  },
  error: {
    borderColor: LightColors.Text.ERROR,
  },
  leftIcon: {
    paddingLeft: 12,
    paddingRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftIconMultiline: {
    alignSelf: 'flex-start',
    paddingTop: 12,
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
  },
  multilineInput: {
    minHeight: 80,
    maxHeight: 120,
    textAlignVertical: 'top',
  },
  ellipsisInput: {
    height: 48,
  },
  inputWithLeftIcon: {
    paddingLeft: 4,
  },
  renderButton: {
    paddingVertical: 8,
    left: 4,
  },
});

export default memo(AppTextInput);
