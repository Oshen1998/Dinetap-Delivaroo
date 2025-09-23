import React, { memo } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

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
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.emailText}>{email}</Text>
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
  content:{marginHorizontal: 20}
});

export default memo(UserProfile);
