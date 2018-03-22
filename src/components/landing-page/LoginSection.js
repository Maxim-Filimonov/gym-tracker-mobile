import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginButtonFacebook from '../buttons/LoginButtonFacebook';
import LoginButtonGoogle from '../buttons/LoginButtonGoogle';

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
    <LoginButtonFacebook />
    <LoginButtonGoogle />
  </View>
);
//
export default LoginSection;
