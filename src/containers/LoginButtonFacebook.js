import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { loginWithFacebook } from '../actions/login';

const LoginFacebook = ({ dispatch }) => {
  const props = {
    onPress: () => dispatch(loginWithFacebook()),
    icon: { name: 'facebook', type: 'font-awesome' },
    title: 'Login with Facebook',
    buttonStyle: {
      backgroundColor: '#3B5998',
      marginBottom: 10,
    },
    rounded: true,
  };
  return <Button {...props} />;
};

LoginFacebook.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(LoginFacebook);
