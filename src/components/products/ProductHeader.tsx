import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { randomImage } from '../../utils';
import { images } from '../../themes/images';
import { LightColors } from '../../themes/colors';
import { useNavigation } from '@react-navigation/native';

const ProductHeader = () => {
  const { goBack } = useNavigation();

  return (
    <View style={headerStyles.container}>
      <Image source={randomImage()} style={headerStyles.image} />
      <TouchableOpacity
        style={headerStyles.closeButton}
        onPress={goBack}
        accessibilityLabel="Close"
      >
        <Image
          source={images.icons.close}
          tintColor={LightColors.Button.PRIMARY}
        />
      </TouchableOpacity>
    </View>
  );
};

const headerStyles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: 320,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closeIcon: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ProductHeader;
