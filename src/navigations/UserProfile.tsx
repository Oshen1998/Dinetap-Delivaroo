import React, { memo } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AppText from '../components/texts/AppText';
import { FONT_FAMILIES } from '../constants/fonts.constants';
import { LightColors } from '../themes/colors';

interface UserProfileProps {
  name: string;
  email: string;
  photoUrl: string;
}

const UserProfile = ({ name, email, photoUrl }: UserProfileProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: photoUrl }} style={styles.profilePhoto} />
      <View style={styles.content}>
        <AppText
          fontFamily={FONT_FAMILIES.IBMPlexSans.Medium}
          textStyles={styles.nameText}
        >
          {name}
        </AppText>
        <AppText
          textColor={LightColors.Text.DESCRIPTION}
          textStyles={styles.emailText}
          fontFamily={FONT_FAMILIES.IBMPlexSans.Medium}
        >
          {email}
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  profilePhoto: {
    width: 60,
    height: 60,
    borderRadius: 40,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  emailText: {
    fontSize: 14,
    color: 'gray',
  },
  content: { marginHorizontal: 20 },
});

export default memo(UserProfile);
