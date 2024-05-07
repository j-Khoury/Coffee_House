import React, {FC, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Background from '../../components/backGroud';
import Btn from '../../components/btn';
import {Orange} from '../../components/constants';
import Field from '../../components/fields';
import {COLORS} from '../../theme/theme';
import {signUp} from '../../apiServices.js';
import {signUpSuccess, loginFailure} from '../../redux/authActions.js';

interface SignupProps {
  navigation: any;
  signUpSuccess: (user: {email: String, password: String}) => void;
  loginFailure: (errorMessage: string) => void;
}

const Signup: FC<SignupProps> = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleSignUp = async (email: string, password: string, confirmPassword: String) => {
    try {
      const user = await signUp(email, password, confirmPassword);
     
      if (user)
        {
          signUpSuccess(user)
          console.log(user)
            
    }
  }
     catch (error) {
      console.log(error)
      loginFailure(error);
    }
  };
  const handleEmailChange = (text: string) => {
    setEmail(text);
    setEmailError('');
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    setPasswordError('');
  };
  const handleConfirmPasswordChange = (text: string) => {
    setConfirmPassword(text);
    setConfirmPasswordError('');
  };

  return (
    <Background>
      <View style={{alignItems: 'center', width: 400, height: 'auto'}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Register
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: COLORS.primaryBlackHex,
            paddingLeft: 10,
            height: 675,
            flex: 1,
            justifyContent: 'center',
            width: 450,
            borderTopLeftRadius: 150,
            alignItems: 'center',
          }}>
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
            onChangeText={handleEmailChange}
            value={email}
          />
          {emailError ? (
            <Text style={{color: '#D17842'}}>{emailError}</Text>
          ) : null}

          <Field
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={handlePasswordChange}
            value={password}
          />
          {passwordError ? (
            <Text style={{color: '#D17842'}}>{passwordError}</Text>
          ) : null}

          <Field
            placeholder="Confirm Password"
            secureTextEntry={true}
            onChangeText={handleConfirmPasswordChange}
            value={confirmPassword}
            style={{paddingBottom: 50}}
          />
          {confirmPasswordError ? (
            <Text style={{color: '#D17842'}}>{confirmPasswordError}</Text>
          ) : null}

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingTop: 25,
            }}>
            <Text style={{color: 'grey', fontSize: 14}}>
              By signing in, you agree to our{' '}
            </Text>
            <Text style={{color: Orange, fontWeight: 'bold', fontSize: 15}}>
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              width: '78%',
              paddingLeft: 11,
              marginBottom: 22,
            }}>
            <Text style={{color: 'grey', fontSize: 16}}>and </Text>
            <Text style={{color: Orange, fontWeight: 'bold', fontSize: 16}}>
              Privacy Policy
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={Orange}
            btnLabel="Signup"
            onPress={() => {
              let isValid = true;
              if (email.trim() === '') {
                setEmailError('Please enter your email');
                isValid = false;
              }

              if (password.trim() === '') {
                setPasswordError('Please enter your password');
                isValid = false;
              }

              if (confirmPassword.trim() === '') {
                setConfirmPasswordError('Please confirm your password');
                isValid = false;
              }
              if (isValid) {
                props.navigation.navigate('LogIn');
              }
              handleSignUp(email, password, confirmPassword)
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              paddingTop: 20,
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'grey'}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('LogIn')}>
              <Text style={{color: Orange, fontWeight: 'bold', fontSize: 16}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
