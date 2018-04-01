import React from 'react';
import PropTypes from 'prop-types';
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

const LoginSection = ({ isLoading }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Login with your social media account to start</Text>
    {isLoading && <Text>Loading please wait...</Text>}
    {
      !isLoading &&
      <View>
        <LoginButtonFacebook />
        <LoginButtonGoogle />
      </View>
    }
  </View>
);

LoginSection.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default LoginSection;
