import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginWithFacebook from './LoginFacebook';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#eee',
    justifyContent: 'center',
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
  </View>
);

export default LoginSection;
