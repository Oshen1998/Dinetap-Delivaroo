import Lottie, { LottieViewProps } from 'lottie-react-native';
import React, { useRef } from 'react';

const Lottier = (props: LottieViewProps) => {
    const { source, style, ...rest } = props;
    const lottieRef = useRef<Lottie>(null);

    return <Lottie ref={lottieRef} source={source} style={style} {...rest} />;
};

export default Lottier;
