import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginWithFacebook from './LoginFacebook';
import LoginWithGoogle from './LoginGoogle';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#eee',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    marginBottom: 8,
    fontWeight: 'bold',
  },
});

const LoginSection = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Login with your social media account to start</Text>
    <LoginWithFacebook />
    <LoginWithGoogle />
  </View>
);
//
export default LoginSection;
