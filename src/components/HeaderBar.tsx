import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import GradientBGIcon from './GradientBGIcon';
import ProfilePic from './Profile';
import {useNavigation} from '@react-navigation/native';




const HeaderBar = () => {
  const navigation = useNavigation();

  const handleMenuPress = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: handleLogout,
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };

  const handleLogout = () => {
    navigation.navigate('LogIn');
  };

  return (
    <View style={styles.HeaderContainer}>
      <TouchableOpacity onPress={handleMenuPress}>
        <GradientBGIcon name="menu" color={COLORS.primaryLightGreyHex} size={FONTSIZE.size_16} />
      </TouchableOpacity>
      <ProfilePic />
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

export default HeaderBar;