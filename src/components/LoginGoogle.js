import React from 'react';
import Expo from 'expo';
import { StyleSheet } from 'react-native';
import LoginButton from './LoginButton';
import { GOOGLE_ANDROID_CLIENT_ID, GOOGLE_IOS_CLIENT_ID } from '../config';

async function onPressLogin() {
  try {
    const result = await Expo.Google.logInAsync({
      androidClientId: GOOGLE_ANDROID_CLIENT_ID,
      iosClientId: GOOGLE_IOS_CLIENT_ID,
      scopes: ['profile', 'email'],
    });
    console.log('result:', result);
    if (result.type === 'success') {
      return result.accessToken;
    }
    return { cancelled: true };
  } catch (e) {
    return { error: true };
  }
}

const styles = StyleSheet.flatten({
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 3,
    width: 230,
    marginBottom: 8,
  },
  textStyle: {
    color: '#222',
    fontSize: 16,
  },
});

const LoginGoogle = () => (
  <LoginButton styles={styles} onPress={onPressLogin}>
    Sign in with Google
  </LoginButton>
);

export default LoginGoogle;
