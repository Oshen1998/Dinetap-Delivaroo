import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ModalComponentProp } from 'react-native-modalfy';

import { ModalStackParams } from './modal.types';
import { animations } from '../themes/animations';
import { useThemeStore } from '../store/themeStore';
import { screenHeight, screenWidth } from '../utils/screens.util';
import AppText from '../components/texts/AppText';
import { MODAL_STACK } from './modal.constants';
import Lottier from '../components/lottier/Lottier';
import { FONT_FAMILIES, FONT_SIZES } from '../constants/fonts.constants';

type LoaderModalProps = ModalComponentProp<ModalStackParams, void, MODAL_STACK.LOADING>;

const LoadingModal = ({ modal }: LoaderModalProps) => {
    const { params } = modal;
    const {Colors} = useThemeStore();

    return (
        <View
            style={[styles.container, { backgroundColor: Colors.Background.PRIMARY }]}
            renderToHardwareTextureAndroid>
            <AppText
                textAlign="center"
                textStyles={styles.title}
                fontFamily={FONT_FAMILIES.IBMPlexSans.SemiBold}
                fontSize={FONT_SIZES.MediumTitle}
                textColor={Colors.Text.PRIMARY}
                >
                {params?.title ?? ''}
            </AppText>
            <AppText
                textAlign="center"
                fontFamily={FONT_FAMILIES.IBMPlexSans.Medium}
                fontSize={FONT_SIZES.Caption}
                textColor={Colors.Text.DESCRIPTION}
                textStyles={styles.desc}
                >
                {params?.description ?? ''}
            </AppText>
            <View style={styles.animationContainer}>
                <Lottier
                    source={animations.loading}
                    style={styles.animation}
                    autoPlay
                    loop
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginHorizontal: 15,
        overflow: 'hidden',
        width: screenWidth,
        maxHeight: screenHeight * 0.6,
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 20
    },
    title: {
        marginBottom: 8
    },
    animation: {
        width: '100%',
        height: '100%'
    },
    animationContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        width: '100%'
    },
    desc: {
        marginVertical: 20
    }
});

export default LoadingModal;
