import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { COLORS } from '../theme/theme';
import { Orange } from '../components/constants';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const handleSave = () => {
    if (!name || !email || !phone || !address || !city || !country) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    Alert.alert('Success', 'Profile saved successfully', [
      {
        text: 'OK',
        onPress: () => {
          navigation.navigate('Tab');
        },
      },
    ]);
  };
  

  return (
    <ScrollView style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={require('../assets/app_images/avatar.svg')}
          style={styles.avatar}
        />
        <View style={styles.formContainer}>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={[styles.input, { color: 'white' }]}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            placeholderTextColor="grey"
          />
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={[styles.input, { color: 'white' }]}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
            placeholderTextColor="grey"
          />
          <Text style={styles.label}>Phone:</Text>
          <TextInput
            style={[styles.input, { color: 'white' }]}
            value={phone}
            onChangeText={setPhone}
            placeholder="Enter your phone number"
            placeholderTextColor="grey"
            keyboardType="phone-pad"
          />
          <Text style={styles.label}>Shipping Address:</Text>
          <TextInput
            style={[styles.input, { color: 'white' }]}
            value={address}
            onChangeText={setAddress}
            placeholder="Enter your address"
            placeholderTextColor="grey"
          />
          <TextInput
            style={[styles.input, { color: 'white' }]}
            value={city}
            onChangeText={setCity}
            placeholder="Enter your city"
            placeholderTextColor="grey"
          />
          <Text style={styles.label}>Country</Text>
          <Picker
            style={styles.input}
            selectedValue={country}
            onValueChange={(value: React.SetStateAction<string>) =>
              setCountry(value)
            }>
            <Picker.Item label="Select Country" value="" />
            <Picker.Item label="United States" value="US" />
            <Picker.Item label="Canada" value="CA" />
            <Picker.Item label="United Kingdom" value="UK" />
            <Picker.Item label="Lebanon" value="LB" />
            <Picker.Item label="Brasil" value="B" />
            {/* Add more countries as needed */}
          </Picker>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
    paddingTop: 30,
  },
  profilePicture: {
    alignItems: 'center',
    marginVertical: 20,
  },
  
  formContainer: {
    paddingHorizontal: 20,
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    color: 'white',
    paddingTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 8,
    marginTop: 8,
    fontSize: 16,
    color: 'grey'
  },
  saveButton: {
    backgroundColor: Orange,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 10
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default ProfileScreen;