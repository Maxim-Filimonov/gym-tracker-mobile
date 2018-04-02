import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import LoginButtonFacebook from './LoginButtonFacebook';
import LoginButtonGoogle from './LoginButtonGoogle';

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

const mapStateToProps = state => ({
  isLoading: state.loading.login,
});

export default connect(mapStateToProps)(LoginSection);
