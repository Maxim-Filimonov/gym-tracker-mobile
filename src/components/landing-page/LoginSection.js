import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginButtonFacebook from '../../containers/LoginButtonFacebook';
import LoginButtonGoogle from '../../containers/LoginButtonGoogle';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#eee',
  },
  text: {
    marginBottom: 12,
    textAlign: 'center',
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
