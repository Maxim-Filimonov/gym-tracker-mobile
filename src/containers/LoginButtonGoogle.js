import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import LoginButton from '../components/buttons/LoginButton';
import { loginWithGoogle } from '../actions';

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

const LoginGoogle = ({ dispatch }) => (
  <LoginButton styles={styles} onPress={() => dispatch(loginWithGoogle())}>
    Sign in with Google
  </LoginButton>
);

LoginGoogle.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(LoginGoogle);
