import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { loginWithGoogle } from '../actions/login';

const LoginGoogle = ({ dispatch }) => {
  const props = {
    onPress: () => dispatch(loginWithGoogle()),
    icon: { name: 'google', type: 'font-awesome', color: 'white' },
    title: 'Sign in with Google',
    buttonStyle: {
      backgroundColor: '#4185f4',
      marginBottom: 10,
    },
    color: 'white',
    fontWeight: 'bold',
    rounded: true,
  };
  return <Button {...props} />;
};

LoginGoogle.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(LoginGoogle);
