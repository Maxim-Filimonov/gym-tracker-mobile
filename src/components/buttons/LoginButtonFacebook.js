import React from 'react';
import Expo from 'expo';
import { Alert, StyleSheet } from 'react-native';
import LoginButton from './LoginButton';
import { FACEBOOK_APP_ID } from '../../config';

async function onPressLogin() {
  const {
    type, token,
  } = await Expo.Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID, {
    permissions: ['public_profile', 'email'],
  });
  if (type === 'success') {
    // Get the user's name and email using Facebook's Graph API
    const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email`);
    const userData = await response.json(); // userData = {id: string, email: string, name: string }
    // fire off login action here
    Alert.alert(
      'Logged in!',
      `Hi ${userData.name}!`,
    );
  }
}

const styles = StyleSheet.flatten({
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#3B5998',
    padding: 10,
    borderRadius: 3,
    width: 230,
    marginBottom: 8,
  },
  textStyle: {
    color: 'white',
    fontSize: 16,
  },
});

const LoginFacebook = () => (
  <LoginButton styles={styles} onPress={onPressLogin}>
    Continue with Facebook
  </LoginButton>
);

export default LoginFacebook;
