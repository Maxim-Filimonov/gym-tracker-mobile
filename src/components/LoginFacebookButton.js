import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';

const LoginFacebookButton = ({ onPressButton }) => {
  const props = {
    onPress: onPressButton,
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

LoginFacebookButton.propTypes = {
  onPressButton: PropTypes.func.isRequired,
};

export default LoginFacebookButton;
