import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import LoginWithFacebookButton from '../containers/LoginWithFacebook';
import LoginWithGoogleButton from '../containers/LoginWithGoogle';

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

const LoginSection = ({ isLoading }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Login with your social media account to start</Text>
    {isLoading && <Text>Loading please wait...</Text>}
    {
      !isLoading &&
      <View>
        <LoginWithFacebookButton />
        <LoginWithGoogleButton />
      </View>
    }
  </View>
);

LoginSection.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default LoginSection;
