import React from 'react';
import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import {COLORS, SPACING} from '../theme/theme';
import {useNavigation} from '@react-navigation/native';

const ProfilePic = () => {
  const navigation = useNavigation();

  const handleProfilePicPress = () => {
    navigation.navigate('ProfileScreen');
  };

  return (
    <TouchableOpacity
      onPress={handleProfilePicPress}
      style={styles.ImageContainer}>
      <Image
        source={require('../assets/app_images/avatar.svg')}
        style={styles.Image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ImageContainer: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    borderRadius: SPACING.space_12,
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  Image: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
});

export default ProfilePic;
