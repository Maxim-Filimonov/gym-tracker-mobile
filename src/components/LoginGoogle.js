import React from 'react';
import Expo from 'expo';
import { StyleSheet } from 'react-native';
import LoginButton from './LoginButton';

async function onPressLogin() {
  try {
    const result = await Expo.Google.logInAsync({
      androidClientId: '698412195965-6r19vionf1ehiptgqs49gdoedtd2jmho.apps.googleusercontent.com',
      iosClientId: '698412195965-11vilao62ag1r9akvlfqo3nc6pdn7omg.apps.googleusercontent.com',
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
