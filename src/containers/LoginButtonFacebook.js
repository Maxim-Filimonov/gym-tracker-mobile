import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import LoginButton from '../components/buttons/LoginButton';
import { loginWithFacebook } from '../actions';

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

const LoginFacebook = ({ dispatch }) => (
  <LoginButton styles={styles} onPress={() => dispatch(loginWithFacebook())}>
    Continue with Facebook
  </LoginButton>
);

LoginFacebook.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(LoginFacebook);
