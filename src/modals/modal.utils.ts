import { Animated, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('screen');

export const slideFromBottomAnimation = (animatedValue: Animated.Value) => ({
    opacity: animatedValue.interpolate({
        inputRange: [0, 1, 2],
        outputRange: [0, 1, 0.9]
    }),
    transform: [
        {
            translateY: animatedValue.interpolate({
                inputRange: [0, 1, 2],
                outputRange: [height, 0, 0],
                extrapolate: 'clamp'
            })
        }
    ]
});

export const slideFromLeftAnimation = (animatedValue: Animated.Value) => ({
    opacity: animatedValue.interpolate({
        inputRange: [0, 1, 2],
        outputRange: [0, 1, 0.9]
    }),
    transform: [
        {
            translateX: animatedValue.interpolate({
                inputRange: [0, 1, 2],
                outputRange: [-width, 0, 0],
                extrapolate: 'clamp'
            })
        }
    ]
});

export const slideFromRightAnimation = (animatedValue: Animated.Value) => ({
    opacity: animatedValue.interpolate({
        inputRange: [0, 1, 2],
        outputRange: [0, 1, 0.9]
    }),
    transform: [
        {
            translateX: animatedValue.interpolate({
                inputRange: [0, 1, 2],
                outputRange: [width, 0, 0],
                extrapolate: 'clamp'
            })
        }
    ]
});

export const animate = (animatedValue: Animated.Value, toValue: number, callback?: () => void) => {
    Animated.spring(animatedValue, {
        toValue,
        damping: 10,
        mass: 0.35,
        stiffness: 100,
        overshootClamping: true,
        restSpeedThreshold: 0.001,
        restDisplacementThreshold: 0.001,
        useNativeDriver: true
    }).start(({ finished }) => {
        if (finished) callback?.();
    });
};
